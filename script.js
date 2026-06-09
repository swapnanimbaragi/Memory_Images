function hideAllPages(){

    document.querySelectorAll("section").forEach(function(section){

        section.style.display = "none";

    });

}


function showPage(className, displayType = "flex"){

    hideAllPages();

    let page = document.querySelector(className);

    if(page){

        page.style.display = displayType;

        page.classList.remove("animate-page");

        void page.offsetWidth;

        page.classList.add("animate-page");
    }
}


/* START */

function startMemories(){

    let music = document.getElementById("bgMusic");

    if(music){

        music.play();
    }

    showPage(".birthday-memory");
}


/* CHAPTER 2 */

function showChapterTwo(){

    showPage(".farewell-memory");
}


/* CHAPTER 3 */

function showGroupChapter(){

    showPage(".group-memory");
}


/* CHAPTER 4 */

function showOutingChapter(){

    showPage(".outing-memory");
}


/* CHAPTER 5 VIDEO */

function showCookingMemory(){

    showPage(".cooking-memory");

    let video = document.querySelector(".memory-video");

    if(video){

        video.currentTime = 0;

        video.play();
    }
}


/* CHAPTER 6 */

function showBirthdayTwo(){

    showPage(".birthday2-memory");
}

/* CHAPTER 7 */
function showTempleRide(){

    showPage(".temple-memory");
}
/* CHAPTER 8 */
function showShivaTrip(){

    showPage(".shiva-memory");
}

/* CHAPTER 9 */
function showNextCollage(){

    showPage(".next-collage-memory");
}

/* CHAPTER 10 */
function showRainbowCafe(){

    showPage(".next-collage-memory");
}
/* CHAPTER 10 */

function showHanumanMemory(){

    showPage(".hanuman-memory");
}


/* FINAL PAGE */

function showScrollMemory(){

    showPage(".scroll-memory");

}

/* ================= MASONRY AUTO SCROLL ================= */

// let galleryTimer;

// function showScrollMemory(){

//     showPage(".scroll-memory");

//     let gallery = document.querySelector(".scroll-memory");

//     clearInterval(galleryTimer);

//     gallery.scrollTop = 0;

//     galleryTimer = setInterval(function(){

//         gallery.scrollTop += 1;

//         if(gallery.scrollTop >= gallery.scrollHeight - gallery.clientHeight){

//             gallery.scrollTop = 0;
//         }

//     }, 20);
// }

function showScrollMemory(){

    showPage(".scroll-memory", "block");

}