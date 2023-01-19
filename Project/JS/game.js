// Game Container
const gameContainer = document.createElement('div');
gameContainer.setAttribute('class', 'container');
document.body.append(gameContainer);

// Quiz Section
const quizDiv = document.createElement('div');
quizDiv.setAttribute('id', 'quiz');
gameContainer.appendChild(quizDiv);

// Head section
const headDiv = document.createElement('div');
headDiv.setAttribute('id', 'head__section');
quizDiv.appendChild(headDiv);

// Head div item -1
const headDivItem1 = document.createElement('div');
headDivItem1.setAttribute('id', 'head__section__item');
headDiv.appendChild(headDivItem1);

// Question Paragragh
const questionP = document.createElement('p');
questionP.setAttribute('id', 'progressText');
questionP.setAttribute('class', 'head__prefix');
questionP.innerText = `Question`;
headDivItem1.appendChild(questionP);

// Progress Bar
const progressDiv = document.createElement('div');
progressDiv.setAttribute('id', 'progress');
headDivItem1.appendChild(progressDiv);

// Progress Status
const statusDiv = document.createElement('div');
statusDiv.setAttribute('id', 'progressStatus');
progressDiv.appendChild(statusDiv);

// Head div item -2
const headDivItem2 = documen.createElement('div');
headDivItem2.setAttribute('id', 'head__section__item');
headDiv.appendChild(headDivItem2);

// Score paragraph
const scoreP = document.createElement('p');
scoreP.setAttribute('class', 'head__prefix');
scoreP.innerText = `Score`;
headDivItem2.appendChild(scoreP);

// Score Value h1
const scoreValueH1 = document.createElement('h1');
scoreValueH1.setAttribute('id', 'score');
scoreValueH1.setAttribute('class', 'head__section__text');
scoreValueH1.innerText = `0`;
headDivItem2.appendChild(scoreValueH1);

// Main Quiz Section

// Question
const questionH1 = document.createElement('h1');
questionH1.setAttribute('id', 'question');
quizDiv.appendChild(questionH1);

// Options

// Choice - 1
const choice1 = document.createElement('div');
choice1.setAttribute('class', 'choice__container');
quizDiv.appendChild(choice1);

// Paragraph - 1 choice - 1
const paragraph1Choice1 = document.createElement('p');
paragraph1Choice1.setAttribute('class', 'choice__prefix');
paragraph1Choice1.innerText = `A`;
choice1.appendChild(paragraph1Choice1);

// Paragrapgh - 2 choice - 1
const paragraph2Choice1 = document.createElement('p');
paragraphChoice2Choice1.setAttribute('class', 'choice__text');
paragraphChoice2Choice1.setAttribute('data-number', '1');

choice1.appendChild(paragraph2Choice1);

// Choice - 2
const choice2 = document.createElement('div');
choice2.setAttribute('class', 'choice__container');
quizDiv.appendChild(choice2);

// Paragraph - 1 choice 2
const paragraph1Choice2 = document.createElement('p');
paragraph1Choice2.setAttribute('id', 'choice__prefix');
paragraph1Choice2.innerText = `B`;
choice2.appendChild(paragraph1Choice2);

// Paragraph - 2 choice 2
const paragraph2choice2 = document.createElement('p');
paragraph2choice2.setAttribute('class', 'choice__text');
paragraph2choice2.setAttribute('data-number', '2');

choice2.appendChild(paragraph2choice2);

// choice - 3
const choice3 = document.createElement('div');
choice3.setAttribute('class', 'choice__container');
quizDiv.appendChild(choice3);

// Paragraph -1 choice -3
const paragraph1Choice3 = document.createElement('p');
paragraph1Choice3.setAttribute('class', 'choice__prefix');
paragraph1Choice3.innerText = `C`;
choice3.appendChild(paragraph1Choice3);

// Paragraph -2 choice 3
const paragraph2Choice3 = document.createElement('p');
paragraph2Choice3.setAttribute('id', 'choice__text');
paragraph2Choice3.setAttribute('data-number', '3');

choice3.appendChild(paragraph2Choice3);

// Choice - 4
const choice4 = document.createElement('div');
choice4.setAttribute('class', 'choice__container');
quizDiv.appendChild(choice4);

// Paragraph - 1 choice -4
const paragraph1Choice4 = document.createElement('p');
paragraph1Choice4.setAttribute('id', 'choice__prefix');
choice4.innerText = `D`;
choice4.appendChild(paragraph1Choice4);

// Paragraph -2 choice 4
const paragraph2Choice4 = document.createElement('p');
paragraph2Choice4.setAttribute('id', 'choice__text');
paragraph2Choice4.setAttribute('data-number', '4');

choice4.appendChild(paragraph2Choice4);
