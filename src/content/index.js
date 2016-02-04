var nodeData;
document.addEventListener('contextmenu',(e)=>{
  console.log('from extension',e.target);
  //data to be captured from e.target
  nodeData = e.target.nodeName;
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  sendResponse({data: nodeData});
});
