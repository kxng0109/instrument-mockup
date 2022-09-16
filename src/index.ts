const container = document.querySelector('.container') as HTMLDivElement;
const main = document.querySelector('#main') as HTMLDivElement;
const menuBtn = document.querySelector('#menu-btn') as HTMLButtonElement;
const navBar = document.querySelector('#navbar') as HTMLDivElement;
const playBtn = document.querySelector('#playBtn') as HTMLButtonElement;
const videoTemplate = document.querySelector('#video-template') as HTMLVideoElement;
const iframeVideo = document.querySelector('#iframe-video') as HTMLIFrameElement;
const whitePlayBgIcon = document.querySelector('#white-play-bg') as HTMLDivElement;
const firstLogoDiv = document.querySelector('#first-logo') as HTMLDivElement;
const firstDivLogos = firstLogoDiv.querySelectorAll('.sixth--section--logos') as NodeListOf<HTMLImageElement>;
const secondLogoDiv = document.querySelector('#second-logo') as HTMLDivElement;
const secondDivLogos = secondLogoDiv.querySelectorAll('.sixth--section--logos') as NodeListOf<HTMLImageElement>;
const thirdLogoDiv = document.querySelector('#third-logo') as HTMLDivElement;
const thirdDivLogos = thirdLogoDiv.querySelectorAll('.sixth--section--logos') as NodeListOf<HTMLImageElement>;
const changeImage = document.querySelectorAll('.js-changeImage') as NodeListOf<HTMLImageElement>;
const changeVideo = document.querySelector('.js-changeVideo') as HTMLVideoElement;
let firstPreviousImage:HTMLImageElement, secondPreviousImage:HTMLImageElement, thirdPreviousImage:HTMLImageElement;
const cookieRejectButton = document.querySelector('.cookies--reject-button') as HTMLButtonElement;
const cookieAcceptButton = document.querySelector('.cookies--accept-button') as HTMLButtonElement;
const cookiesSection = document.querySelector('.cookies-section') as HTMLDivElement;

//Generate a random number based on the number of images in that div and returns a random element
let randomElement = (theDivLogos:NodeListOf<HTMLImageElement>) =>{
	let randomNumber = Math.floor(Math.random() * theDivLogos.length);
	return theDivLogos[randomNumber]
}

let changeSource = () =>{
	let sourceChangerFunction = (directory:string, index:number|undefined) =>{
		switch(directory.includes('images')){
			case true:
				// @ts-ignore
				changeImage[index].setAttribute('src', directory);
			break;
			default:
				changeVideo.setAttribute('src', directory);
			break;
		}
	}

	if(screen.width >= 1920){
		sourceChangerFunction('./assets/images/lady_beside_leaf-hd.avif', 0);
		sourceChangerFunction('./assets/images/eye_drawing-hd.avif', 1);
		sourceChangerFunction('./assets/images/holding_phone-hd.avif', 2);
		sourceChangerFunction('./assets/images/e-hd.avif', 3);
		sourceChangerFunction('./assets/images/life-hd.avif', 4);
		sourceChangerFunction('./assets/videos/preloaded_video_720p.mp4', undefined);
	}
}

changeSource();

window.onresize = () => changeSource();

menuBtn.onclick = () =>{
	let navBarDisplayValue = getComputedStyle(navBar, undefined).getPropertyValue('display');

	if(navBarDisplayValue == 'none'){
		navBar.style.display = 'flex';
		menuBtn.setAttribute('name', 'close')	;
	} else{
		navBar.style.display = 'none';
		menuBtn.setAttribute('name', 'menu')		
	}
}

playBtn.onclick = () =>{
	playBtn.classList.add('hidden');
	videoTemplate.classList.add('hidden');
	whitePlayBgIcon.classList.add('hidden');
	/*Video needs to automatically play*/
}

const logoAnimation = (previousElement:HTMLImageElement, currentElement:HTMLImageElement, theLogoDiv:NodeListOf<HTMLImageElement>) =>{
	if(previousElement == undefined || previousElement == null){
		currentElement.classList.add('show');
	}else if(currentElement == previousElement){}
	else{
		currentElement.classList.add('show');
		previousElement.classList.remove('show');
	}

	switch(theLogoDiv){
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
}

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
}

cookieAcceptButton.onclick = () => {
	cookiesSection.classList.add('hide-cookies');
}