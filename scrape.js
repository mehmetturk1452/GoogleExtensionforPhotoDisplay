chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("popup.html got a message")
        console.log(request);
        sendResponse("al�nd�");
        console.log(sender);
        var a = request;
        img = document.getElementById('xx');
        img.setAttribute('src', a )
    });

