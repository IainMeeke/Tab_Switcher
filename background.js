var cur_tab;
var prev_tab;

chrome.tabs.onCreated.addListener(function(tab){
	if(cur_tab){
		prev_tab= cur_tab;
	}
	cur_tab = tab;
});

chrome.tabs.onActivated.addListener(function(activeInfo){	
	if(cur_tab){
		prev_tab = cur_tab;
	}
	chrome.tabs.get(activeInfo.tabId,function(tab){
		cur_tab = tab;
	});	
});

chrome.commands.onCommand.addListener(function(command){
	if(prev_tab){
		chrome.tabs.update(prev_tab.id,{"active":true}, function(){		
		});
	}
});