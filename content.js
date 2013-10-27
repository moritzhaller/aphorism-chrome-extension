chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.request) {
		case "aphorism":
			sendResponse( getAphorismData() );
		break;
	}
})

var selection;

window.addEventListener('mouseup', function() {
	if (window.getSelection) {
		selection = window.getSelection().toString();
	}
});

var getAphorismData = function() {
	var createdAt = '2013-10-27 22:42:41';
	var source = document.URL;
	var text = selection;
	
	var response = {
		createdAt: createdAt,
		source: source,
		text: text
	};

	return response;
}