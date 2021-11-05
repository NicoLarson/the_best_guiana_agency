document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector("header button.menu.btn");
    const nav = document.querySelector("header nav");
    const menuList = document.querySelectorAll("header nav ul li");
    const menuListItemLink = document.querySelectorAll("header nav ul li a");
    const body = document.querySelector("body")
    const goUpBtn = document.querySelector("main a#go-up")

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("discover");
        getWidth() < 768 ? menuBtn.classList.toggle("discover") : false
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

        if (positionMenuBtn > transformationPointHeader && positionMenuBtn < transformationPointFooter && getWidth() > 768) {
            for (let i = 0; i < menuListItemLink.length; i++) {
                menuListItemLink[i].style.color = "#222";
            }
        } else {
            for (let i = 0; i < menuListItemLink.length; i++) {
                menuListItemLink[i].style.color = "#FAFAFA";
            }
        }

    }

    let getWidth = () => Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    )

    window.onscroll = function () {
        scrollEffect();
    };

    const icon = document.querySelector('.icon');
    const arrow = document.querySelector('.arrow');

    icon.onclick = () => {
        arrow.animate([
            { left: '0' },
            { left: '10px' },
            { left: '0' }
        ], {
            duration: 700,
            iterations: Infinity
        });
    }

})