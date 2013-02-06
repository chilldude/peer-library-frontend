$(document).ready(function(){
	// search
	var searchActive = false;

	function searchOn() {
		$('.search').fadeIn('fast');
		$('.search-input').focus();
		searchActive = true;
	}

	function searchOff() {
		$('.search').fadeOut('fast');
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

	$(document).keypress(function(event) {
		if (!searchActive) {
			var char = String.fromCharCode(event.which);
			if (char.match(/\w/)) {
				searchOn();
			}
		}
	});

	// viewer
	var viewerActive = false;

	function viewerOn() {
		$('.viewer').fadeIn('fast');
		viewerActive = true;
	}

	function viewerOff() {
		$('.viewer').fadeOut('fast');
		viewerActive = false;
	}

	$('.viewer-link').click(function(){
		viewerOn();
	});

	// escape
	$(document).keyup(function(event) {
		if (event.which == 27) {
			searchOff();
			viewerOff();
		}
	});
});