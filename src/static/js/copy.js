$(function() {
	const linkBoxes = $(".link-box");
	
	linkBoxes.each((index) => {
		const $box = $(linkBoxes[index]);

		const copyBtn = $box.find(".copy-btn");
		const copyTxt = $box.find(".copy-text");
		const tooltip = copyBtn.find(".tooltip");

		copyBtn.on("click", (e) => {
			if(this.disabled) return;
			this.disabled = true;

			navigator.clipboard.writeText(copyTxt.val());
			tooltip.addClass("active");
			
			setTimeout(() => {
				let $this = this;
				tooltip.fadeOut(150, function() {
					$this.disabled = false;
					tooltip.removeClass("active");
					tooltip.removeAttr("style");
				});
			}, 650);
		});
	});
});