const urls = {
  'url1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhYnklMjBQbGF5ZXIubWNwYWNr',
  'url2': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vZGVzY2FyZ2FyLWVycm9yLTQwNA',
  'url3': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vcCVDMyVBMWdpbmEtZXJyb3ItNDA0',
  'url4': 'aHR0cHM6Ly93ZWJjb2RlbS1zcmJpZy5naXRodWIuaW8vd2ViY29kZW0tc3JiaWctbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9BY3Rpb25zJTIwJiUyMFN0dWZmJTIwMS4yLm1jcGFjaw==',
  'url5': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhcmUgQm9uZSBQbHVzIFtCRVRBXS5tY3BhY2s',
};

// Rename the function to match what's called in the HTML
function decodeAndRedirect(event, urlKey) {
  event.preventDefault(); 
  
  // Direct download without overlay
  const contentUrl = urls[urlKey];
  const decodedUrl = atob(contentUrl);
  
  // Create a hidden anchor and trigger download
  const link = document.createElement('a');
  link.href = decodedUrl;
  link.download = decodedUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Keep the original function for backward compatibility
function Download(event, urlKey) {
  decodeAndRedirect(event, urlKey);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('overlay').style.display = 'none';
});
