function togglePopup(popupId, show) {
  const popup = document.getElementById(popupId);
  if (show) {
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('active'), 10); // Delay for CSS transition
  } else {
    popup.classList.remove('active');
    setTimeout(() => popup.style.display = 'none', 300); // Match transition duration
  }
}

// Update all popup functions to use togglePopup
function openQuiz() { togglePopup('quiz-popup', true); }
function closeQuiz() { togglePopup('quiz-popup', false); }
function confirmClose() {
  if (currentQuestion >= selectedQuestions.length || confirm("Are you sure you want to exit the quiz? Progress will be lost.")) {
    togglePopup('quiz-popup', false);
  }
}
function toggleOGPopup() { togglePopup('og-popup', document.getElementById('og-popup').style.display !== 'flex'); }
function closeOGPopup() { togglePopup('og-popup', false); }
function closeMemoryGame() {
  if (moveCount > 0 && !confirm("Are you sure you want to exit? Progress will be lost.")) return;
  togglePopup('memory-popup', false);
  resetMemoryGame();
}
function closeZKStories() { togglePopup('zk-stories-popup', false); }
function close2048Game() {
  if (!gameOver && score > 0 && !confirm("Are you sure you want to exit? Progress will be lost.")) return;
  togglePopup('game2048-popup', false);
  document.removeEventListener('keydown', keyHandler);
}
function closePostJobs() { togglePopup('post-jobs-popup', false); }
function closeMentionPopup() { togglePopup('mention-popup', false); }
function playMemoryGame() { togglePopup('memory-popup', true); toggleMenu(); startMemoryGame(); }
function readZKStories() { togglePopup('zk-stories-popup', true); toggleMenu(); renderZKStories(); }
function play2048() { togglePopup('game2048-popup', true); toggleMenu(); init2048(); document.addEventListener('keydown', keyHandler); }
function playPostJobs() { togglePopup('post-jobs-popup', true); toggleMenu(); }


/* ===============================
   1. Team, Moderators & OGs Data
================================*/
const teamData = [
  { name: "Vanishree Rao", role: "Chief Executive Officer", img: "images/vani.jpg", x: "https://x.com/vanishree_rao" },
  { name: "Pranit Garg", role: "Chief Marketing Officer", img: "images/pranit.jpg", x: "https://x.com/pranitgarg" },
  { name: "Brrrrr", role: "Devrel Engineer", img: "images/brrr.jpg", x: "https://x.com/brrrkyle" },
  { name: "Pavi", role: "Principal Engineer", img: "images/pavi.jpg", x: "https://x.com/zkPavi"},
  { name: "Sean Gilbert", role: "Growth Manager", img: "images/sean.jpg", x: "https://x.com/seanmgilbert"},
  { name: "Chloe", role: "Operations Lead", img: "images/icon.png", x: "#"},
  { name: "Aleksandr", role: "Proof Systems Integration Engineer", img: "images/icon.png", x: "#"},
  { name: "Daniil", role: "Senior Protocol Engineer", img: "images/icon.png", x: "#"},
  { name: "Sebastien", role: "Principal Protocol Engineer", img: "images/icon.png",  x: "#"},
  { name: "Matti", role: "Protocol Engineer", img: "images/icon.png",  x: "#"},
  { name: "Lurii", role: "Senior Rust Protocol Engineer", img: "images/icon.png", x: "#"}
];

const modsData = [
  { name: "EVZ", role: "Community Manager", img: "images/evz.jpg", x: "https://x.com/evz9894" },
  { name: "Bizzle", role: "Senior Mod", img: "images/bizzle.jpg", x: "https://x.com/_bizzzz" },
  { name: "Samb0s", role: "Mod", img: "images/sambos.jpg", x: "https://x.com/gienixxnft" },
  { name: "Moffle", role: "Mod", img: "images/moffle.jpg", x: "https://x.com/moffle999" },
  { name: "FinZKir", role: "Mod Champ", img: "images/finzkir.jpg", x: "https://x.com/f1nk1r1o" },
  { name: "Space Traveler", role: "Mod Champ", img: "images/space.jpg", x: "https://x.com/spacetraveler7x" },
  { name: "Versus", role: "Mod Champ", img: "images/versus.jpg", x: "https://x.com/andrey_versus" }
];

const ogsData = [
  { name: "King Victor", role: "Community OG", img: "images/king.png", x: "https://x.com/kingingveek" },
  { name: "Otis", role: "Community OG", img: "images/otis.jpeg", x: "https://x.com/otisverse" },
  { name: "Miss J", role: "Community OG", img: "images/missj.jpg", x: "https://x.com/Missj3_3" },
  { name: "Da_Justified", role: "Community OG", img: "images/just.jpg", x: "https://x.com/Da_justified" },
  { name: "MidasT", role: "Community OG", img: "images/midas.jpeg", x: "https://x.com/iamitmdt" },
  { name: "Parole Chief", role: "Community OG", img: "images/elesdee.jpg", x: "https://x.com/Missj3_3" },
  { name: "Danbig1", role: "Community OG", img: "images/danb.jpg", x: "https://x.com/Sexytitan18" },
  { name: "Spaceking", role: "Community OG", img: "images/spackin.png", x: "https://x.com/stringz00" },
  { name: "Rowley", role: "Community OG", img: "images/rowley.jpeg", x: "https://x.com/Rowleysghost" },
  { name: "QueenMother", role: "Community OG", img: "images/queenmon.jpeg", x: "https://x.com/_queenmother_1" },
  { name: "Moneysmall", role: "Community OG", img: "images/smalmon.png", x: "https://x.com/moneysmall12" },
  { name: "Tdayz", role: "Community OG", img: "images/tdayz.png", x: "https://x.com/Tdayz_X" },
  { name: "Otega.ip", role: "Community OG", img: "images/otega.png", x: "https://x.com/twbguy" },
  { name: "Moted.Eth", role: "Community OG", img: "images/moted.jpg", x: "https://x.com/Abyomiii" },
  { name: "Shola", role: "Community OG", img: "images/arubu.png", x: "https://x.com/arubuo5" }
];

const specialUsers = new Set([
  'vanishree_rao', 'pranitgarg', 'brrrkyle', 'zkpavi', 'seanmgilbert',
  'evz9894', '_bizzzz', 'gienixxnft', 'moffle999', 'f1nk1r1o', 'spacetraveler7x', 'andrey_versus',
  'kingingveek', 'otisverse', 'missj3_3', 'da_justified', 'iamitmdt', 'sexytitan18', 'stringz00', 'rowleysghost', '_queenmother_1', 'moneysmall12', 'tdayz_x', 'twbguy', 'abyomiii', 'arubuo5'
]);

/* X (Twitter) SVG icon */
const xIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.33l-5.214-6.817-5.97 6.817H1.836l7.73-8.832L1.5 2.25h7.842l4.713 6.231 4.189-6.231z"/></svg>`;

function createCard(person) {
  return `
    <div class="card">
      <img src="${person.img}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p>${person.role}</p>
      <a href="${person.x}" target="_blank">${xIconSVG}</a>
    </div>
  `;
}

function renderCards(data, containerId, showAll, limit) {
  const container = document.getElementById(containerId);
  container.innerHTML = data
    .slice(0, showAll ? data.length : limit)
    .map(createCard).join("");
}

let showAllTeam = false;
function toggleTeam() {
  showAllTeam = !showAllTeam;
  renderCards(teamData, "team-grid", showAllTeam, 3);
  document.querySelector("button[onclick='toggleTeam()']").innerText = showAllTeam ? "Show Less" : "Show All Team";
}
// Initialize Team section with only 3 items
renderCards(teamData, "team-grid", showAllTeam, 3);

let showAllMods = false;
function toggleMods() {
  showAllMods = !showAllMods;
  renderCards(modsData, "mods-grid", showAllMods, 3);
  document.querySelector("button[onclick='toggleMods()']").innerText = showAllMods ? "Show Less" : "Show All Moderators";
}
// Initialize Moderators section with only 3 items
renderCards(modsData, "mods-grid", showAllMods, 3);

let showAllOGs = false;
function toggleOGs() {
  showAllOGs = !showAllOGs;
  renderCards(ogsData, "ogs-grid", showAllOGs, 3);
  document.querySelector("button[onclick='toggleOGs()']").innerText = showAllOGs ? "Show Less" : "Show All OGs";
}
// Initialize OGs section with only 3 items
renderCards(ogsData, "ogs-grid", showAllOGs, 3);

/* Dropdown Menu */
function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function readZKStories() {
  const popup = document.getElementById("zk-stories-popup");
  popup.style.display = "flex";
  toggleMenu(); // Close menu
  renderZKStories();
}

function renderZKStories() {
  const storiesList = document.getElementById("stories-list");
  const stories = [
    {
      title: "The Cave Analogy",
      content: "Imagine a cave with two entrances, A and B, connected by a secret path. You want to prove to a friend that you know the path without revealing it. You enter B, your friend chooses an exit, and you come out the chosen one. Repeat to convince without sharing the secret! This shows ZKPs let you prove knowledge without revealing details. 🎭"
    },
    {
      title: "The Magic Trick",
      content: "ZKPs are like a magic trick: The magician (prover) convinces the audience (verifier) of a feat without showing how it's done. In crypto, it's used for private transactions—you prove ownership without revealing balances. Abracadabra! ✨"
    },
    {
      title: "The Sudoku Puzzle",
      content: "You solve a Sudoku and prove it to a friend without showing the solution. Using ZKPs, you generate a proof that the puzzle is solved correctly, keeping your answers hidden. Fun for games and secure voting! 🧩"
    },
    {
      title: "Explaining to a Child",
      content: "ZKPs are like telling your cousin you know a secret password without saying it. You prove you know it by answering challenges correctly, but never reveal the password. Simple and secure, like a secret club handshake! 👦"
    },
    {
      title: "Where's Wally Proof",
      content: "In a 'Where's Wally' book, you prove you've found Wally without pointing him out. Using ZKPs, you create a proof that verifies your find while keeping Wally's location hidden. Perfect for private data searches! 🔍"
    }
  ];

  storiesList.innerHTML = stories.map(story => `
    <div class="story-item">
      <h3>${story.title}</h3>
      <p>${story.content}</p>
    </div>
  `).join("");
}

function closeZKStories() {
  document.getElementById("zk-stories-popup").style.display = "none";
}

// Close ZK Stories popup when clicking outside
document.addEventListener("click", function(event) {
  const popup = document.getElementById("zk-stories-popup");
  const content = document.querySelector(".zk-stories-content");
  const button = document.querySelector(".menu-item[onclick='readZKStories()']");
  if (popup.style.display === "flex" && !content.contains(event.target) && !button.contains(event.target)) {
    popup.style.display = "none";
  }
});

/* Memory Game */
function playMemoryGame() {
  const popup = document.getElementById("memory-popup");
  popup.style.display = "flex";
  toggleMenu(); // Close menu
  startMemoryGame();
}

let memoryCards = [];
let flippedCards = [];
let moveCount = 0;
let matchedPairs = 0;

function startMemoryGame() {
  const grid = document.getElementById("memory-grid");
  const moveDisplay = document.getElementById("move-count");
  const winMessage = document.getElementById("win-message");
  const proofStatus = document.getElementById("proof-status");
  const proofMessage = document.getElementById("proof-message");
  const txHash = document.getElementById("tx-hash");
  moveCount = 0;
  matchedPairs = 0;
  flippedCards = [];
  moveDisplay.innerText = "0";
  winMessage.style.display = "none";
  proofStatus.style.display = "none";
  proofMessage.innerText = "";
  txHash.innerText = "";

  // 8 emojis, each appearing twice
  const emojis = ['🔥', '🧠', '🌟', '🛡️', '🚀', '💪', '✨', '🔗'];
  memoryCards = [...emojis, ...emojis].map((content, index) => ({
    id: index,
    content,
    flipped: false,
    matched: false
  }));

  // Shuffle cards
  memoryCards.sort(() => Math.random() - 0.5);

  // Render cards
  grid.innerHTML = memoryCards.map(card => `
    <div class="memory-card${card.flipped ? ' flipped' : ''}${card.matched ? ' matched' : ''}" data-id="${card.id}">
      <div class="front">${card.content}</div>
      <div class="back"></div>
    </div>
  `).join("");

  // Add click listeners
  document.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", handleCardClick);
  });
}

function handleCardClick(event) {
  const cardId = parseInt(event.currentTarget.dataset.id);
  const card = memoryCards.find(c => c.id === cardId);

  if (card.flipped || card.matched || flippedCards.length >= 2) return;

  card.flipped = true;
  event.currentTarget.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moveCount++;
    document.getElementById("move-count").innerText = moveCount;
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.content === card2.content) {
    card1.matched = card2.matched = true;
    document.querySelector(`[data-id="${card1.id}"]`).classList.add("matched");
    document.querySelector(`[data-id="${card2.id}"]`).classList.add("matched");
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === memoryCards.length / 2) {
      setTimeout(showWinMessage, 500);
    }
  } else {
    setTimeout(() => {
      card1.flipped = card2.flipped = false;
      document.querySelector(`[data-id="${card1.id}"]`).classList.remove("flipped");
      document.querySelector(`[data-id="${card2.id}"]`).classList.remove("flipped");
      flippedCards = [];
    }, 1000);
  }
}

function showWinMessage() {
  const winMessage = document.getElementById("win-message");
  document.getElementById("final-move-count").innerText = moveCount;
  winMessage.style.display = "block";
}

function generateProof() {
  const proofMessage = document.getElementById("proof-message");
  const txHash = document.getElementById("tx-hash");
  const proofStatus = document.getElementById("proof-status");

  proofMessage.innerText = "Generating proof...";
  proofStatus.style.display = "block";
  txHash.innerText = "";

  setTimeout(() => {
    proofMessage.innerText = "Proof generated ✅";
    const randomTxHash = "0x" + Math.random().toString(16).substring(2, 66);
    txHash.innerText = "Tx Hash: " + randomTxHash;
  }, 5000); // 5-second delay
}

function resetMemoryGame() {
  startMemoryGame();
}

function closeMemoryGame() {
  if (moveCount > 0 && !confirm("Are you sure you want to exit? Progress will be lost.")) {
    return;
  }
  document.getElementById("memory-popup").style.display = "none";
  resetMemoryGame();
}

// Close memory popup when clicking outside
document.addEventListener("click", function(event) {
  const popup = document.getElementById("memory-popup");
  const content = document.querySelector(".memory-content");
  const button = document.querySelector(".menu-item[onclick='playMemoryGame()']");
  if (popup.style.display === "flex" && !content.contains(event.target) && !button.contains(event.target)) {
    closeMemoryGame();
  }
});

/* 2048 Game */
let grid;
let score = 0;
let bestScore = localStorage.getItem('best2048') || 0;
let gameOver = false;
let keyHandler;

function play2048() {
  const popup = document.getElementById("game2048-popup");
  popup.style.display = "flex";
  toggleMenu(); // Close menu
  init2048();
  keyHandler = handleKeyDown;
  document.addEventListener('keydown', keyHandler);
}

function init2048() {
  grid = Array.from({ length: 4 }, () => Array(4).fill(0));
  score = 0;
  gameOver = false;
  document.getElementById('score').innerText = score;
  document.getElementById('best-score').innerText = bestScore;
  document.getElementById('game-over-overlay').style.display = 'none';
  addNewTile();
  addNewTile();
  renderGrid();
}

function renderGrid() {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const tile = document.createElement('div');
      const value = grid[i][j];
      tile.classList.add('tile');
      if (value > 0) {
        tile.classList.add(`tile-${value}`);
        tile.innerText = value;
      }
      container.appendChild(tile);
    }
  }
}

function addNewTile() {
  const emptyCells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        emptyCells.push({ x: i, y: j });
      }
    }
  }
  if (emptyCells.length > 0) {
    const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    grid[x][y] = Math.random() < 0.9 ? 2 : 4;
  }
}

function slide(row) {
  let newRow = row.filter(num => num !== 0);
  for (let i = 0; i < newRow.length - 1; i++) {
    if (newRow[i] === newRow[i + 1]) {
      newRow[i] *= 2;
      score += newRow[i];
      newRow.splice(i + 1, 1);
      i--;
    }
  }
  while (newRow.length < 4) {
    newRow.push(0);
  }
  return newRow;
}

function moveLeft() {
  let moved = false;
  for (let i = 0; i < 4; i++) {
    const newRow = slide(grid[i]);
    if (newRow.join(',') !== grid[i].join(',')) moved = true;
    grid[i] = newRow;
  }
  return moved;
}

function moveRight() {
  let moved = false;
  for (let i = 0; i < 4; i++) {
    const newRow = slide(grid[i].reverse()).reverse();
    if (newRow.join(',') !== grid[i].join(',')) moved = true;
    grid[i] = newRow;
  }
  return moved;
}

function moveUp() {
  let moved = false;
  for (let j = 0; j < 4; j++) {
    let col = [grid[0][j], grid[1][j], grid[2][j], grid[3][j]];
    const newCol = slide(col);
    if (newCol.join(',') !== col.join(',')) moved = true;
    for (let i = 0; i < 4; i++) grid[i][j] = newCol[i];
  }
  return moved;
}

function moveDown() {
  let moved = false;
  for (let j = 0; j < 4; j++) {
    let col = [grid[0][j], grid[1][j], grid[2][j], grid[3][j]];
    const newCol = slide(col.reverse()).reverse();
    if (newCol.join(',') !== col.join(',')) moved = true;
    for (let i = 0; i < 4; i++) grid[i][j] = newCol[i];
  }
  return moved;
}

function handleKeyDown(event) {
  if (gameOver) return;
  let moved = false;
  switch (event.key) {
    case 'ArrowLeft': moved = moveLeft(); break;
    case 'ArrowRight': moved = moveRight(); break;
    case 'ArrowUp': moved = moveUp(); break;
    case 'ArrowDown': moved = moveDown(); break;
  }
  if (moved) {
    addNewTile();
    renderGrid();
    document.getElementById('score').innerText = score;
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem('best2048', bestScore);
      document.getElementById('best-score').innerText = bestScore;
    }
    checkGameOver();
  }
}

function checkGameOver() {
  let full = true;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) full = false;
      if (i < 3 && grid[i][j] === grid[i + 1][j]) return;
      if (j < 3 && grid[i][j] === grid[i][j + 1]) return;
    }
  }
  if (full) {
    gameOver = true;
    document.getElementById('game-over-overlay').style.display = 'flex';
  }
}

function restart2048() {
  init2048();
}

function close2048Game() {
  if (!gameOver && score > 0 && !confirm("Are you sure you want to exit? Progress will be lost.")) {
    return;
  }
  document.getElementById("game2048-popup").style.display = "none";
  document.removeEventListener('keydown', keyHandler);
}

// Close 2048 popup when clicking outside
document.addEventListener("click", function(event) {
  const popup = document.getElementById("game2048-popup");
  const content = document.querySelector(".game2048-content");
  const button = document.querySelector(".menu-item[onclick='play2048()']");
  if (popup.style.display === "flex" && !content.contains(event.target) && !button.contains(event.target)) {
    close2048Game();
  }
});

/* Post Jobs Popup */
function playPostJobs() {
  const popup = document.getElementById("post-jobs-popup");
  popup.style.display = "flex";
  toggleMenu(); // Close menu
}

function showComingSoon() {
  const instructions = document.getElementById("post-jobs-instructions");
  const comingSoon = document.getElementById("post-jobs-coming-soon");
  instructions.style.display = "none";
  comingSoon.style.display = "block";
}

function closePostJobs() {
  document.getElementById("post-jobs-popup").style.display = "none";
}

// Close Post Jobs popup when clicking outside
document.addEventListener("click", function(event) {
  const popup = document.getElementById("post-jobs-popup");
  const content = document.querySelector(".post-jobs-content");
  const button = document.querySelector(".menu-item[onclick='playPostJobs()']");
  if (popup.style.display === "flex" && !content.contains(event.target) && !button.contains(event.target)) {
    closePostJobs();
  }
});

// Close menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.getElementById("dropdown-menu");
  const button = document.querySelector(".menu-icon");
  const zkStoriesButton = document.querySelector(".menu-item[onclick='readZKStories()']");
  const memoryGameButton = document.querySelector(".menu-item[onclick='playMemoryGame()']");
  const game2048Button = document.querySelector(".menu-item[onclick='play2048()']");
  const postJobsButton = document.querySelector(".menu-item[onclick='playPostJobs()']");
  if (
    !menu.contains(event.target) &&
    !button.contains(event.target) &&
    !zkStoriesButton.contains(event.target) &&
    !memoryGameButton.contains(event.target) &&
    !game2048Button.contains(event.target) &&
    !postJobsButton.contains(event.target)
  ) {
    menu.style.display = "none";
  }
});

/* OG Popup */
function toggleOGPopup() {
  const popup = document.getElementById("og-popup");
  console.log("Toggle OG popup called");
  if (popup.style.display === "block") {
    popup.style.display = "none";
    console.log("Popup hidden");
  } else {
    popup.style.display = "flex";
    console.log("Popup shown");
  }
}

function closeOGPopup() {
  document.getElementById("og-popup").style.display = "none";
  console.log("Popup closed via close button");
}

// Close OG popup when clicking outside
document.addEventListener("click", function(event) {
  const popup = document.getElementById("og-popup");
  const content = document.querySelector(".og-content");
  const button = document.querySelector(".og-icon");
  if (popup.style.display === "flex" && !content.contains(event.target) && !button.contains(event.target)) {
    popup.style.display = "none";
    console.log("Popup closed via outside click");
  }
});

/* Quiz Data */
const quizQuestions = [
  { q: "What does Fermah stand for?", options: ["A blockchain", "A game", "A community"], answer: 0 },
  { q: "How many seconds per question?", options: ["5", "10", "20"], answer: 1 },
  { q: "Which platform is Fermah active on?", options: ["X/Twitter", "Reddit", "MySpace"], answer: 0 },
  { q: "What is Fermah also known as?", options: ["Universal Proof Market", "Decentralized Exchange", "NFT Marketplace"], answer: 0 },
  { q: "What type of proofs does Fermah optimize?", options: ["Zero-Knowledge Proofs", "Proof of Stake", "Proof of Work"], answer: 0 },
  { q: "What hardware powers the supply side of Fermah?", options: ["GPUs and FPGAs", "CPUs only", "Hard drives"], answer: 0 },
  { q: "What component aligns demand and supply in Fermah?", options: ["Fermah Matchmaker", "Smart Contracts", "Oracle Network"], answer: 0 },
  { q: "Is Fermah compatible with all major ZK proof systems?", options: ["Yes", "No, only zkVMs", "No, only Groth16"], answer: 0 },
  { q: "Who is the founder of Fermah?", options: ["Vanishree Rao", "Vitalik Buterin", "Satoshi Nakamoto"], answer: 0 },
  { q: "Who advised Vanishree Rao during her PhD in Cryptography?", options: ["Amit Sahai", "Nick White", "Zac Williamson"], answer: 0 },
  { q: "What does zkVM stand for?", options: ["Zero-Knowledge Virtual Machine", "Zero-Knowledge Video Module", "ZK Version Management"], answer: 0 },
  { q: "What is Groth16?", options: ["A ZK proof system", "A consensus algorithm", "A token standard"], answer: 0 },
  { q: "What is the current phase of the Fermah Testnet?", options: ["Phase 3", "Phase 1", "Phase 5"], answer: 0 },
  { q: "What is the primary goal of Fermah?", options: ["Make ZKPs the default for computation", "Build a new blockchain", "Create NFTs"], answer: 0 },
  { q: "Which university is Amit Sahai a professor at?", options: ["UCLA", "MIT", "Stanford"], answer: 0 },
  { q: "Who is the Cofounder of Polygon and Mozak that endorsed Fermah?", options: ["Jaynti Kanani", "Sandeep Nailwal", "Nick White"], answer: 0 },
  { q: "Who is the COO of Celestia that endorsed Fermah?", options: ["Nick White", "Zac Williamson", "Amit Sahai"], answer: 0 },
  { q: "Who is the Founder of Polygon that endorsed Fermah?", options: ["Sandeep Nailwal", "Jaynti Kanani", "Zhenfei"], answer: 0 },
  { q: "Who is the Founder and CEO of Aztec that endorsed Fermah?", options: ["Zac Williamson", "Nick White", "Amit Sahai"], answer: 0 },
  { q: "Who is the Chief Cryptographer at Polyhedra that endorsed Fermah?", options: ["Zhenfei", "Sandeep Nailwal", "Jaynti Kanani"], answer: 0 },
  { q: "What does ZKP stand for?", options: ["Zero-Knowledge Proof", "Zero-Knowledge Protocol", "ZK Processing"], answer: 0 },
  { q: "What does zkEVM stand for?", options: ["Zero-Knowledge Ethereum Virtual Machine", "ZK Extended Video Manager", "ZK Event Management"], answer: 0 },
  { q: "What feature does Fermah offer for predictable planning?", options: ["Transparent pricing", "Random rewards", "Variable fees"], answer: 0 },
  { q: "What can users tune in Fermah for proof generation?", options: ["Price and performance", "Color themes", "User interfaces"], answer: 0 },
  { q: "What does Fermah provide for privacy in proving?", options: ["Confidential proving delegation", "Public data sharing", "Open source code only"], answer: 0 },
  { q: "Is Fermah biased toward any specific proving system?", options: ["No", "Yes, only zkVMs", "Yes, only Groth16"], answer: 0 },
  { q: "What type of agreements does Fermah offer?", options: ["Service Level Agreements (SLAs)", "Non-Disclosure Agreements", "Partnership Contracts"], answer: 0 },
  { q: "What is Fermah's alternative name mentioned in descriptions?", options: ["ZK Bazaar", "Crypto Mall", "Proof Store"], answer: 0 },
  { q: "What field did Vanishree Rao get her PhD in?", options: ["Cryptography", "Computer Science", "Mathematics"], answer: 0 },
  { q: "How many years has Vanishree Rao been in ZK design and building?", options: ["15 years", "10 years", "20 years"], answer: 0 },
  { q: "What is Fermah's role in Web3?", options: ["Make it scalable and interoperable", "Centralize data", "Focus on NFTs only"], answer: 0 },
  { q: "What problem does Fermah address in the ZK space?", options: ["Scalable infrastructure for proofs", "Token trading", "Wallet security"], answer: 0 },
  { q: "What is a key benefit of Fermah's neutrality?", options: ["Supports all major proving systems", "Limits to one system", "Focuses on hardware only"], answer: 0 },
  { q: "What does FPGA stand for?", options: ["Field-Programmable Gate Array", "Fast Proof Generation Algorithm", "Fermah Proof Gateway"], answer: 0 },
  { q: "What does GPU stand for?", options: ["Graphics Processing Unit", "General Proof Utility", "Global Proof Updater"], answer: 0 },
  { q: "What is the UX of Fermah's confidential proving like?", options: ["Centralized systems with ZK privacy", "Fully decentralized only", "No privacy features"], answer: 0 },
  { q: "Where can you learn more about Fermah's confidential proving delegation?", options: ["Fermah blog", "Wikipedia", "YouTube"], answer: 0 },
  { q: "What is Fermah positioned as for ZK applications?", options: ["Crucial for practical and scalable apps", "Optional tool", "Deprecated tech"], answer: 0 },
  { q: "Which project is Jaynti Kanani a cofounder of?", options: ["Polygon and Mozak", "Celestia", "Aztec"], answer: 0 },
  { q: "Which project is Nick White COO of?", options: ["Celestia", "Polygon", "Polyhedra"], answer: 0 },
  { q: "Which project is Sandeep Nailwal founder of?", options: ["Polygon", "Aztec", "Celestia"], answer: 0 },
  { q: "Which project is Zac Williamson CEO of?", options: ["Aztec", "Polyhedra", "Polygon"], answer: 0 },
  { q: "Which project is Zhenfei Chief Cryptographer at?", options: ["Polyhedra", "Aztec", "Celestia"], answer: 0 },
  { q: "What community term is often mentioned in Fermah posts?", options: ["gFermah", "FermahCoin", "ZKToken"], answer: 0 },
  { q: "What type of event did Vanishree Rao speak at recently?", options: ["zkForge2025 Bootcamp", "ETH Conference", "Bitcoin Summit"], answer: 0 },
  { q: "What was the topic of Vanishree Rao's recent talk?", options: ["How to get into ZK", "Blockchain Basics", "NFT Creation"], answer: 0 },
  { q: "Who hosted the zkForge2025 Bootcamp?", options: ["@zk_monk", "@fermah_xyz", "@polygon"], answer: 0 },
  { q: "What is Fermah's testnet described as in posts?", options: ["Sailing smoothly", "Delayed", "Cancelled"], answer: 0 },
  { q: "What is a common emoji used in Fermah community posts?", options: ["🔥", "🍎", "📚"], answer: 0 },
  { q: "What does Fermah aim to make cheap, fast, and reliable?", options: ["ZK proof generation", "Token transfers", "Mining"], answer: 0 },
  { q: "What is Fermah's bio on X?", options: ["The universal proof market", "ZK Gaming Platform", "Community Hub"], answer: 0 },
  { q: "What is a key endorsement quote implication for Fermah?", options: ["Advances ZK tech", "Irrelevant to crypto", "Focuses on memes"], answer: 0 },
  { q: "What is Fermah's website domain?", options: ["fermah.xyz", "fermah.com", "fermah.io"], answer: 0 },
  { q: "What is a partnered or mentioned project with Fermah?", options: ["Scroll", "Bitcoin", "Dogecoin"], answer: 0 },
  { q: "What is another mentioned project?", options: ["ZKsync", "Ethereum", "Solana"], answer: 0 },
  { q: "What hardware is NOT mentioned for Fermah proofs?", options: ["ASICs", "GPUs", "FPGAs"], answer: 0 }
];

let selectedQuestions = [];
let currentQuestion = 0;
let scoreQuiz = 0;
let timer;

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function openQuiz() { 
  document.getElementById("quiz-popup").style.display = "flex"; 
  document.getElementById("quiz-instructions").style.display = "block";
  document.getElementById("quiz-end-buttons").style.display = "none";
}

function closeQuiz() { 
  document.getElementById("quiz-popup").style.display = "none"; 
  resetQuiz(); 
}

function confirmClose() {
  if (currentQuestion >= selectedQuestions.length) {
    closeQuiz();
  } else if (confirm("Are you sure you want to exit the quiz? Progress will be lost.")) {
    closeQuiz();
  }
}

function startQuiz() {
  let shuffledSelected = shuffle([...quizQuestions]).slice(0, 10);
  selectedQuestions = shuffledSelected.map(q => {
    let originalCorrect = q.options[q.answer];
    let shuffledOptions = shuffle([...q.options]);
    let newAnswer = shuffledOptions.indexOf(originalCorrect);
    return { q: q.q, options: shuffledOptions, answer: newAnswer };
  });
  currentQuestion = 0;
  scoreQuiz = 0;
  document.getElementById("quiz-instructions").style.display = "none";
  document.getElementById("quiz-end-buttons").style.display = "none";
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= selectedQuestions.length) {
    let percentage = (scoreQuiz / selectedQuestions.length) * 100;
    let message = `<p>🏆 Your score: ${scoreQuiz}/${selectedQuestions.length} (${percentage.toFixed(0)}%)</p>`;
    if (percentage >= 70) {
      message += `<p>Excellent work! You're a true Fermah expert! 🚀</p><img src="images/winner.jpg" alt="Excellent" class="result-img">`;
    } else if (percentage > 40) {
      message += `<p>Solid effort! Keep learning to become a Fermah pro! 💪</p><img src="images/middle.jpg" alt="Middle Place" class="result-img">`;
    } else {
      message += `<p>Don't give up! Dive deeper into Fermah's world! 😔</p><img src="images/failure.jpg" alt="Failure" class="result-img">`;
    }
    document.getElementById("quiz-container").innerHTML = message;
    document.getElementById("quiz-end-buttons").style.display = "flex";
    return;
  }

  const q = selectedQuestions[currentQuestion];
  let html = `<p class="question-number">Question ${currentQuestion + 1}/${selectedQuestions.length}</p><h3>${q.q}</h3><div class="timer" id="timer">⏳ 10s</div>`;
  q.options.forEach((opt, i) => {
    html += `<div class="quiz-option" onclick="chooseOption(${i})">${opt}</div>`;
  });
  document.getElementById("quiz-container").innerHTML = html;
  startTimer();
}

function startTimer() {
  let timeLeft = 10;
  document.getElementById("timer").innerText = `⏳ ${timeLeft}s`;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏳ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      feedback(selectedQuestions[currentQuestion].answer);
    }
  }, 1000);
}

function chooseOption(index) {
  clearInterval(timer);
  feedback(selectedQuestions[currentQuestion].answer, index);
}

function feedback(correctIndex, selectedIndex = -1) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => { opt.onclick = null; });

  let html = document.getElementById("quiz-container").innerHTML;

  if (selectedIndex === -1) {
    html = `<p>⏰ Time's up! You missed this question.</p>` + html;
    document.getElementById("quiz-container").innerHTML = html;
  } else {
    if (selectedIndex === correctIndex) {
      scoreQuiz++;
    }
    options[selectedIndex].classList.add(selectedIndex === correctIndex ? 'correct' : 'wrong');
    options[selectedIndex].innerHTML += selectedIndex === correctIndex ? ' ✅' : ' ❌';
    if (selectedIndex !== correctIndex) {
      options[correctIndex].classList.add('correct');
      options[correctIndex].innerHTML += ' ✅';
    }
  }

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 2000);
}

function resetQuiz() {
  clearInterval(timer);
  selectedQuestions = [];
  currentQuestion = 0;
  scoreQuiz = 0;
  document.getElementById("quiz-container").innerHTML = "<button onclick='startQuiz()'>Start</button>";
  document.getElementById("quiz-instructions").style.display = "block";
  document.getElementById("quiz-end-buttons").style.display = "none";
}

function shareOnX() {
  const text = `I scored ${scoreQuiz}/10 on the Fermah Knowledge Quiz! 🔥 Can you beat my score?`;
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

/* Mentions Checker */
function hashUsername(username) {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    const char = username.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

async function checkMentions() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const resultElement = document.getElementById("result");

  if (!username) {
    resultElement.innerText = "⚠️ Please enter your X/Twitter username.";
    setTimeout(() => {
      resultElement.innerText = "";
    }, 2000);
    return;
  }

  if (username.startsWith("@")) {
    resultElement.innerText = "⚠️ Incorrect format: please enter username without @.";
    setTimeout(() => {
      resultElement.innerText = "";
    }, 2000);
    return;
  }

  resultElement.innerHTML = `⏳ Checking mentions for @${username}...`;

  setTimeout(() => {
    resultElement.innerHTML = "🔄 Finalizing result...";

    setTimeout(() => {
      // Deterministic count generation
      const isSpecial = specialUsers.has(username);
      const minCount = isSpecial ? 200 : 0;
      const maxCount = isSpecial ? 500 : 150;
      const seed = hashUsername(username);
      const random = () => {
        let counter = seed; // Use let for mutable counter
        const x = Math.sin(counter++) * 10000;
        return x - Math.floor(x);
      };
      const count = Math.floor(random() * (maxCount - minCount + 1)) + minCount;

      let message, imageSrc;
      if (count >= 100) {
        message = `You have mentioned gFermah ${count} times\nReal fermah maxi here, the numbers don't lie.`;
        imageSrc = "images/thumbs.jpg";
      } else {
        message = `You've mentioned gFermah ${count} times.\nKeep spreading the word, Fermah fam! 💪✨`;
        imageSrc = "images/middle.jpg";
      }

      // Display in popup
      console.log(`Showing mention popup for ${username} with count ${count}`);
      document.getElementById("mention-message").innerText = message;
      document.getElementById("mention-image").src = imageSrc;
      document.getElementById("mention-popup").style.display = "flex";

      // Clear the result element
      resultElement.innerHTML = "";
    }, 2000); // 2-second delay for "Finalizing result..."
  }, 3000); // 3-second delay for "Checking mentions..."
}

function closeMentionPopup() {
  console.log("Closing mention popup");
  document.getElementById("mention-popup").style.display = "none";
}

function shareMentionOnX() {
  const messageEl = document.getElementById("mention-message");
  const text = messageEl.innerText.replace(/\n/g, ' ');
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

// Close mention popup when clicking outside
document.addEventListener("click", function(event) {
  const popup = document.getElementById("mention-popup");
  const content = document.querySelector(".mention-content");
  const input = document.getElementById("username");
  const checkButton = document.querySelector("button[onclick='checkMentions()']");
  if (
    popup.style.display === "flex" &&
    !content.contains(event.target) &&
    !input.contains(event.target) &&
    !checkButton.contains(event.target)
  ) {
    closeMentionPopup();
  }
});
