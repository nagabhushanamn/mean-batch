function f1() {
    console.log("f1()")
}
function f2() {
    console.log("f2()")
}

//-----------------------------------------
// design issues
//-----------------------------------------
/*
    => code tangling / coupling
    => code scatterning / duplication 
*/

// Higher-Order-Function ==> Higher-Order-Programming 

/*
    why we need ?

    with small functions, 
    after composing we can build complex functions

*/

function bannerWrapper(f) {
    return function () {
        console.log(">>>>>>>>>>>>>>>>>>>")
        if (f) f()
        console.log("<<<<<<<<<<<<<<<<<<<")
    }
}

function secWrapper(f) {
    return function () {
        console.log("sec check")
        if (f) f()
    }
}

// let f1WithBanner = bannerWrapper(f1)
// f1WithBanner()

// secWrapper(bannerWrapper(f2))()
// - or -
let f2WithBanner=bannerWrapper(f2);
let f2WithBannerAndSec=secWrapper(f2WithBanner);
f2WithBannerAndSec();
