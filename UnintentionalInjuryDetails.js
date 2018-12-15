
console.log("in js 2");

var x = [58335, 38748, 34673, 6610, 6507, 3786, 2803, 1678, 1385, 1292,
          1292, 982, 902, 801, 610, 495, 311, 152, 12];
var y = ["Poisoning", "MV Traffic", "Fall", "Suffocation",
         "Unspecified", "Drowning", "Fire/burn", "Natural / Environment",
         "Other Spec., classifiable", "Other Land Transport", "Other Spec., NEC", "Pedestrian, Other",
         "Other Transport", "Struck by or Against", "Machinery", "Firearm",
         "Pedal cyclist, Other", "Cut/pierce", "Overexertion"];
var text = ["36.1%", "24%", "21.5%", "4.1%",
          "4%", "2.3%", "1.7%", "1%",
          "0.9%", "0.8%", "0.8%", "0.6%",
          "0.6%", "0.5%", "0.4%", "0.3%",
          "0.2%", "0.1%", "0.0%"];

var data = [{
  x:      x.reverse(),
  y:      y.reverse(),
  text:    text.reverse(),
  textposition: 'auto',
  type: "bar",
  orientation: "h"}];

// TODO: add #s on right (see screenshot)
// : format #s on click w commas?

var layout = {showlegend: false,
  title: "Unintentional Injury Details, for 161,374 people who died in the US in 2016",
  xaxis: { title: "Number of people in the 1000s (k) dying from Unintentional Injuries",
  hoverformat: 'd',
},
  yaxis: { title: "19 Leading Causes"},
  // yaxis2: {
  //   title: "Number of deaths"
  // },
  margin: {
    l: 200,
    r: 100,
    t: 100,
    b: 100},
  height: 800,
  // width: 1200
};

Plotly.newPlot('plot2', data, layout);
