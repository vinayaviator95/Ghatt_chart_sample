const dataSource = {
  chart: {
    caption: "",
    subcaption: "",
    theme: "fusion",
    dateformat: "dd/mm/yyyy",
    plottooltext: "Status for period <b>$start - $end</b> is <b>$label</b>"
  },
  legend: {
    item: [
      {
        label: "Machine runtime",
        color: "#62B58D"
      },
      {
        label: "Production cycle",
        color: "#FFC533"
      },
     
      {
        label:"Downtime:production mode",
        color:"#585c5b",
      },
      {
        label:"Downtime:other",
        color:"#5b9ca1",
      },
      {
        label:"Downtime:insert change mode",
        color:"#c98a65",
      },
      {
        label:"Downtime:no Operator",
        color:"#92b065"
      },
      {
        label:"Downtime:machine cleaning",
        color:"#b1d0d8"
      },
      {
        label:"Downtime:maintaiance",
        color:"#2a75af"
      }
    ]
  },
  tasks: {
    task: [
      {
        label: "Machine runtime",
        processid: "A",
        start: "00:00",
        end: "00:20",
        bordercolor: "#62B58D",
        color: "#62B58D",
        id: "1"
      },
      {
        label: "Production cycle",
        processid: "A",
        start: "00:20",
        end: "00:30",
        bordercolor: "#FFC533",
        color: "#FFC533",
        id: "2"
      },
      {
        label: "Production cycle",
        processid: "A",
        start: "00:30",
        end: "00:50",
        bordercolor: "#FFC533",
        color: "#FFC533",
        id: "3"
      },
      {
        label: "Machine runtime",
        processid: "A",
        start: "00:50",
        end: "01:20",
        bordercolor: "#62B58D",
        color: "#62B58D",
        id: "4"
      },
      {
        label: "Machine runtime",
        processid: "A",
        start: "01:20",
        end: "02:20",
        bordercolor: "#62B58D",
        color: "#62B58D",
        id: "5"
      },
      {
        label: "Machine runtime",
        processid: "A",
        start: "02:20",
        end: "05:20",
        bordercolor: "#62B58D",
        color: "#62B58D",
        id: "14"
      },
      {
        label: "Machine runtime",
        processid: "A",
        start: "05:20",
        end: "08:20",
        bordercolor: "#62B58D",
        color: "#62B58D",
        id: "15"
      },
      {
        label: "Production cycle",
        processid: "A",
        start: "08:20",
        end: "10:20",
        bordercolor: "#FFC533",
        color: "#FFC533",
        id: "16"
      },
      {
        label: "Machine runtime",
        processid: "A",
        start: "10:20",
        end: "12:20",
        bordercolor: "#62B58D",
        color: "#62B58D",
        id: "17"
      },
      {
        label: "Downtime:production mode",
        processid: "B",
        start: "00:00",
        end: "02:20",
        bordercolor: "#585c5b",
        color: "#585c5b",
        id: "6"
      },
      {
        label: "Downtime:other",
        processid: "B",
        start: "02:20",
        end: "04:20",
        bordercolor: "#5b9ca1",
        color: "#5b9ca1",
        id: "7"
      },
      {
        label: "Downtime:insert change mode",
        processid: "B",
        start: "04:20",
        end: "05:20",
        bordercolor: "#c98a65",
        color: "#c98a65",
        id: "8"
      },
      {
        label: "Downtime:no Operator",
        processid: "B",
        start: "05:20",
        end: "07:20",
        bordercolor: "#92b065",
        color: "#92b065",
        id: "9"
      },
      {
        label: "Downtime:machine cleaning",
        processid: "B",
        start: "07:20",
        end: "10:20",
        bordercolor: "#b1d0d8",
        color: "#b1d0d8",
        id: "10"
      },
      {
        label: "Downtime:maintaiance",
        processid: "B",
        start: "10:20",
        end: "11:00",
        bordercolor: "#2a75af",
        color: "#2a75af",
        id: "11"
      },
      {
        label: "Downtime:production mode",
        processid: "B",
        start: "11:00",
        end: "12:20",
        bordercolor: "#585c5b",
        color: "#585c5b",
        id: "13"
      },
      
    ]
  },
  processes: {
    isbold: "1",
    // headertext: "Machines",
    process: [
      {
        label: "Overview",
        id: "A"
      },
      {
        label: "DownTime",
        id: "B"
      },
    ]
  },
  categories: [
    {
      category: [
        {
          start: "00:00",
          end: "24:00",
          name: "Sunday 11 july 2021"
        }
      ]
    },
    {
      bgalpha: "0",
      category: [
        {
          start: "00:00",
          end: "01:00",
          label: "01"
        },
        {
          start: "01:00",
          end: "02:00",
          label: "02"
        },
        {
          start: "02:00",
          end: "03:00",
          label: "03"
        },
        {
          start: "03:00",
          end: "04:00",
          label: "04"
        },
        {
          start: "04:00",
          end: "05:00",
          label: "05"
        },
        {
          start: "05:00",
          end: "06:00",
          label: "06"
        },
        {
          start: "06:00",
          end: "07:00",
          label: "07"
        },
        {
          start: "07:00",
          end: "08:00",
          label: "08"
        },
        {
          start: "08:00",
          end: "09:00",
          label: "09"
        },
        {
          start: "9:00",
          end: "10:00",
          label: "10"
        },
        {
          start: "10:00",
          end: "11:00",
          label: "11"
        },
        {
          start: "11:00",
          end: "12:00",
          label: "12"
        },
        {
          start: "12:00",
          end: "13:00",
          label: "13"
        },
        {
          start: "13:00",
          end: "14:00",
          label: "14"
        },
        {
          start: "14:00",
          end: "15:00",
          label: "15"
        },
        {
          start: "15:00",
          end: "16:00",
          label: "16"
        },
        {
          start: "16:00",
          end: "17:00",
          label: "17"
        },
        {
          start: "17:00",
          end: "18:00",
          label: "18"
        },
        {
          start: "18:00",
          end: "19:00",
          label: "19"
        },
        {
          start: "19:00",
          end: "20:00",
          label: "20"
        },
        {
          start: "20:00",
          end: "21:00",
          label: "21"
        },
        {
          start: "21:00",
          end: "22:00",
          label: "22"
        },
        {
          start: "22:00",
          end: "23:00",
          label: "23"
        },
        {
          start: "23:00",
          end: "24:00",
          label: "24"
        },
      ]
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "gantt",
    renderAt: "chart-container",
    width: "100%",
    height: "250",
    dataFormat: "json",
    dataSource
  }).render();
});
