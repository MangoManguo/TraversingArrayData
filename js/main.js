// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yesCount++;
    } else if (surveyData[i] == "No") {
      noCount++;
    } else {
      maybeCount++;
    }
  }

  outputEl.innerHTML = `<h4>Survey Data</h4> <p>Yes: ${yesCount}</p> <p>No: ${noCount}</p> <p>Maybe: ${maybeCount}</p>`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let under18 = 0;
  let eighteenTo35 = 0;
  let thirty6To65 = 0;
  let above65 = 0;
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      under18++;
    } else if (ageData[i] < 36) {
      eighteenTo35++;
    } else if (ageData[i] <= 65) {
      thirty6To65++;
    } else {
      above65++;
    }
  }

  outputEl.innerHTML = `<h4>Age Data</h4> <p>Under 18: ${under18}</p> <p>18 to 35: ${eighteenTo35}</p> <p>36 to 65: ${thirty6To65}</p> <p>Above 65: ${above65}</p>`;
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  outputEl.innerHTML = `<h4>Number Data</h4> <p>Even Numbers: ${evenCount}</p> <p>Odd Numbers: ${oddCount}</p>`;
  console.log(numberData);
}
