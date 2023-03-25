import { useState } from "react"
import { Bracket, RoundProps } from 'react-brackets';

let r = 1;
var round1;
var round2;
var round3;
var winner;

const rounds = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: "",
        teams: [{ name: 'As It Was - Harry Styles' }, { name: 'Unholy - Sam Smith ft. Kim Petras' }],
      },
      {
        id: 2,
        date: "",
        teams: [{ name: 'Anti-Hero - Taylor Swift' }, { name: 'Less Than Zero - The Weekend' }],
      },
      {
        id: 3,
        date: "",
        teams: [{ name: 'Despecha - Rosalia' }, { name: 'Titi Me Pregunto - Bad Bunny' }],
      },
      {
        id: 4,
        date: "",
        teams: [{ name: 'Free - Florence + The Machine' }, { name: 'Break My Soul - Beyonce' }],
      },
    ],
  },
  {
    title: 'Round two',
    seeds: [
      {
        id: 5,
        date: "",
        teams: [{ name: "" }, { name: '' }],
      },
      {
        id: 6,
        date: "",
        teams: [{ name: "" }, { name: '' }],
      },
    ],
  },
  {
    title: 'Round three',
    seeds: [
      {
        id: 7,
        date: "",
        teams: [{ name: "" }, { name: '' }],
      },
    ],
  },
  {
    title: 'Winner',
    seeds: [
      {
        id: 8,
        date: "",
        teams: [{ name: "" }],
      },
    ],
  },
];

function BracketLeftPanel({input}) {
  var currentRound = input;
  var nextRound = [];
  let r = 0;
  var j = 0;
  
  const generateBracket = (input) => {
    for (let i = 0; i < 8; i += 2) {
      rounds[0]["seeds"][i/2]["teams"][0]["name"] = input[i];
      rounds[0]["seeds"][i/2]["teams"][1]["name"] = input[i+1];
    }
    console.log("Bracket would be generated here.");
  }

  const updateBracket = (currentRound, j) => {
    rounds[1]["seeds"][r]["teams"][j%2]["name"] = currentRound[j];
  }

  generateBracket(input);

    return <div className="LeftPanel">
      <h1>SONGS PANEL</h1>
      <Bracket rounds={rounds} />
      <button onClick={() => updateBracket(currentRound, j)}>{currentRound[j]}</button>
      <button onClick={() => updateBracket(currentRound, j+1)}>{currentRound[j+1]}</button>
    </div>

}

export default BracketLeftPanel;