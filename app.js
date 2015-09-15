$(document).ready(function() {
	// pages
	var pageMain = document.getElementById('page-main');
	var pageAbout = document.getElementById('page-about');
	var pageTools = document.getElementById('page-tools');
	var pageSnippets = document.getElementById('page-snippets');
	
	// main page links
	var about = document.getElementById('about');
	var tools = document.getElementById('tools');
	var snippets = document.getElementById('snippets');
	var backButton = document.getElementsByClassName('back-button');

	$(about).click(function() {
	    $(pageMain).css("display", "none");
	    $(pageAbout).css("display", "block");
	});

	$(tools).click(function() {
		$(pageMain).css('display', 'none');
		$(pageTools).css('display', 'block');
	});

	$(snippets).click(function() {
		$(pageMain).css('display', 'none');
		$(pageSnippets).css('display', 'block');
	});

	$(backButton).click(function() {
		$(pageMain).css('display', 'block');
		$(pageAbout).css('display', 'none');
		$(pageTools).css('display', 'none');
		$(pageSnippets).css('display', 'none');
	});
});
