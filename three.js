/* AUTO-RESIZE COVERS (.page-height) */

var elPageHeight = document.getElementsByClassName("page-height");
var elPageWide   = document.getElementsByClassName("page-wide");

var k;
function adapt() {
    for (k=0; k<elPageHeight.length; k++) {
        elPageHeight[k].style.height = window.innerHeight + "px";
    }
    for (k=0; k<elPageWide.length; k++) {
        elPageWide[k].style.width  = document.width + "px";
    }
}

var _height=0;

window.onresize=function () {

    /*non-smooth*/
//    if ((window.innerHeight-_height)>20 || (window.innerHeight-_height)<-20) {
//        _height=window.innerHeight;
//        adapt();
//    }

    /*smooth*/
    adapt();

};

window.onresize();

/*--------------------------------------------*/

/* MENU EXPANSION */

var _expanded=false;
var navbarAsMenu=document.getElementById("navbar-as-menu");

document.getElementById("navbar-as-menu-btn").onclick=function () {
    if (!_expanded) {
        navbarAsMenu.style.display='block';
        _expanded=true;
    } else {
        navbarAsMenu.style.display='none';
        _expanded=false;
    }
};

var a_navLinks=navbarAsMenu.getElementsByTagName('a');

function hideNavbar() {
    navbarAsMenu.style.display='none';
}

for (var k=0; k<a_navLinks.length; k++) {
    a_navLinks[k].onclick=hideNavbar;
    _expanded=false;
}