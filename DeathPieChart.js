
console.log("in js");


var data = [{
  values: [635260, 598038, 161374, 154596, 142142, 116103, 80058, 51537,
          50046, 44965, 40613, 40545, 33246, 29697, 19715, 19362, 526951],
  // For legend...
  // labels: ["Heart Disease", "Malignant Neoplasms", "Unintentional Injury", "Chronic Low. Respiratory Disease",
  //           "Cerebrovascular", "Alzheimer's Disease", "Diabetes Mellitus", "Influenza & Pneumonia",
  //           "Nephritis", "Suicide", "Septicemia", "Liver Disease",
  //           "Hypertension", "Parkinson's Disease", "Pneumonitis", "Homicide", "All Others"],
  text: ["Heart Disease", "Malignant Neoplasms (Cancer)", "Unintentional Injury", "Chronic Low. Respiratory Disease",
            "Cerebrovascular", "Alzheimer's Disease", "Diabetes Mellitus", "Influenza & Pneumonia",
            "Nephritis", "Suicide", "Septicemia", "Liver Disease",
            "Hypertension", "Parkinson's Disease", "Pneumonitis", "Homicide", "All Others"],
  type: 'pie',
  rotate: 90,
}];

// TODO: adjust center accompanying text
// : // TODO: rotate pie so largest slices are on top
// : Unintentional injury details...as a separate graph
// TODO: add text boxes? with phobias highlighted

var layout = {showlegend: false,
  title: "Here is a breakdown of the top 16 causes, which accounts for almost 81% of total.",
  height: 800,
  width: 1200,
  };

Plotly.newPlot('plot', data, layout);
