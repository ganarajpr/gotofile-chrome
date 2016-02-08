import $ from 'jquery';
var sources;
document.addEventListener('contextmenu',(e)=>{
  sources = [];
  var currentElement = $(e.target);
  sources.push(currentElement.data('source'));
  currentElement.parentsUntil('html').each(function(index){
    var src = $(this).data('source');
    if(src){
      sources.push(src);
    }
  });
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  sendResponse({data: sources});
});
