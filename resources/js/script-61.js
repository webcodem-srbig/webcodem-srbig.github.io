const urls = {
  'url1': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhYnklMjBQbGF5ZXIubWNwYWNr',
  'url2': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vZGVzY2FyZ2FyLWVycm9yLTQwNA',
  'url3': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vcCVDMyVBMWdpbmEtZXJyb3ItNDA0',
  'url4': 'aHR0cHM6Ly93ZWJjb2RlbS1zcmJpZy5naXRodWIuaW8vd2ViY29kZW0tc3JiaWctbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9BY3Rpb25zJTIwJiUyMFN0dWZmJTIwMS4yLm1jcGFjaw==',
  'url5': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhcmUgQm9uZSBQbHVzIFtCRVRBXS5tY3BhY2s',
};

function decodeAndRedirect(event, urlKey) {
  event.preventDefault();
  console.log("Download initiated for:", urlKey);
  
  try {
    // Get the encoded URL
    const contentUrl = urls[urlKey];
    if (!contentUrl) {
      console.error("URL key not found:", urlKey);
      return;
    }
    
    // Decode the Base64 URL
    const decodedUrl = atob(contentUrl);
    console.log("Decoded URL:", decodedUrl);
    
    // Redirect to the URL directly (simpler approach)
    window.location.href = decodedUrl;
  } catch (error) {
    console.error("Error during download:", error);
  }
}

// Legacy function for backward compatibility
function Download(event, urlKey) {
  decodeAndRedirect(event, urlKey);
}

// Don't try to hide overlay that may not exist
document.addEventListener('DOMContentLoaded', function() {
  console.log("Script-61 loaded successfully");
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
});
