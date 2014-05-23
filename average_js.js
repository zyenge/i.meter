var app=  angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
   $scope.chartOptions =  {
    chart: { type: 'line' },
    title: { text: 'Average Watts/Day' },
    xAxis: { categories: ['0:00',
'1:00',
'2:00',
'3:00',
'4:00',
'5:00',
'6:00',
'7:00',
'8:00',
'9:00',
'10:00',
'11:00',
'12:00',
'13:00',
'14:00',
'15:00',
'16:00',
'17:00',
'18:00',
'19:00',
'20:00',
'21:00',
'22:00',
'23:00'] },
    yAxis: { title: { text: 'Watts' } },
    series: [

{ name: 'Weekly Average', data: [304,
303.2,
303.8,
303.4,
303.2,
302,
301.2,
301.6,
302.4,
302.8,
307,
2451.6,
2258.4,
2019.4,
1961.6,
2047.8,
1819.6,
1791.8,
1642,
1365,
1217.25,
413,
324,
303.5
] }
    ]
  };
});
app.directive("highcharts", function() {
  return {
    link: function(scope, el, attrs) {
      var options = scope.$eval(attrs.highcharts);
      options.chart.renderTo = el[0];
      new Highcharts.Chart(options);
    }
  };
});