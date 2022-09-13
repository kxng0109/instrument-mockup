const container = document.querySelector('.container') as HTMLDivElement;
const main = document.querySelector('#main') as HTMLDivElement;
const menuBtn = document.querySelector('#menu-btn') as HTMLButtonElement;
const navBar = document.querySelector('#navbar') as HTMLDivElement;
const playBtn = document.querySelector('#playBtn') as HTMLButtonElement;
const videoTemplate = document.querySelector('#video-template') as HTMLVideoElement;
const iframeVideo = document.querySelector('#iframe-video') as HTMLIFrameElement;
const whitePlayBg = document.querySelector('#white-play-bg') as HTMLDivElement;
const firstLogoDiv = document.querySelector('#first-logo') as HTMLDivElement;
const firstDivLogos = firstLogoDiv.querySelectorAll('.sixth--section--logos') as NodeListOf<HTMLImageElement>;
const secondLogoDiv = document.querySelector('#second-logo') as HTMLDivElement;
const secondDivLogos = secondLogoDiv.querySelectorAll('.sixth--section--logos') as NodeListOf<HTMLImageElement>;
const thirdLogoDiv = document.querySelector('#third-logo') as HTMLDivElement;
const thirdDivLogos = thirdLogoDiv.querySelectorAll('.sixth--section--logos') as NodeListOf<HTMLImageElement>;
let firstPreviousImage:HTMLImageElement, secondPreviousImage:HTMLImageElement, thirdPreviousImage:HTMLImageElement;

//Generate a random number based on the number of images in that div and returns a random element
let randomElement = (theDivLogos:NodeListOf<HTMLImageElement>) =>{
	let randomNumber = Math.floor(Math.random() * theDivLogos.length);
	return theDivLogos[randomNumber]
}

menuBtn.onclick = () =>{
	let displayValue = getComputedStyle(navBar, undefined).getPropertyValue('display');

	displayValue == 'none' ? 
	(
		navBar.style.display = 'flex',
		menuBtn.setAttribute('name', 'close')
	) : 
	(
		navBar.style.display = 'none',
		menuBtn.setAttribute('name', 'menu')
	)
}

playBtn.onclick = () =>{
	playBtn.classList.add('hidden');
	videoTemplate.classList.add('hidden');
	whitePlayBg.classList.add('hidden');
	/*Video needs to automatically play*/
}

const logoAnimation = (previousElement:HTMLImageElement, currentElement:HTMLImageElement, theLogoDiv:NodeListOf<HTMLImageElement>) =>{
		console.log(previousElement)
	switch(true){
		case previousElement == undefined || previousElement == null:
			currentElement.classList.add('show');
		break;

		case currentElement == previousElement:
		break;

		default:
			currentElement.classList.add('show');
			previousElement.classList.remove('show');
		break;
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