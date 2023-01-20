// Main container
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');
document.body.append(mainContainer);

// Header
const indexHeader = document.createElement('div');
indexHeader.setAttribute('class', 'index__header');
indexHeader.innerHTML = `<h1>Quick Quiz</h1>`
mainContainer.appendChild(indexHeader)

// Play Button
const playButton = document.createElement('a');
playButton.setAttribute('href', './pages/game.html');
mainContainer.appendChild(playButton);

const btn1 = document.createElement('button');
btn1.setAttribute('id', 'play');
btn1.innerText = "Play";

const icon1 = document.createElement('i');
icon1.setAttribute('class', 'fa ml-2 fa-play');
icon1.setAttribute('aria-hidden', 'true');
btn1.appendChild(icon1);
playButton.appendChild(btn1);con


// High score button
const highScoreButton = document.createElement('a');
highScoreButton.setAttribute('href', './highscore.html');
mainContainer.appendChild(highScoreButton);

let btn2 = document.createElement('a');
btn2.setAttribute('id', 'highscores');
btn2.innerText = "High Scores";

const icon2 = document.createElement('i');
icon2.setAttribute('class', 'fa ml-2 fa-trophy');
icon2.setAttribute('aria-hidden', 'true');
btn2.appendChild(icon2);
highScoreButton.appendChild(btn2);