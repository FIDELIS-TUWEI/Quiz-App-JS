// Create a div 

const highScoreContainer =  document.createElement('div');
highScoreContainer.setAttribute('class', 'container');
document.body.append(highScoreContainer);

const innerDiv = document.createElement('div');
innerDiv.setAttribute('id', 'highScores');
innerDiv.setAttribute('class', 'highScores1 highScores2');
highScoreContainer.appendChild(innerDiv);

// Trophy image

const trophyImg = document.createElement('img');
trophyImg.setAttribute('src', 'https://t3.ftcdn.net/jpg/02/84/67/02/240_F_284670286_VB4EEnS01sbqlueiFka9BO3S5bEFhnx2.jpg');
trophyImg.setAttribute('alt', 'High_Score_Trophy');
innerDiv.appendChild(trophyImg);

// Header
const headHighScore = document.createElement('h1');
headHighScore.setAttribute('id', 'finalScore');
headHighScore.innerText = "High Score";
innerDiv.appendChild(headHighScore);

// Ul scores
const ulHighScore = document.createElement('ul');
ulHighScore.setAttribute('id', 'allHighScores');
innerDiv.appendChild(ulHighScore);

// Go home button
const goHomeButton = document.createElement('a');
goHomeButton.setAttribute('href', '../index.html');
innerDiv.appendChild(goHomeButton);

const btnGoHome = document.createElement('button');
btnGoHome.setAttribute('id', 'goHome');
btnGoHome.setAttribute('class', 'btn');
btnGoHome.innerText = "Go Home";

goHomeButton.appendChild(btnGoHome);

const icon5 = document.createElement('i');
icon5.setAttribute('class', '<i class="fa-solid fa-house"></i>');
icon5.setAttribute('aria-hidden', 'true');
goHomeButton.appendChild(icon5)