var switcher = document.getElementById('mode-switcher');
switcher.addEventListener('click', function() {
    var body = document.body;
  if(body.classList.contains('light-mode')) {
    body.classList.replace('light-mode', 'dark-mode');
    switcher.classList.add('dark-mode');
  } else {
    body.classList.replace('dark-mode', 'light-mode');
    switcher.classList.remove('dark-mode');
  }
});