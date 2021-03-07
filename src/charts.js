export function generateLabels(chart) {
    // get doughnut chart labels
    var data = chart.data;
    if (data.labels.length && data.datasets.length) {
        return data.labels.map(function(label, i) {
            var meta = chart.getDatasetMeta(0);
            var ds = data.datasets[0];
            var arc = meta.data[i];
            var custom = arc && arc.custom || {};
            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
            var arcOpts = chart.options.elements.arc;
            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

            // We get the value of the current label
            var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

            return {
                // Instead of `text: label,`
                // We add the value to the string
                text: label + " : $" + value ,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                index: i
            };
        });
    } else {
        return [];
    }
}

var getTotal = function(myDoughnutChart) {
    // calculate the total sum for the doughnut chart
    var sum = myDoughnutChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
    return `Total: $${sum}`;
}

export function generateChart(container_id,  data, legend_id, legend_position){

    var ctx = document.getElementById(container_id).getContext('2d');

    //  chart options
    var options = {
        cutoutPercentage: 65,
        responsive:true,
        plugins: {
            doughnutlabel: {
                labels: [{
                    text: getTotal,
                    font: {size: '30'},
                    color: 'grey'
                }]
            }
        },
        legend: {
            display: true,
            position: legend_position,
            align: "middle",
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 16
                }
            }
        }
    };

    // chart
    var doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    // chart legend
    // var $listSelector = $(`#${legend_id}`) //Your list element
    // $listSelector.append('<ul></ul>')
    // var chartLabels = generateLabels(doughnutChart)
    // $.each(chartLabels, function(i, obj) {
    //     var li = $('<li>')
    //     if ($(window).width() > 800) {
    //         li = li.css('display','inline')
    //     } 
    //     li = li.addClass('pr3').css('font-size','15px')
    //     var fill = $('<span>').html('&nbsp; &nbsp; &nbsp;').css("background-color", obj.fillStyle)
    //     var item = li.append(fill).append(' '+ obj.text)
    //     $(`#${legend_id} > ul`).append(item)
    // });
}