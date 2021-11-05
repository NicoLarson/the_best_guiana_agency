document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector("header button.menu.btn");
    const nav = document.querySelector("header nav");
    const menuList = document.querySelectorAll("header nav ul li");
    const footer = document.querySelectorAll("footer");
    const body = document.querySelectorAll("body")

    menuBtn.addEventListener("click", () => {
        nav.classList.add("discover");
        menuBtn.classList.add("discover");
    });
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("click", () => {
            nav.classList.remove("discover");
            menuBtn.classList.remove("discover");
        });
    }

    let menuOnScroll = () => {
        let transformationPointHeader = document.documentElement.clientHeight
        let transformationPointFooter = body[0].clientHeight - document.documentElement.clientHeight - menuBtn.offsetLeft
        let positionMenuBtn = document.documentElement.scrollTop

        positionMenuBtn > transformationPointHeader && positionMenuBtn < transformationPointFooter ? menuBtn.classList.add("black") : menuBtn.classList.remove("black")
    }

    window.onscroll = function () {
        menuOnScroll();
    };


})