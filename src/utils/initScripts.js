// Initialize template JavaScript after DOM is ready
export const initTemplateScripts = () => {
  // Load jQuery and other scripts dynamically
  if (typeof window !== 'undefined' && !window.jQuery) {
    // Load jQuery
    const jqueryScript = document.createElement('script');
    jqueryScript.src = '/assets/js/vendor/jquery-3.7.1.min.js';
    jqueryScript.async = true;
    jqueryScript.onload = () => {
      // Load app.min.js after jQuery
      const appScript = document.createElement('script');
      appScript.src = '/assets/js/app.min.js';
      appScript.async = true;
      appScript.onload = () => {
        // Load main.js after app.min.js
        const mainScript = document.createElement('script');
        mainScript.src = '/assets/js/main.js';
        mainScript.async = true;
        mainScript.onload = () => {
          // Load override script to remove inspector blocking
          const overrideScript = document.createElement('script');
          overrideScript.src = '/assets/js/override-blocking.js';
          overrideScript.async = true;
          document.body.appendChild(overrideScript);
        };
        document.body.appendChild(mainScript);
      };
      document.body.appendChild(appScript);
    };
    document.body.appendChild(jqueryScript);
  }
};

