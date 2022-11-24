let playerscore = 0;
let computerscore = 0;
function rockPaperScissors() {
  let resultdiv = document.querySelector("#result");
  const mychoice = prompt("ROCK,PAPER or SCISSORS").toLowerCase();
  if (mychoice != "rock" && mychoice != "paper" && mychoice != "scissors") {
    resultdiv.innerHTML = `INVALID INPUT, PLAY AGAIN :)`;
    return;
  }
  const choices = ["rock", "paper", "scissors"];
  const SolutionSpace = [
    { player: "rock", computer: "scissors", action: "hits", result: "win" },
    { player: "paper", computer: "scissors", action: "cuts", result: "lose" },
    {
      player: "scissors",
      computer: "scissors",
      action: "equals",
      result: "draw",
    },
    { player: "rock", computer: "paper", action: "wraps", result: "lose" },
    { player: "paper", computer: "paper", action: "equals", result: "draw" },
    { player: "scissors", computer: "paper", action: "cuts", result: "win" },
    { player: "rock", computer: "rock", action: "equals", result: "draw" },
    { player: "paper", computer: "rock", action: "wraps", result: "win" },
    { player: "scissors", computer: "rock", action: "hits", result: "lose" },
  ];

  resultdiv.innerHTML = playRound(mychoice, getComputerChoice(choices));

  function getComputerChoice(choices) {
    let choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
  }

  function playRound(playerChoice, computerChoice) {
    let options = [];
    for (let i = 0; i < Object.keys(SolutionSpace).length; i++) {
      if (SolutionSpace[i].player == playerChoice) {
        options.push(SolutionSpace[i]);
      }
    }

    for (let i = 0; i < Object.keys(options).length; i++) {
      if (options[i].computer == computerChoice) {
        let playericon = document.getElementById("player");
        let computericon = document.getElementById("computer");
        let playerscoreshow = document.querySelector("#playerscore");
        let computerscoreshow = document.querySelector("#computerscore");
        playericon.setAttribute("src", `./img/${options[i].player}-left.png`);
        computericon.setAttribute(
          "src",
          `./img/${options[i].computer}-right.png`
        );
        if (options[i].result == "win") {
          resultdiv.setAttribute("style", "color: blue");
          playerscore++;
          playerscoreshow.innerHTML = playerscore;
          return `${options[i].player} ${options[i].action} ${options[i].computer}!  You ${options[i].result}`.toUpperCase();
        } else if (options[i].result == "lose") {
          resultdiv.setAttribute("style", "color: red");
          computerscore++;
          computerscoreshow.innerHTML = computerscore;
          return `${options[i].computer} ${options[i].action} ${options[i].player}!  You ${options[i].result}`.toUpperCase();
        } else {
          resultdiv.setAttribute("style", "color: black");
          return `${options[i].player} ${options[i].action} ${options[i].computer}!  You ${options[i].result}`.toUpperCase();
        }
      }
    }
  }
}
