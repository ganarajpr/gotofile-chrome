import ChromePromise from 'chrome-promise';
import ws from 'socket.io-client';

var socket = ws('http://localhost:5186');

const CONTEXT_MENU_ID = 'gotofile';
chrome.promise = new ChromePromise();
/*
let ws = new WebSocket('ws://localhost:5186');

ws.onopen = function open() {
  ws.send('something');
  chrome.contextMenus.onClicked.addListener(onClick);
  chrome.contextMenus.create({
    "title": "Go To File",
     "id": CONTEXT_MENU_ID
   });
};
*/

socket.on('connect', () => {
  chrome.contextMenus.onClicked.addListener(onClick);
  chrome.contextMenus.create({
    "title": "Go To File",
     "id": CONTEXT_MENU_ID
   });
});

socket.on('news', (data) => {
  console.log(data);
});

/*ws.onmessage = function onMessage(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
  console.log(data);
};*/
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
