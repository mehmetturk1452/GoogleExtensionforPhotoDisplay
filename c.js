/*var po = document.getElementById('poNum');
chrome.runtime.sendMessage("fdg",
    function (response) {
        console.log(response);
        var a = (response)
        var img = document.createElement('img')
        img.setAttribute('src', a);
        document.body.append(img);
        var dialog = document.createElement(dialog)
        dialog.Image = img    
        alert(po)
    }
);
console.log("this is c.js reporting for duty");
*/
// you will see this log in console log of current tab in Chrome when the script is injected
console.log("c.js");

const button = document.createElement('button');

button.textContent = 'FOTOĞRAF';
document.body.insertAdjacentElement('beforebegin', button);

button.addEventListener('click', () => {
	var po = document.getElementsByClassName('x-grid-group-body');
     //var c =po.item(0).textContent.substring(60,66);
	var c =po.item(0).innerText;
   	var f =c.replaceAll("\n\t\n","%")
	
	var i=0;
	var v=0;
	
    do {
	var h=f.substring(i,i+1);
		
		if (h == "%") {v=v+1
			 
			 } 
		
	i=i+1;
	}
while(v< 7);
	
	var g= f.substring(i,i+6)
var e = document.getElementsByClassName('x-grid-group-body');
var d = "http://127.0.0.1:8887/"+g+".png"
	console.log(g); // bu artikel
	console.log(d); // bu dosya yolu
	console.log(f); // bu classın innertextinin tamamının virgüllüsü
	
    //alert(g);    
	
	//new.window.open(d);
	chrome.storage.sync.set({key: g}, function() {
  console.log('Value is set to ' + g);
		
});
	chrome.storage.sync.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});
	
	//window.open(d)
chrome.runtime.sendMessage(g,
  function (response) {
      console.log(response);
        //var dialog = document.createElement(dialog)
        //img = document.createElement('img');
	//img.setAttribute('src', "0127209444.png");
		//dialog.text="gşdfkşlkfdg"   
        //dialog.open
        
    });

})
//created by meca otomation 



  

