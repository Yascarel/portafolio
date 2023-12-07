document.addEventListener('DOMContentLoaded', function(){
  const elementsToTranslate = document.querySelectorAll('[data-translate-es]')

  console.log(elementsToTranslate)

  const btnChange = document.getElementById('changeLanguageBtn');

  let language = 'en'

  btnChange.addEventListener('click', function() {
    if (language === 'es') {
      
      for(const phrase of elementsToTranslate) {
        const translate = phrase.getAttribute('data-translate-en')
        phrase.textContent = translate
      }
      document.getElementById('domloadCv').href = './assets/cv/cv_en.png'
      language = 'en'

    } else {
      for(const phrase of elementsToTranslate) {
        const translate = phrase.getAttribute('data-translate-es')
        phrase.textContent = translate
    }
    document.getElementById('domloadCv').href = './assets/cv/cv_es.png'
      language = 'es'
  }
})
})