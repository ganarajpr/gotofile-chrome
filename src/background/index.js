import ChromePromise from 'chrome-promise';
import ws from 'socket.io-client';

var socket = ws('http://localhost:5186');
let contextMenuCreated = false;
const CONTEXT_MENU_ID = 'gotofile';
chrome.promise = new ChromePromise();


socket.on('connect', () => {
  if(!contextMenuCreated){
    chrome.contextMenus.create({
      "title": "Go To File",
       "id": CONTEXT_MENU_ID
     });
     chrome.contextMenus.onClicked.addListener(onClick);
     contextMenuCreated = true;
  }

});


socket.on('disconnect', function () {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.onClicked.removeListener(onClick);
  contextMenuCreated = false;
});

socket.on('news', (data) => {
  console.log(data);
});

function onClick(event){
  if(event.menuItemId === CONTEXT_MENU_ID){
      getActiveTab()
        .then((activeTabId) => {
          return sendMessageToTab(activeTabId,{action: "getdata"});
        })
        .then((response) => {
          //response contains the captured data
          console.log(response);
        })
  }
}


 function getActiveTab(){
   return chrome.promise.tabs.query({active: true, currentWindow: true}).then( (tabs) => {
     return tabs[0].id;
   });
 }

 function sendMessageToTab(tabId,message){
   return chrome.promise.tabs.sendMessage(tabId,message);
 }
