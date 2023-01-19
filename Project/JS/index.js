// Main container
let mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');
document.body.append(mainContainer);

// Header
let indexHeader = document.createElement('div');
indexHeader.setAttribute('class', 'index__header');
indexHeader.innerHTML = `<h1>Quick Quiz</h1>`
document.body.appendChild(indexHeader);

// Play Button
let playButton = document.createElement('a');
playButton.setAttribute('href', './pages/game.html');
mainContainer.appendChild(playButton);

let btn1 = document.createElement('button');
btn1.setAttribute('id', 'play');
btn1.innerText = "Play";

let i1 = document.createElement('i');
i1.setAttribute('class', 'fa ml-2 fa-play');
i1.setAttribute('aria-hidden', 'true');
btn1.appendChild(i1);
playButton.appendChild(btn1);


// High score button
let highScoreButton = document.createElement('a');
highScoreButton.setAttribute('href', './highscore.html');
mainContainer.appendChild(highScoreButton);

let btn2 = document.createElement('a');
btn2.setAttribute('id', 'highscores');
btn2.innerText = "High Scores";

let i2 = document.createElement('i');
i2.setAttribute('class', 'fa ml-2 fa-trophy');
i2.setAttribute('aria-hidden', 'true');
btn2.appendChild(i2);
highScoreButton.appendChild(btn2);