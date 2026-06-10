// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// var a = document.querySelector("#elem1");
// var image = a.getAttribute("data-image")
// console.log(image)

function elem() {

    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-img")

    if (window.innerWidth <= 600) return;

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function text() {
    const h2s = document.querySelectorAll(".text")
    const pg4img = document.querySelector("#dr img")
    const p = document.querySelector("#paragraph")

    h2s.forEach(function (h2) {
        h2.addEventListener("click", function () {

            h2s.forEach(function (b) {
                b.style.color = "#504a45";
                b.style.paddingLeft = "15px";
            })

            console.log(this.textContent);
            this.style.color = "#efeae3";
            this.style.paddingLeft = "0px";

            const img = this.getAttribute("data-image");
            pg4img.src = img;

            const para = this.getAttribute("data-para");
            p.textContent = para;
        });
    });
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 50,
    });
}

function menu() {
    var menu = document.querySelector(".menu")
    var menuText = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var menuIcon = document.querySelector(".menu i")
    var flag = 0

    menu.addEventListener("click", function () {
        if (flag === 0) {
            full.style.top = "0"
            navimg.style.opacity = "0"
            menuIcon.className = "ri-close-line"  
            menuText.textContent = "CLOSE"
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = "1"
            menuIcon.className = "ri-menu-line"  
            menuText.textContent = "MENU"
            flag = 0
        }
    })
}

elem()
text()
swiper()
menu()


var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 3000)