
import './App.css';
import { useState } from 'react';

function App() {
  let data = [
    {
      "question": "Which one is the smallest ocean in the World?",
      "ansOptions": [
        "Indian",
        "Pacific",
        "Atlantic",
        "Arctic"
      ],
      "correct_Answer": "Arctic"
    },
    {
      "question": "Which country gifted the ‘Statue of Liberty’ to USA in 1886?",
      "ansOptions": [
        "France",
        "Canada",
        "Brazil",
        "England"
      ],
      "correct_Answer": "France"
    },
    {
      "question": "Dead Sea is located between which two countries?",
      "ansOptions": [
        "Jordan and Sudan",
        "Jordan and Israel",
        "Turkey and UAE",
        "UAE and Egypt"
      ],
      "correct_Answer": "Jordan and Israel"
    },
    {
      "question": "In which ocean ‘Bermuda Triangle’ region is located?",
      "ansOptions": [
        "Atlantic",
        "Indian",
        "Pacific",
        "Arctic"
      ],
      "correct_Answer": "Atlantic"
    },
    {
      "question": "Which country is known as the ‘playground of Europe’?",
      "ansOptions": [
        "Austria",
        "Holland",
        "Switzerland",
        "Italy"
      ],
      "correct_Answer": "Switzerland"
    },
    {
      "question": "Which country is also known as the ‘Land of Rising Sun’?",
      "ansOptions": [
        "Japan",
        "New Zealand",
        "Fiji",
        "China"
      ],
      "correct_Answer": "Japan"
    },
    {
      "question": "Which country is known as the ‘Land of Thunderbolts’??",
      "ansOptions": [
        "China",
        "Bhutan",
        "Mongolia",
        "Thailand"
      ],
      "correct_Answer": "Bhutan"
    },
    {
      "question": "Which continent has the highest number of countries?",
      "ansOptions": [
        "Asia",
        "Europe",
        "North America",
        "Africa"
      ],
      "correct_Answer": "Africa"
    },
    {
      "question": "In which country, white elephant is found?",
      "ansOptions": [
        "India",
        "Sri Lanka",
        "Thailand",
        "Malaysia"
      ],
      "correct_Answer": "Thailand"
    },
    {
      "question": "Total number of oceans in the World is",
      "ansOptions": [
        "3",
        "5",
        "7",
        "12"
      ],
      "correct_Answer": "5"
    }

  ]

  const [ques, setQues] = useState(0)


  function next() {
    if (ques < data.length - 1) {

      setQues((quesVal) => quesVal + 1);
    }
    else {
      setQues(0);
    }
  }

  function previous() {
    if (ques >= 0) {
      setQues((quesVal) => quesVal - 1)
    }
    else {
      setQues(ques.length - 1);
    }
  }

  function answerOptions() {

  }

  function submit() {

  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="questions">
          <p>{data[ques].question}</p>
        </div>
        <div className="optionContainer">
          <div><input type="checkbox" value="" />{data[ques].ansOptions[0]}</div>
          <div><input type="checkbox" name="" id="" />{data[ques].ansOptions[1]}</div>
          <div><input type="checkbox" name="" id="" />{data[ques].ansOptions[2]}</div>
          <div><input type="checkbox" name="" id="" />{data[ques].ansOptions[3]}</div>
        </div>
        <div className="buttonDiv">
          <button disabled={ques === 0} className="prevBtn" onClick={previous}>previous</button>
          <button className="nextBtn" onClick={ques === data.length - 1 ? submit : next}>{ques === data.length - 1 ? "Submit" : "Next"}</button>
          {/* <button className="submitBtn">Submit</button> */}
        </div>

      </div>
    </div>
  );
}

export default App;
