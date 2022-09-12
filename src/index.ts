const container = document.querySelector('.container') as HTMLDivElement;
const main = document.querySelector('#main') as HTMLDivElement;
const menuBtn = document.querySelector('#menu-btn') as HTMLButtonElement;
const navBar = document.querySelector('#navbar') as HTMLDivElement;
const playBtn = document.querySelector('#playBtn') as HTMLButtonElement;
const videoTemplate = document.querySelector('#video-template') as HTMLVideoElement;
const iframeVideo = document.querySelector('#iframe-video') as HTMLIFrameElement;
const whitePlayBg = document.querySelector('#white-play-bg') as HTMLDivElement;
const testing = document.querySelector('.vp-controls') as HTMLDivElement;

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