const questionPool = [
    // --- Set 1: Social / Energy ---
    { text: "It's a sunny Saturday! What's your plan?", options: [{ text: "Leading a group adventure! 🦁", type: "Lion" }, { text: "Reading a book under a tree 📖", type: "Owl" }, { text: "Beach party with everyone! 🏖️", type: "Dolphin" }, { text: "Napping and snacking 🎋", type: "Panda" }] },
    { text: "You walk into a crowded room. You feel:", options: [{ text: "Excited to meet everyone! 🤩", type: "Dolphin" }, { text: "Confident and ready to lead 🦁", type: "Lion" }, { text: "Overwhelmed, looking for a corner 🦉", type: "Owl" }, { text: "Hungry. Where's the food? 🍕", type: "Panda" }] },
    { text: "Your dream home location?", options: [{ text: "A castle on a hill 🏰", type: "Lion" }, { text: "A treehouse library 📚", type: "Owl" }, { text: "A houseboat on the ocean 🛥️", type: "Dolphin" }, { text: "A cozy cottage with a bamboo garden 🎍", type: "Panda" }] },
    { text: "Pick a Friday night activity:", options: [{ text: "Hosting a game night 🎲", type: "Lion" }, { text: "Documentary marathon 📺", type: "Owl" }, { text: "Karaoke until dawn 🎤", type: "Dolphin" }, { text: "Ordering takeout & sleeping 🥡", type: "Panda" }] },
    { text: "Communication style:", options: [{ text: "Loud and proud 🗣️", type: "Lion" }, { text: "Quiet and thoughtful 🤫", type: "Owl" }, { text: "Chatty and bubbly 💬", type: "Dolphin" }, { text: "Few words, many hugs 🤗", type: "Panda" }] },

    // --- Set 2: Decisions / Work ---
    { text: "A problem arises at work. You first:", options: [{ text: "Take immediate charge 👮", type: "Lion" }, { text: "Analyze all data points 📊", type: "Owl" }, { text: "Boost team morale 🥳", type: "Dolphin" }, { text: "Wait and see if it solves itself 🤷", type: "Panda" }] },
    { text: "You are the leader of a project. You:", options: [{ text: "Delegate with authority 👉", type: "Lion" }, { text: "Research perfectly before starting 🧐", type: "Owl" }, { text: "Make sure everyone is having fun 🤹", type: "Dolphin" }, { text: "Ensure everyone takes breaks ☕", type: "Panda" }] },
    { text: "Deadline is approaching!", options: [{ text: "Crush it early! 💪", type: "Lion" }, { text: "Plan every minute 🗓️", type: "Owl" }, { text: "Panic but laugh about it 😂", type: "Dolphin" }, { text: "Nap first, work later 💤", type: "Panda" }] },
    { text: "Your motivational quote:", options: [{ text: "Victory is mine! 🏆", type: "Lion" }, { text: "Knowledge is power 🧠", type: "Owl" }, { text: "YOLO! 🌈", type: "Dolphin" }, { text: "Keep calm and eat bamboo 🎋", type: "Panda" }] },
    { text: "Best subject in school?", options: [{ text: "Sports / Gym 🏅", type: "Lion" }, { text: "Science / Math 📐", type: "Owl" }, { text: "Drama / Arts 🎭", type: "Dolphin" }, { text: "Lunch Time 🍎", type: "Panda" }] },

    // --- Set 3: Preferences / Style ---
    { text: "Pick a color palette:", options: [{ text: "Gold & Royal Red 👑", type: "Lion" }, { text: "Mystic Purple & Silver 🔮", type: "Owl" }, { text: "Ocean Blue & Pink 🌊", type: "Dolphin" }, { text: "Bamboo Green & Black 🎋", type: "Panda" }] },
    { text: "Preferred weather:", options: [{ text: "Hot sun (for sunbathing) ☀️", type: "Lion" }, { text: "Misty and mysterious 🌫️", type: "Owl" }, { text: "Warm breeze & waves 🌬️", type: "Dolphin" }, { text: "Cool shade ☁️", type: "Panda" }] },
    { text: "Fashion style:", options: [{ text: "Bold and flashy 🕶️", type: "Lion" }, { text: "Classic and functional 👓", type: "Owl" }, { text: "Colorful and trendy 👙", type: "Dolphin" }, { text: "Comfy sweatpants forever 👖", type: "Panda" }] },
    { text: "Music genre?", options: [{ text: "Epic Orchestral / Rock 🎸", type: "Lion" }, { text: "Lo-Fi / Classical 🎻", type: "Owl" }, { text: "Pop / Dance 💃", type: "Dolphin" }, { text: "Acoustic / Nature Sounds 🎵", type: "Panda" }] },
    { text: "Ideal vacation souvenir?", options: [{ text: "A trophy or medal 🥇", type: "Lion" }, { text: "A rare book 📕", type: "Owl" }, { text: "A party hat 🥳", type: "Dolphin" }, { text: "A soft pillow 🛌", type: "Panda" }] },

    // --- Set 4: Abstract / Fun ---
    { text: "What's your superpower?", options: [{ text: "Fearless Courage ⚔️", type: "Lion" }, { text: "Infinite Wisdom 🧙", type: "Owl" }, { text: "Magnetic Charisma 🌟", type: "Dolphin" }, { text: "Expert Napping 🐨", type: "Panda" }] },
    { text: "Pick a snack:", options: [{ text: "A giant meat feast 🍖", type: "Lion" }, { text: "A cup of herbal tea 🍵", type: "Owl" }, { text: "Fresh sushi 🍣", type: "Dolphin" }, { text: "Just... everything 🍪", type: "Panda" }] },
    { text: "If you were an element:", options: [{ text: "Fire 🔥", type: "Lion" }, { text: "Air 🌬️", type: "Owl" }, { text: "Water 💧", type: "Dolphin" }, { text: "Earth 🌍", type: "Panda" }] },
    { text: "Zombie apocalypse plan?", options: [{ text: "Lead the survivors! 🔫", type: "Lion" }, { text: "Invent a cure 💉", type: "Owl" }, { text: "Make friends with zombies? 🧟", type: "Dolphin" }, { text: "Hide in a bunker with snacks 🥫", type: "Panda" }] },
    { text: "Choose a magical item:", options: [{ text: "Sword of Destiny 🗡️", type: "Lion" }, { text: "Orb of Seeing 🔮", type: "Owl" }, { text: "Boots of Speed 👢", type: "Dolphin" }, { text: "Cloak of Comfort 🧥", type: "Panda" }] },

    // --- Set 5: Relationships / Social ---
    { text: "Your friend is sad. You:", options: [{ text: "Stand up for them 🛡️", type: "Lion" }, { text: "Offer wise advice 🧠", type: "Owl" }, { text: "Distract with fun 🎢", type: "Dolphin" }, { text: "Give a warm hug 🤗", type: "Panda" }] },
    { text: "In a group photo, you are:", options: [{ text: "Front and center! 📸", type: "Lion" }, { text: "Checking the lighting 💡", type: "Owl" }, { text: "Making a funny face 🤪", type: "Dolphin" }, { text: "Blinking/Sleeping 😑", type: "Panda" }] },
    { text: "Best compliment to receive?", options: [{ text: "You are powerful!", type: "Lion" }, { text: "You are smart!", type: "Owl" }, { text: "You are fun!", type: "Dolphin" }, { text: "You are cozy!", type: "Panda" }] },
    { text: "Pick a pet:", options: [{ text: "A majestic eagle 🦅", type: "Lion" }, { text: "A clever raven 🐦", type: "Owl" }, { text: "A playful puppy 🐶", type: "Dolphin" }, { text: "A slow tortoise 🐢", type: "Panda" }] },
    { text: "Ideal date:", options: [{ text: "Fancy gala dinner 🥂", type: "Lion" }, { text: "Museum tour 🏛️", type: "Owl" }, { text: "Amusement park 🎡", type: "Dolphin" }, { text: "Picnic in the park 🧺", type: "Panda" }] },

    // --- Set 6: Random Scenarios ---
    { text: "You find a treasure chest. It has:", options: [{ text: "Gold crowns 👑", type: "Lion" }, { text: "Ancient scrolls 📜", type: "Owl" }, { text: "Toys and games 🎮", type: "Dolphin" }, { text: "Soft blankets 🛌", type: "Panda" }] },
    { text: "Your spirit Emoji:", options: [{ text: "🦁", type: "Lion" }, { text: "🤓", type: "Owl" }, { text: "🐬", type: "Dolphin" }, { text: "🐼", type: "Panda" }] },
    { text: "Pick a vehicle:", options: [{ text: "Sports Car 🏎️", type: "Lion" }, { text: "Drown 🚁", type: "Owl" }, { text: "Convertible 🚕", type: "Dolphin" }, { text: "Camper Van 🚐", type: "Panda" }] },
    { text: "Favorite time of day:", options: [{ text: "High Noon 🕛", type: "Lion" }, { text: "Midnight 🌑", type: "Owl" }, { text: "Sunrise 🌅", type: "Dolphin" }, { text: "Nap time 🕑", type: "Panda" }] },
    { text: "Pick a beverage:", options: [{ text: "Energy Drink ⚡", type: "Lion" }, { text: "Black Coffee ☕", type: "Owl" }, { text: "Fruit Punch 🍹", type: "Dolphin" }, { text: "Warm Milk 🥛", type: "Panda" }] }
];

const animalData = {
    "Lion": {
        title: "The Brave Lion",
        desc: "You are a natural born leader. Fearless, loyal, and full of heart! (Toy Edition)",
        img: "lion.png"
    },
    "Owl": {
        title: "The Wise Owl",
        desc: "You see what others miss. Intelligent, observant, and deeply intuitive.",
        img: "owl.png"
    },
    "Dolphin": {
        title: "The Playful Dolphin",
        desc: "Life is a party for you! You are social, fun, and bring joy to everyone.",
        img: "dolphin.png"
    },
    "Panda": {
        title: "The Chill Panda",
        desc: "Zen master. You know how to relax, enjoy the little things, and offer great hugs.",
        img: "panda.png"
    }
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let scores = {};

const heroScreen = document.getElementById('hero');
const quizScreen = document.getElementById('quiz');
const resultScreen = document.getElementById('result');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress');

const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-description');
const resultImg = document.getElementById('result-img');

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('retake-btn').addEventListener('click', resetQuiz);

function startQuiz() {
    selectRandomQuestions();
    switchScreen(heroScreen, quizScreen);
    currentQuestionIndex = 0;
    scores = {};
    showQuestion();
}

function selectRandomQuestions() {
    // Shuffle the pool and pick first 5
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 5);
}

function switchScreen(from, to) {
    from.classList.remove('active');
    setTimeout(() => {
        from.style.display = 'none';
        to.style.display = 'block';
        // forced reflow
        void to.offsetWidth;
        to.classList.add('active');
    }, 400);
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';

    // Update progress
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Shuffle options too? Optional, but let's keep them in order for logic clarity
    // or shuffle them for extra randomness:
    const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());

    shuffledOptions.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.classList.add('option-btn');
        btn.textContent = opt.text;
        btn.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        btn.style.opacity = '0';

        btn.addEventListener('click', () => selectOption(opt.type));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(type) {
    scores[type] = (scores[type] || 0) + 1;
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    // Determine winner
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    showResult(winner || "Panda"); // Fallback to Panda because why not
}

function showResult(animalKey) {
    const data = animalData[animalKey];
    resultTitle.textContent = data.title;
    resultDesc.textContent = data.desc;
    resultImg.src = data.img;
    resultImg.alt = data.title;

    switchScreen(quizScreen, resultScreen);
    progressBar.style.width = '100%';
}

function resetQuiz() {
    switchScreen(resultScreen, heroScreen);
}

// --- Share Functions ---
// --- Share Functions ---
function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.querySelector('.share-btn.copy-3d');
        const originalText = btn.textContent;
        btn.textContent = "Copied! 🎉";
        setTimeout(() => btn.textContent = originalText, 2000);
    });
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleSheet);
