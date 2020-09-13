import palette from '../../theme/palette';

export const data = {
  labels: ['Marzo/2020' ,'Abril/2020', 'Mayo/2020','Junio/2020', 'Julio/2020','Septiembre/2020'],
  datasets: [
    {
      label: 'Cantidad de anuncios',
      backgroundColor: palette.primary.dark,
      data: [18, 5, 19, 27, 29, 19, 20,11]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: true,
  },
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 5,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};