document.addEventListener("DOMContentLoaded", function () {
  const changeMode = document.querySelector('#toggleModeBtn');
  const modeText = document.querySelector('#modeText');
  const body = document.querySelector('body')


  changeMode.addEventListener('click', function (e) {

    const currentMode = modeText.textContent.trim();
  
    if (currentMode === 'light_mode') {
      modeText.textContent = 'dark_mode';
      body.classList.remove('body--dark')
    } else {
      modeText.textContent = 'light_mode';
      body.classList.add('body--dark')
    }

  });

})