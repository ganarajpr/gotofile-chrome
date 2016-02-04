import ChromePromise from 'chrome-promise';
const CONTEXT_MENU_ID = 'gotofile';
chrome.promise = new ChromePromise();
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
chrome.contextMenus.onClicked.addListener(onClick);
chrome.contextMenus.create({
  "title": "Go To File",
   "id": CONTEXT_MENU_ID
 });

 function getActiveTab(){
   return chrome.promise.tabs.query({active: true, currentWindow: true}).then( (tabs) => {
     return tabs[0].id;
   });
 }

 function sendMessageToTab(tabId,message){
   return chrome.promise.tabs.sendMessage(tabId,message);
 }
