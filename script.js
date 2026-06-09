function hideAllPages() {
    document.querySelectorAll("section").forEach(function(section) {
        section.style.display = "none";
    });
}

function showPage(className, displayType = "flex") {
    hideAllPages();

    let page = document.querySelector(className);

    if (page) {
        page.style.display = displayType;

        page.classList.remove("animate-page");
        void page.offsetWidth;
        page.classList.add("animate-page");

        window.scrollTo(0, 0);
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
    showPage(".rainbow-memory", "flex");
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
    showPage(".reason-memory");
}