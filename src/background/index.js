const CONTEXT_MENU_ID = 'gotofile';
function onClick(event){
  if(event.menuItemId === CONTEXT_MENU_ID){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "getdata"}, function(response) {
          console.log(response);
        });
    });
  }
}
chrome.contextMenus.onClicked.addListener(onClick);
chrome.contextMenus.create({
  "title": "Go To File",
   "id": CONTEXT_MENU_ID
 });
