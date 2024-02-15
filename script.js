const switcher = document.getElementById('mode-switcher');
switcher.addEventListener('click', function() {
    const body = document.body;
    const isLightMode = body.classList.contains('light-mode');
    body.classList.toggle('light-mode', !isLightMode);
    body.classList.toggle('dark-mode', isLightMode);
    switcher.classList.toggle('dark-mode', isLightMode);
});