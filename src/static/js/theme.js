$(function() {
	const MutationObserver = window.MutationObserver || window.WebkitMutationObserver;
	const root = document.documentElement;

	const observer = new MutationObserver(function(mutations) {
		mutations.forEach(record => {
			const attribute = record.attributeName;
			
			if(attribute === "data-theme") {
				if(["light", "dark"].includes(root.dataset.theme))
					return;

				root.dataset.theme = "light";
			}
		});
	});

	observer.observe(root, {attributes: true});

	$("#theme-switch").on("click", (e) => {
		root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
		const checkbox = $(this).find("#switch");

		checkbox.prop("checked", !checkbox.prop("checked"));
		e.preventDefault();
	});
});