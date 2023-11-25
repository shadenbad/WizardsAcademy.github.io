function toggleTheme() {
      var body = document.body;
      
      body.classList.toggle('dark-mode');
      
      var isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
    
    window.addEventListener('load', function() {
      var theme = localStorage.getItem('theme');
      var body = document.body;
      
      if (theme === 'dark') {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    });
	
	