var carouselList = $('#carousel ul');
var loading = $('#carousel > i');

$(function() {
	setInterval(rollSlideRight, 6000);
	var leftHand = $('.left-hand');
	var rightHand = $('.right-hand');
	leftHand.click(function() { 
		rollSlideLeft();
	});
	rightHand.click(function() { 	
		rollSlideRight();
	});
});

function rollFirstSlide() {
	var firstItem = carouselList.find('li:first');
	var lastItem = carouselList.find('li:last');
	lastItem.after(firstItem);
	carouselList.css({marginLeft:-400});
	loading.css('display','none');
}

function rollSlideRight() {
	loading.css('display','initial');
	carouselList.animate(
		{'marginLeft': -800},
		500,
		rollFirstSlide
		);
}

function rollLastSlide() {
	var firstItem = carouselList.find('li:first');
	var lastItem = carouselList.find('li:last');
	firstItem.before(lastItem);
	carouselList.css({marginLeft:-400});
	loading.css('display','none');
}

function rollSlideLeft() {
	loading.css('display','initial');
/*	rollLastSlide(); */
	carouselList.animate(	
		{'marginLeft': 0},
		500,
		rollLastSlide
		);
}

