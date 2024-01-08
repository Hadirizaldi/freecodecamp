// initialize Variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let inventory = ["stick", "dagger", "sword"];
let fighting;
let monsterHealth;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const textElement = document.querySelector("#text");
const xpTextElement = document.querySelector("#xpText");
const healthTextElement = document.querySelector("#healthText");
const goldTextElement = document.querySelector("#goldText");
const monsterStatsElement = document.querySelector("#monsterStats");
const monsterNameElement = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons
