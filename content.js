chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "get-aphorism-data":
			sendAphorism();
		break;
	}
});

var sendAphorism = function() {
	chrome.runtime.sendMessage({
		type: 'send-aphorism-data',
		aphorism: 'this is a aphorism'
	});
}