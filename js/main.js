const CHART = document.getElementById("lineChart");
console.log(CHART);
// let mixedChart = new Chart(CHART, {
//   type: 'bar',
//   data: {
//     labels: ['1st', '2nd', '3rd', '4th'],
//     datasets: [{
//           label: 'Chill-Pill',
//           data: [1, 2, 6, 7],
//           backgroundColor: ["#dcedc1"]
//         }, {
//           label: 'Soma',
//           data: [4, 5, 6, 7],
//           backgroundColor: ["#a8e6cf"]
//         }, {
//           label: 'Happiness',
//           data: [5, 8, 9, 5],
//           type: 'line',
//           borderColor: ["#ffc425"],
//           fill: false
//         }, {
          // label: 'Sadness',
          // data: [2, 1, 0, 2],
          // type: 'line',
          // borderColor: ["#00aedb"],
          // fill: false
//         }, {
//           label: 'Anger',
//           data: [5, 1, 2, 5],
//           type: 'line',
//           borderColor: ["#d11141"],
//           fill: false
//           }
//         ],
//
//
//   },
//   // options: {
//   //   scales: {
//   //     xAxes: [{
//   //       stacked: true
//   //     }],
//   //     yAxes: [{
//   //       stacked: true
//   //     }]
//   //   }
//   // }
// });



//
let lineChart = new Chart(CHART, {

  type: 'bar',
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          display: false,
          max: 10,
        },
        gridLines: {
          display: false
        },
        scaleLabel: {
          display: true,
          labelString: "|                        +",
          weight: 5
        }
      }]
    }
  },
  data: {
    labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th","10th"],
    datasets: [{
      label: 'Frustration',
      data: [2, 1, 1, 2.5, 0.5, 2, 1, 2, 0, 1],
      type: 'line',
      borderColor: ["#d11141"],
      fill: true,
      backgroundColor: 'rgba(209,17,65,0.1)'
    }, {
      label: 'Happiness',
                data: [5, 8, 9, 5, 10, 7, 9, 7, 7, 5],
                type: 'line',
                borderColor: ["#ffc425"],
                fill: false
    }, {
      label: 'Sadness',
      data: [2, 1, 0, 2, 0, 1, 8, 2, 3, 4],
      type: 'line',
      borderColor: ["#0000ff"],
      fill: false
    }, {
      label: 'Anxiety',
      data: [2, 3, 4, 1, 1, 5, 7, 2, 1, 3],
      type: 'line',
      borderColor: ["#f37735"],
      backgroundColor: 'rgba(243,119,53,0.15)',
      fill: true
    }, {
      label: 'Motivation',
      data: [7, 8, 7, 9, 10, 6, 4, 8, 4, 8],
      type: 'line',
      borderColor: ["#00b159"],
      backgroundColor: 'rgba(0,177,89,0.15)',
      fill: true
    }, {
              options: {
                scales: {
                  xAxes: [{
                    stacked: true
                  }],
                  yAxes: [{
                    stacked: true
                  }]
                }
              },
      label: 'Chill-Pill',
      data: [1, 1, 5, 2, 2, 3, 3, 4, 4, 4],
      type: 'bar',
      backgroundColor: "#a8e6cf",
      fill: true
    }, {
      label: 'Soma',
      data: [1, 1, 1, 2, 2, 3, 3, 4, 4, 4],
      type: 'bar',
      backgroundColor: "#ffd3b6",
      fill: true
    }],

  }


});
