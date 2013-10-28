window.onload = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			request: 'aphorism'
		}, function(response) {
			// Display add-screen
			$("#aphorism-created-at").val(response.createdAt);
			$("#aphorism-source").val(response.source);
			$("#aphorism-text").val(response.text);

			// Send over to aphorism-app
			// ...
		});
	});
}