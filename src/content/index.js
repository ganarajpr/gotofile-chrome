var currentNode;
document.addEventListener('contextmenu',(e)=>{
  console.log('from extension',e.target.nodeName);
  currentNode = e.target.nodeName;
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  console.log(message, currentNode);
  sendResponse({data: currentNode});
});
