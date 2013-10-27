// Listening for messages coming from the background page
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case 'send-aphorism':
			manageAphorism(message);

		break;
	}
});

window.onload = function() {
	chrome.extension.sendMessage({
		type: 'get-aphorism'
	});
}

var manageAphorism = function(aphorism) {
	console.log(aphorism);
	return true;
}