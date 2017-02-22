console.log("This is from background.js");

chrome.browserAction.onClicked.addListener(function() {
	alert('background loaded!');
}
);

chrome.webRequest.onBeforeRequest.addListener(BlockFacebook, {
	urls: ['*://*.facebook.com/*'],
	types: [ 'main_frame' ]
}, ['blocking']);

function BlockFacebook(){
	console.log('Block Facebook');
	return { cancel: true };
}

chrome.webRequest.onBeforeRequest.addListener(BlockImage, {
	urls: ['<all_urls>'],
	types: ['image']
}, ['blocking']);


function BlockImage(e) {
	
	var type = e.type;

	if (type == 'image') {
		var myImg = chrome.extension.getURL('nothing.png');
		return { redirectUrl: myImg };
	}
}