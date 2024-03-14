document.addEventListener('DOMContentLoaded', (event) => {
	let currentOpt = 'first';

	const options = {
		first: {
			text: 'FREE DELIVERY STARTING FROM €100',
			logo: '/img/clock.png',
			next: 'second',
			prev: 'third',
		},
		second: {
			text: 'BOOK A VIDEO CHAT',
			logo: '/img/calen.png',
			next: 'third',
			prev: 'first',
		},
		third: {
			text: 'SECURE PAYMENT',
			logo: '/img/padlock.png',
			next: 'first',
			prev: 'second',
		},
	};

	const changeText = (direction) => {
		const option = options[currentOpt];

		if (direction === 'next') {
			currentOpt = option.next;
		} else if (direction === 'prev') {
			currentOpt = option.prev;
		}

		const logo = document.getElementById('logo');
		const changableTextElement = document.getElementById('changableText');
		changableTextElement.textContent = options[currentOpt].text;
		logo.src = options[currentOpt].logo;
	};

	changeText('next');

	document.getElementById('but1').addEventListener('click', () => changeText('prev'));
	document.getElementById('but2').addEventListener('click', () => changeText('next'));
});

function searchItem() {
	let searc = document.getElementById('searc');
	let searc2 = document.getElementById('searc2');
	let searc3 = document.getElementById('searc3');
	let searc4 = document.getElementById('searc4');
	if (searc && searc2) {
		searc.classList.toggle('hidden');
		searc2.classList.toggle('hidden');
	}
	if (searc3 && searc4) {
		searc3.classList.toggle('hidden');
		searc4.classList.toggle('hidden');
	}
}
searchItem();

const openMenu = () => {
	let menu2 = document.getElementById('menu2');
	if (menu2) {
		menu2.classList.toggle('hidden');
	}
};

openMenu();

const blockScroll = (isLocked) => {
	const body = document.body;
	if (isLocked) {
		body.classList.add('overflow-hidden');
	} else {
		body.classList.remove('overflow-hidden');
	}
};

const images = [
	'/img/trolleyfront.png',
	'/img/trolleyfront2.jpg',
	'/img/trolleyback.png',
	'/img/trolleyback2.jpg',
	'/img/trolleyopen.png',
	'/img/trolleyopen2.jpg',
	'/img/trolleyside.png',
	'/img/trolleyside2.jpg',
	'/img/trolleyside3.jpg',
	'/img/trolleywheel.jpg',
	'/img/trolleytop.jpg',
];

const image2 = document.getElementById('image2');
const selectImg = (index) => {
	const image = document.getElementById('image');
	const imageButtons = document.querySelectorAll('#image2');
	imageButtons.forEach((button) => {
		button.classList.remove('opacity-100', 'bg-slate-600');
	});
	imageButtons[index].classList.add('opacity-100', 'bg-slate-600');
	if (image) {
		image.src = images[index];
	}
};
selectImg(0);

const sizes = ['20cm', '23xm', '69cm', '75cm', '81cm', '86cm'];
const size = document.getElementById('size');

const selectSize = (index) => {
	const buttons = document.querySelectorAll('#size');
	buttons.forEach((button) => {
		button.classList.remove('ring-1', 'ring-black');
	});
	buttons[index].classList.add('ring-1', 'ring-black');
};

selectSize(0);

const sizes2 = ['Honey Gold', 'Silver', 'Black', 'Petrol Blue', 'Matt Climbing Ivy', 'Matt Graphite', 'Lime'];
const size2 = document.getElementById('size2');
const color = document.getElementById('color');
color.textContent = sizes2[3];

const selectSize2 = (index) => {
	const buttons = document.querySelectorAll('#size2');
	buttons.forEach((button) => {
		button.classList.remove('ring-1', 'ring-black');
	});
	buttons[index].classList.add('ring-1', 'ring-black');
	if (color) {
		color.textContent = sizes2[index];
	}
};
//aggiungere nomi colori in hover
const showColorText = (index) => {
	if (color) {
		color.textContent = sizes2[index];
	}
};

selectSize2(3);

window.addEventListener('scroll', function () {
	const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY;

	if (scrolled < scrollHeight * 0.1) {
		document.getElementById('hiddenElement').classList.remove('hidden');
	} else {
		document.getElementById('hiddenElement').classList.add('hidden');
	}
});

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

const luggage = document.getElementById('luggage');
const lugHover = document.getElementById('lugHover');
const backpacks = document.getElementById('backpacks');
const backHover = document.getElementById('backHover');
const bags = document.getElementById('bags');
const bagsHover = document.getElementById('bagsHover');
const disney = document.getElementById('disney');
const disneyHover = document.getElementById('disneyHover');
const personalization = document.getElementById('personalization');
const persHover = document.getElementById('persHover');
const services = document.getElementById('services');
const servHover = document.getElementById('servHover');
const brand = document.getElementById('brand');
const brandHover = document.getElementById('brandHover');

luggage.addEventListener('mouseout', () => {
	lugHover.classList.add('hidden');
});
luggage.addEventListener('mouseover', () => {
	lugHover.classList.remove('hidden');
});
backpacks.addEventListener('mouseout', () => {
	backHover.classList.add('hidden');
});
backpacks.addEventListener('mouseover', () => {
	backHover.classList.remove('hidden');
});
bags.addEventListener('mouseout', () => {
	bagsHover.classList.add('hidden');
});
bags.addEventListener('mouseover', () => {
	bagsHover.classList.remove('hidden');
});
disney.addEventListener('mouseout', () => {
	disneyHover.classList.add('hidden');
});
disney.addEventListener('mouseover', () => {
	disneyHover.classList.remove('hidden');
});
personalization.addEventListener('mouseout', () => {
	persHover.classList.add('hidden');
});
personalization.addEventListener('mouseover', () => {
	persHover.classList.remove('hidden');
});
services.addEventListener('mouseout', () => {
	servHover.classList.add('hidden');
});
services.addEventListener('mouseover', () => {
	servHover.classList.remove('hidden');
});
brand.addEventListener('mouseout', () => {
	brandHover.classList.add('hidden');
});
brand.addEventListener('mouseover', () => {
	brandHover.classList.remove('hidden');
});
