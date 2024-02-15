const switcher = document.getElementById('mode-switcher');
const body = document.body;
const isDarkMode = body.classList.contains('dark-mode');

// Check if the switcher should be in the 'dark-mode' state
const isSwitcherDarkMode = switcher.classList.contains('dark-mode');
if (isDarkMode && !isSwitcherDarkMode) {
    switcher.classList.add('dark-mode');
}

switcher.addEventListener('click', function() {
    const isLightMode = body.classList.contains('light-mode');
    body.classList.toggle('light-mode', !isLightMode);
    body.classList.toggle('dark-mode', isLightMode);
    switcher.classList.toggle('dark-mode', isLightMode);
});