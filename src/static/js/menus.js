$(function() {
	$(".navbar-toggler").each(function() {
		$(this).on("click", (e) => {
			const $this = $(this);		
			const enabled = $this.attr("aria-expanded");	

			$this.attr("aria-expanded", enabled === "false" ? "true": "false");

			menu(this);
		});
	});
});

function menu(element) {
	if(element.disabled) return;
	element.disabled = true;

	const target = $(element.dataset.target);
	const enabled = element.getAttribute("aria-expanded");

	if(enabled === "true") { 
		target.slideDown(250);
	} else {
		target.slideUp(250);
	}

	setTimeout(() => element.disabled = false, 650);
}