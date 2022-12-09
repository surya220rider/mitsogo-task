//doughnut
  var ctxD = document.getElementById("doughnutChart").getContext('2d');
  var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
      labels: ["France", "Italy", "Japan", "Canada"],
      datasets: [{
        data: [4260, 3970, 4260, 3970],
        backgroundColor: ["#80E2FF", "#F49FA8", "#FFDF94", "#B5B3FB"],
        hoverBackgroundColor: ["#6CDAFB", "#F8828E", "#F9D277", "#A4A1FE"]
      }]
    },
    options: {
      legend: {
         display: false 
      }
   }
});