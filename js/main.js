document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector("header button.menu.btn");
    const nav = document.querySelector("header nav");
    const menuList = document.querySelectorAll("header nav ul li");
    const body = document.querySelector("body")
    const goUpBtn = document.querySelector("main a#go-up")

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("discover");
        menuBtn.classList.toggle("discover");
    });

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("click", () => {
            nav.classList.remove("discover");
            menuBtn.classList.remove("discover");
        });
    }

    let scrollEffect = () => {
        let transformationPointHeader = document.documentElement.clientHeight
        let transformationPointFooter = body.clientHeight - document.documentElement.clientHeight - menuBtn.offsetLeft
        let positionMenuBtn = document.documentElement.scrollTop
    
        positionMenuBtn > transformationPointHeader && positionMenuBtn < transformationPointFooter ? menuBtn.classList.add("black") : menuBtn.classList.remove("black")

        positionMenuBtn > transformationPointHeader ? goUpBtn.classList.add("discover") : goUpBtn.classList.remove("discover")

    }





    window.onscroll = function () {
        scrollEffect();
    };



})