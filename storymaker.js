// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const mainButton1 = document.querySelector('.main-button1');

// Constants for p tag to display query selectors
const display1 = document.querySelector('.display1');

// Constants for final buttons and p tags
const finalButton1 = document.querySelector('.final-button1');

// Variables for pre-defined arrays
const nouns1 = ['The turkey', 'Mon', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat' ];
const verbs = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const noun2 = ['goat', 'moneky', 'fish', 'cow', 'frog', 'bug', 'worm'];
const setting = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const randomNoun1 = noun1[Math.floor(Math.random() * nouns1.length)];
    display1.textContent = randomNoun1;
    // if-else to change count setting
}

function verb_on_click() {
    const randomVerb = verb[Math.floor(Math.random() * verbs.length)];
    display1.textContent = randomVerb;
    
}

function adjective_on_click() {
    const randomAdjective = adjective[Math.floor(Math.random() * adjectives.length)];
    display1.textContent = randomAdjective;
}

function noun2_on_click() {
    const randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    display1.textContent = randomNoun2;
}

function noun3_on_click() {
    
}

function setting_on_click() {
    const randomSetting = setting[Math.floor(Math.random() * setting.length)];
    display1.textContent = randomSetting;
    
}

// concatenate the user story and display
function playback_on_click() {
    const story = '${nouns1[count1]} ${verbs[count2]} ${adjectives[count3]} ${noun2[count4]} ${setting[count5]}'
    document.getElementById('story').textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('nouns1').addEventListener('click', noun1_on_click);
document.getElementById('verbs').addEventListener('click', verb_on_click);
document.getElementById('adjectives').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);


const studentIdParagraph = document.getElementById('studentId');
const studentId = '1227169/Kiana';
studentIdParagraph.textContent = studentId;

