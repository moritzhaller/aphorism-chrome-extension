// Background script is the proxy between popup and content script

// Listening for messages coming from the popup
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case 'get-aphorism':
			getAphorism();

		case 'send-aphorism-data':
			sendAphorism(message);

		break;
	}
});

// send a message to the content script
var getAphorism = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			type: 'get-aphorism-data'
		});
	});
}

var sendAphorism = function(message) {
	console.log( message );
	chrome.extension.sendMessage(message);
}