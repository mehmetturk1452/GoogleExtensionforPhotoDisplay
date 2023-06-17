chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("background.js got a message")
        console.log(request);
		 sendResponse("alındı");
		console.log(sender);
	   
        chrome.storage.sync.get(['key'], function (result) {
            console.log('Value currently is ' + result.key);
        });

        chrome.storage.sync.set({ key1: request }, function () {
            console.log('Value is set to ' + request);
            var a = request + ".jpg"
            chrome.runtime.sendMessage(a,
                function (response) {
                    console.log(response);
                    //var dialog = document.createElement(dialog)
                    //img = document.createElement('img');
                    //img.setAttribute('src', "0127209444.png");
                    //dialog.text="gşdfkşlkfdg"   
                    //dialog.open

                });
        });
		
        
    }
);

console.log("this is listen.js reporting for duty");

chrome.action.onClicked.addListener(function (tab) {
   
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        /*width: 2600,
        height: 2100,*/
        state: "maximized"
        
    }, function (win) {
        // win represents the Window object from windows API
        // Do something after opening
            
             // img = document.createElement('img');
	         // img.setAttribute('src', request+".png");
    });
});




