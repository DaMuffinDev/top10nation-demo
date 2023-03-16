$(function() {
	const homemain = new Swiper(".homemain", {
		direction: "horizontal",
		loop: true,
		autoplay: true,
		slidersPerView: 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
});