// Create container
const endContainer = document.createElement('div');
endContainer.setAttribute('class', 'container');
document.body.append(endContainer);

// Inner div

const innerDiv = document.createElement('div');
innerDiv.setAttribute('id', 'end');
innerDiv.setAttribute('class', 'end1 end2');
endContainer.appendChild(innerDiv);

// Final score

const final = document.createElement('h1');
final.setAttribute('id', 'finalScore');
final.innerText = `0`;
innerDiv.appendChild(final);

// Form container
const formContainer = document.createElement('form')
formContainer.setAttribute('class', 'form__container');
innerDiv.appendChild(formContainer);

// Input field
const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('id', 'username');
inputField.setAttribute('name', 'name');
inputField.setAttribute('placeholder', 'Enter your Name');
formContainer.appendChild(inputField);

// Save button
const saveBtn = document.createElement('button');
saveBtn.setAttribute('type', 'submit');
saveBtn.setAttribute('class', 'btn');
saveBtn.setAttribute('id', 'saveScoreBtn');
saveBtn.setAttribute('onclick', 'saveHighScore(event)');
saveBtn.setAttribute('disabled', 'true');
saveBtn.innerText = `Save`;
formContainer.appendChild(saveBtn);

// Play again button
const playAgainLink = document.createElement('a');
playAgainLink.setAttribute('href', './game.html');
innerDiv.appendChild(playAgainLink);

const playAgainButton = document.createElement('button');
playAgainButton.setAttribute('id', 'playAgain');
playAgainButton.setAttribute('class', 'btn');
playAgainButton.innerText = `Play Again`;
playAgainLink.appendChild(playAgainButton);

// Play button
const icon3 = document.createElement('i');
icon3.setAttribute('class', 'fa ml-2 fa-play');
icon3.setAttribute('aria-hidden', 'true');
playAgainButton.appendChild(icon3);

// Go home button
const goHomeLink = document.createElement('a');
goHomeLink.setAttribute('href', '../index.html');
innerDiv.appendChild(goHomeLink);

const goHomeButton = document.createElement('button');
goHomeButton.setAttribute('id', 'goHome');
goHomeButton.setAttribute('class', 'btn');
goHomeButton.innerText = `Go Home`;
goHomeLink.appendChild(goHomeButton);

// Home Icon
const icon4 = document.createElement('i');
icon4.setAttribute('class', '<i class="fa-solid fa-house"></i>');
icon4.setAttribute('aria-hidden', 'true');
goHomeButton.appendChild(icon4);