$(document).ready(function(){
	/* search */
	var searchActive = false;

	function searchOn() {
		$('.search').show();
		$('.search-input').focus();
		searchActive = true;
	}

	function searchOff() {
		$('.search').hide();
		$('.search-input').blur();
		$('.search-input').val('');
		searchActive = false;
	}

	$('.search-link').click(function(){
		searchOn();
	});

	$('.search').click(function(event){
		if(!$(event.target).is('input')) {
			searchOff();
		}
	});

	$(document).keyup(function(event) {
		if (event.keyCode == 27) { // esc
			searchOff();
		}
	});

	$(document).keypress(function(event) {
		if (!searchActive) {
			var char = String.fromCharCode(event.keyCode);
			if (char.match(/\w/)) {
				searchOn();
			}
		}
	});

});