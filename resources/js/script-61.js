const urls = {
  'url1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhYnklMjBQbGF5ZXIubWNwYWNr',
  'url2': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vZGVzY2FyZ2FyLWVycm9yLTQwNA',
  'url3': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vcCVDMyVBMWdpbmEtZXJyb3ItNDA0',
  'url4': 'aHR0cHM6Ly93ZWJjb2RlbS1zcmJpZy5naXRodWIuaW8vd2ViY29kZW0tc3JiaWctbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tdWx0aW1lZGlhL2ltYWdlL2FjdGlvbnNfJl9zdHVmZi5qcGc',
  'url5': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhcmUgQm9uZSBQbHVzIFtCRVRBXS5tY3BhY2s',
};

function Download(event, urlKey) {
  event.preventDefault(); 
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
    
  setTimeout(function() {
    const contentUrl = urls[urlKey];
    const decodedUrl = atob(contentUrl);
    window.location.href = decodedUrl;
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 1000);
  }, 2000);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('overlay').style.display = 'none';
});
