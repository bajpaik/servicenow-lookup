/**
 * 06:03:15 created by Rutul Patel aKa RTL aKa fACE
 */
// Saves options to chrome.storage
function save_options() {
  var sn_url = document.getElementById('sn_url').value;
  chrome.storage.sync.set({
    sn_url: sn_url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
    window.close();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    sn_url: 'https://sandbox.service-now.com'
  }, function(items) {
    document.getElementById('sn_url').value = items.sn_url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);