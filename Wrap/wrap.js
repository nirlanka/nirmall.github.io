var editing=false;
//  editing=true;

var slideId=0,
    slideMax=-1,
    slides
;

function nextSlide(el) {
    if (slideId<slideMax) {
                slides[slideId].classList.remove('visible');
                slides[slideId].classList.add('hidden');
                slides[slideId].classList.remove('current-slide');
                slideId++;
                slides[slideId].classList.remove('hidden');
                slides[slideId].classList.add('visible');
                slides[slideId].classList.add('current-slide');
            } else {
                slides[slideId].classList.remove('visible');
                slides[slideId].classList.add('hidden');
                slides[slideId].classList.remove('current-slide');
                slideId=0;
                slides[slideId].classList.remove('hidden');
                slides[slideId].classList.add('visible');
                slides[slideId].classList.add('current-slide');
            }
//    if (el) {
//        el.style.color='#777';
//    }
}

function prevSlide(el) {
    if (slideId>0) {
                slides[slideId].classList.remove('visible');
                slides[slideId].classList.add('hidden');
                slides[slideId].classList.remove('current-slide');
                slideId--;
                slides[slideId].classList.remove('hidden');
                slides[slideId].classList.add('visible');
                slides[slideId].classList.add('current-slide');
            } else {
                slides[slideId].classList.remove('visible');
                slides[slideId].classList.add('hidden');
                slides[slideId].classList.remove('current-slide');
                slideId=slideMax;
                slides[slideId].classList.remove('hidden');
                slides[slideId].classList.add('visible');
                slides[slideId].classList.add('current-slide');
            }
//    if (el) {
//        el.style.color='#777';
//        //el.style.textShadow='0 0 4px #444';
//    }
}

function homeSlide(el) {
    if (slideId>0) {
                slides[slideId].classList.remove('visible');
                slides[slideId].classList.add('hidden');
                slides[slideId].classList.remove('current-slide');
                slideId=0;
                slides[slideId].classList.remove('hidden');
                slides[slideId].classList.add('visible');
                slides[slideId].classList.add('current-slide');
        }
    
//    if (el) {
//        el.style.color='#777';
//    }
}

(function (){
    
    // set iterative IDs for the slides(wrappers)
    slides=document.getElementsByClassName('slide-wrapper');
    for (var i=0; i<slides.length; i++) {
        // remove position:absolute if editing-mode is true
        if (editing) slides[i].style.position='relative';
        // set id's
        slides[i].setAttribute('id', i);
        // .hidden animation
        if (i!=0 && !editing) slides[i].classList.add('hidden');
        slideMax++;
    }
    
    // set first slide
    slides[slideId].classList.add('current-slide');
    
    // track arrow-keys and change slides
    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode=='39' || e.keyCode=='32' || e.keyCode=='40') { // right
            nextSlide();
        } else if (e.keyCode=='37' || e.keyCode=='38') { // left
            prevSlide();
        } else if (e.keyCode=='36') {
            homeSlide();
        }
    }
    
})();