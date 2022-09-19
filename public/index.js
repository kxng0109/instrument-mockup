"use strict";
const container = document.querySelector('.container');
const main = document.querySelector('#main');
const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('#navbar');
const cookieRejectButton = document.querySelector('.cookies--reject-button');
const cookieAcceptButton = document.querySelector('.cookies--accept-button');
const cookiesSection = document.querySelector('.cookies-section');
const firstSection = main.querySelector('#first-section');
const playBtn = firstSection.querySelector('#playBtn');
const videoTemplate = firstSection.querySelectorAll('.video-template');
const iframeVideo = firstSection.querySelector('#iframe-video');
const whitePlayBgIcon = firstSection.querySelector('#white-play-bg');
const firstLogoDiv = main.querySelector('#first-logo');
const firstDivLogos = firstLogoDiv.querySelectorAll('.sixth--section--logos');
const secondLogoDiv = main.querySelector('#second-logo');
const secondDivLogos = secondLogoDiv.querySelectorAll('.sixth--section--logos');
const thirdLogoDiv = main.querySelector('#third-logo');
const thirdDivLogos = thirdLogoDiv.querySelectorAll('.sixth--section--logos');
const changeImage = main.querySelectorAll('.js-changeImage');
const changeVideo = main.querySelector('.js-changeVideo');
let firstPreviousImage, secondPreviousImage, thirdPreviousImage;
class cardElements {
    constructor(inputedImage, inputedInnerDiv) {
        this.image = main.querySelector(inputedImage);
        this.innerDiv = main.querySelector(inputedInnerDiv);
    }
}
const secondSection = main.querySelector('#second-section');
const firstCardElements = new cardElements('#first-card--image', '#first-card--inner-div');
const secondCardElements = new cardElements('#second-card--image', '#second-card--inner-div');
const thirdCardElements = new cardElements('#third-card--image', '#third-card--inner-div');
const fourthSection = main.querySelector('#fourth-section');
const fourthCardElements = new cardElements('#first-card2--image', '#first-card2--inner-div');
const fifthCardElements = new cardElements('#second-card2--image', '#second-card2--inner-div');
const sixthSection = main.querySelector('#sixth-section');
const seventhSection = main.querySelector('#seventh-section');
let previousTime = Date.now();
let delayFunctionCalling = () => {
    let currentTime = Date.now();
    if (currentTime - previousTime >= 500) {
        runAnimation(secondSection);
        runAnimation(firstCardElements.image);
        runAnimation(firstCardElements.innerDiv);
        runAnimation(secondCardElements.image);
        runAnimation(secondCardElements.innerDiv);
        runAnimation(thirdCardElements.image);
        runAnimation(thirdCardElements.innerDiv);
        runAnimation(fourthSection);
        runAnimation(fourthCardElements.image);
        runAnimation(fourthCardElements.innerDiv);
        runAnimation(fifthCardElements.image);
        runAnimation(fifthCardElements.innerDiv);
        runAnimation(sixthSection);
        runAnimation(seventhSection);
        return previousTime = currentTime;
    }
};
let runAnimation = (theElementsVariableName) => {
    if (theElementsVariableName.getBoundingClientRect().top - screen.height < 35) {
        theElementsVariableName.classList.add('changeOpacity');
    }
};
setTimeout(delayFunctionCalling, 1000);
window.onscroll = () => delayFunctionCalling();
//Generate a random number based on the number of images in that div and returns a random element
let randomElement = (theDivLogos) => {
    let randomNumber = Math.floor(Math.random() * theDivLogos.length);
    return theDivLogos[randomNumber];
};
let changeSource = () => {
    let sourceChangerFunction = (directory, index) => {
        switch (directory.includes('images')) {
            case true:
                // @ts-ignore
                changeImage[index].setAttribute('src', directory);
                break;
            default:
                changeVideo.setAttribute('src', directory);
                break;
        }
    };
    if (screen.width >= 1920) {
        sourceChangerFunction('./assets/images/lady_beside_leaf-hd.avif', 0);
        sourceChangerFunction('./assets/images/eye_drawing-hd.avif', 1);
        sourceChangerFunction('./assets/images/holding_phone-hd.avif', 2);
        sourceChangerFunction('./assets/images/e-hd.avif', 3);
        sourceChangerFunction('./assets/images/life-hd.avif', 4);
    }
};
changeSource();
window.onresize = () => {
    changeSource();
    delayFunctionCalling();
};
menuBtn.onclick = () => {
    let navBarDisplayValue = getComputedStyle(navBar, undefined).getPropertyValue('display');
    if (navBarDisplayValue == 'none') {
        navBar.style.display = 'flex';
        menuBtn.setAttribute('name', 'close');
    }
    else {
        navBar.style.display = 'none';
        menuBtn.setAttribute('name', 'menu');
    }
};
playBtn.onclick = () => {
    playBtn.classList.add('hidden');
    videoTemplate.forEach(item => {
        item.classList.add('!hidden');
    });
    whitePlayBgIcon.classList.add('hidden');
    /*Video needs to automatically play*/
};
const logoAnimation = (previousElement, currentElement, theLogoDiv) => {
    if (previousElement == undefined || previousElement == null) {
        currentElement.classList.add('show');
    }
    else if (currentElement == previousElement) { }
    else {
        currentElement.classList.add('show');
        previousElement.classList.remove('show');
    }
    switch (theLogoDiv) {
        case firstDivLogos:
            return firstPreviousImage = currentElement;
            break;
        case secondDivLogos:
            return secondPreviousImage = currentElement;
            break;
        case thirdDivLogos:
            return thirdPreviousImage = currentElement;
            break;
    }
};
setInterval(() => {
    logoAnimation(firstPreviousImage, randomElement(firstDivLogos), firstDivLogos);
}, 2000);
setInterval(() => {
    logoAnimation(secondPreviousImage, randomElement(secondDivLogos), secondDivLogos);
}, 2000);
setInterval(() => {
    logoAnimation(thirdPreviousImage, randomElement(thirdDivLogos), thirdDivLogos);
}, 2000);
cookieRejectButton.onclick = () => {
    cookiesSection.classList.add('hide-cookies');
};
cookieAcceptButton.onclick = () => {
    cookiesSection.classList.add('hide-cookies');
};
