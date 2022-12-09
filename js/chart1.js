//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(176, 234, 255, .4)',
      ],
      borderColor: [
        '#B0EAFF',
      ],
      borderWidth: 2
    },
    {
      label: "My Second dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(181, 179, 251, .4)',
      ],
      borderColor: [
        '#B5B3FB',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
      legend: {
         display: false //This will do the task
      }
   }
});