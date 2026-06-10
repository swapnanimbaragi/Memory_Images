function hideAllPages() {
    document.querySelectorAll("section").forEach(function(section) {
        section.classList.remove("active-page");
        section.style.display = "none";
    });
}

function showPage(className, displayType = "flex") {
    hideAllPages();

    let page = document.querySelector(className);

    if (page) {
        page.classList.add("active-page");
        page.style.display = displayType;

        page.classList.remove("animate-page");
        void page.offsetWidth;
        page.classList.add("animate-page");

        window.scrollTo(0, 0);
    }
}


/* HOME / WELCOME PAGE */

function showWelcomePage(){

    hideAllPages();

    let home = document.querySelector(".opening-page");

    if(home){

        home.style.display = "flex";

        home.classList.remove("animate-page");

        void home.offsetWidth;

        home.classList.add("animate-page");

        window.scrollTo(0,0);
    }
}



/* START BUTTON */
function startMemories() {
    let music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(function(error) {
            console.log("Music play blocked:", error);
        });
    }

    showPage(".birthday-memory", "flex");
}

/* CHAPTER 2 */
function showChapterTwo() {
    showPage(".farewell-memory", "flex");
}

/* CHAPTER 3 */
function showGroupChapter() {
    showPage(".group-memory", "flex");
}

/* CHAPTER 4 */
function showOutingChapter() {
    showPage(".outing-memory", "flex");
}

/* CHAPTER 5 VIDEO */
function showCookingMemory() {
    showPage(".cooking-memory", "flex");

    let video = document.querySelector(".memory-video");

    if (video) {
        video.currentTime = 0;
        video.muted = true;

        video.play().catch(function(error) {
            console.log("Video play blocked:", error);
        });
    }
}

/* CHAPTER 6 */
function showBirthdayTwo() {
    showPage(".birthday2-memory", "flex");
}

/* CHAPTER 7 */
function showTempleRide() {
    showPage(".temple-memory", "flex");
}

/* CHAPTER 8 */
function showShivaTrip() {
    showPage(".shiva-memory", "flex");
}

/* CHAPTER 9 */
function showNextCollage() {
    showPage(".next-collage-memory", "flex");
}

/* CHAPTER 10 */
function showRainbowCafe() {
    showPage(".next-collage-memory", "flex");
}

/* CHAPTER 11 */
function showHanumanMemory() {
    showPage(".hanuman-memory", "flex");
}

/* FINAL PAGE */
function showScrollMemory() {
    showPage(".scroll-memory", "block");
}

/* REASON BEHIND THE BOND */
function showReasonMemory(){
    showPage(".reason-memory", "flex");
}


let quizIndex = 0;

const quizData = [
    {
        q:"Who is most likely to get angry and say 'I'm going home' after being teased?",
        options:["Teja","Swapna","Sanket","Rehan"],
        answer:"Swapna"
    },
    {
        q:"Who talks randoms things without thinking?",
        options:["Prajwal","Shivaraj","Swapna","Rohan"],
        answer:"Swapna"
    },
    {
        q:"Who is responsible for cancelling half of the trip plans?",
        options:["Shivaraj","Teja","Prajwal","Rohan"],
        answer:"Teja"
    },
    {
        q:"Who gets the title of unofficial elder of the group?",
        options:["Prajwal","Shivaraj","Shashikumar","Sanket"],
        answer:"Shashikumar"
    },
    {
        q:"Who can scold you and help you in the same conversation?",
        options:["Sanket","Shivaraj","Shashikumar","Prajwal"],
        answer:"Shashikumar"
    },
    {
        q:"Who loves Maggi more than the rest of the group?",
        options:["Shivaraj","Swapna","Sanket","Rohan"],
        answer:"Shivaraj"
    },
    {
        q:"Who misses almost every memorable moment?",
        options:["Prajwal","Swapna","Shivaraj","Teja"],
        answer:"Shivaraj"
    },
    // {
    //     q:"Who treats AI like his brother?",
    //     options:["Rehan","Sanket","Shivaraj","Rohan"],
    //     answer:"Shivaraj"
    // },
    {
        q:"Who says nobody picks up his calls while he himself doesn't pick up?",
        options:["Sanket","Shashikumar","Rehan","Prajwal"],
        answer:"Sanket"
    },
    {
        q:"Who only appears in group calls during exam season?",
        options:["Prajwal","Swapna","Rehan","Sanket"],
        answer:"Rehan"
    },
    {
        q:"Need any information about college. Who do you contact first?",
        options:["Prajwal","Teja","Rohan","Shivaraj"],
        answer:"Prajwal"
    },
    {
        q:"Who probably knows more people in college than the principal?",
        options:["Rehan","Prajwal","Sanket","Shashikumar"],
        answer:"Prajwal"
    },
    {
        q:"Who can make everyone laugh until their stomach hurts?",
        options:["Shivaraj","Sanket","Rohan","Rehan"],
        answer:"Rohan"
    },
    {
        q:"Who somehow gets involved in every kanda?",
        options:["Teja","Prajwal","Rohan","Swapna"],
        answer:"Rohan"
    },
    {
        q:"Who is most likely to disappear and then suddenly appear when something important happens?",
        options:["Rehan","Shivaraj","Sanket","All of the above 😂"],
        answer:"All of the above 😂"
    },
    {
        q:"Who is the real backbone of the group?",
        options:["Teja","Shashikumar","Everyone","Sanket"],
        answer:"Everyone"
    },
    {
        q:"Who will always remain a part of this group?",
        options:["Swapna","Teja","Sneha","Shashikumar"],
        answer:"Sneha",
        message:"Some people leave memories so beautiful that they never really leave. ❤️"
    },
    {
        q:"What is the best thing about our group?",
        options:["The memories","The chaos","The friendship","All of the above"],
        answer:"All of the above",
        message:"Correct ❤️ Without every single person, it wouldn't be our story."
    }
];

function shuffleQuiz(){

    for(let i = quizData.length - 1; i > 0; i--){

        let j = Math.floor(Math.random() * (i + 1));

        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
}

function showQuiz(){

    shuffleQuiz();

    quizIndex = 0;

    showPage(".quiz-section", "flex");

    loadQuestion();
}

function loadQuestion(){
    let qBox = document.getElementById("quizQuestion");
    let optionsBox = document.getElementById("quizOptions");
    let msg = document.getElementById("quizMessage");
    let nextBtn = document.getElementById("nextQuizBtn");

    qBox.innerHTML = "Question " + (quizIndex + 1) + "<br>" + quizData[quizIndex].q;
    optionsBox.innerHTML = "";
    msg.innerHTML = "";
    nextBtn.style.display = "none";

    quizData[quizIndex].options.forEach(function(option){
        let btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;

        btn.onclick = function(){
            checkAnswer(btn, option);
        };

        optionsBox.appendChild(btn);
    });
}

function checkAnswer(button, selected){
    let correct = quizData[quizIndex].answer;
    let allBtns = document.querySelectorAll(".option-btn");

    allBtns.forEach(function(btn){
        btn.disabled = true;

        if(btn.innerText === correct){
            btn.classList.add("correct");
        }
    });

    if(selected === correct){
        button.classList.add("correct");

        document.getElementById("quizMessage").innerHTML =
        quizData[quizIndex].message || "Correct 😂❤️";
    }
    else{
        button.classList.add("wrong");
        document.getElementById("quizMessage").innerHTML =
        "Oops 😂 Correct answer is " + correct + " ❤️";
    }

    document.getElementById("nextQuizBtn").style.display = "inline-block";
}

function nextQuestion(){
    quizIndex++;

    if(quizIndex < quizData.length){
        loadQuestion();
    }
    else{
        document.querySelector(".quiz-box").innerHTML = `
            <h4>QUIZ COMPLETED 🎉</h4>
            <h1>You survived our chaos 😂❤️</h1>
            <p style="font-size:24px; line-height:1.8;">
                Correct ❤️<br>
                Without every single person,<br>
                it wouldn't be our story.
            </p>
            <button onclick="showWelcomePage()">Back To Home ❤️</button>
        `;
    }
}