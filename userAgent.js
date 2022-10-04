chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.query === "userAgent")
            sendResponse({ result: window.navigator.userAgent });
    }
);