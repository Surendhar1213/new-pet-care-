// Override inspector blocking code
if (typeof window !== 'undefined') {
  // Remove contextmenu blocking
  window.removeEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
  
  // Remove keydown blocking
  document.onkeydown = null;
  
  // Allow all keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Allow all keys including F12, Ctrl+Shift+I, etc.
    return true;
  }, true);
}

