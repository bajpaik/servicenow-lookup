/**
 * 06:03:15 created by Rutul Patel aKa RTL aKa fACE
 */


function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
        description: 'Service-Now: Go to %s'
    });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
//suggestions code    
});


chrome.omnibox.onInputCancelled.addListener(function(){
    resetDefaultSuggestion();
});


function navigate(url) {
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id,{url:url});
    });
}

chrome.omnibox.onInputEntered.addListener(function(text){
    chrome.storage.sync.get({
        sn_url: 'https://sandbox.service-now.com'
    }, function(itm) {
        navigate(itm.sn_url+"/nav_to.do?uri=textsearch.do?sysparm_search="+text);
    });
});


//open options page on first execution
chrome.runtime.onInstalled.addListener(function (object) {
    chrome.runtime.openOptionsPage();
    /*chrome.tabs.create({url: "chrome://extensions/?options=eheminlgmlmepfdiooakjnlknhakemfo"}, function (tab) {
        console.log("launching options page");
    });*/
});