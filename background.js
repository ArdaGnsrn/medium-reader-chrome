chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.create({url: `https://freedium-miror-saqg.vercel.app/${details.url}`});
}, {
    url: [{
        hostContains: '.medium.com'
    }],
});