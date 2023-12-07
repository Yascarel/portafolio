document.addEventListener('DOMContentLoaded', function() {

   const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const articleUl = document.querySelector('.article__ul')

  let index = 0

  left.addEventListener('click', function () {
    
    index = (index > 0) ? --index : 5 - 1
    articleUl.style.transform = `translateX(-${index * 100}%`
  })

    right.addEventListener('click', function () {
    
    index = (index < 5 - 1) ? ++index : 0
    articleUl.style.transform = `translateX(-${index * 100}%`
  })

  const articlePromesa = document.getElementById('article--promise');

  const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'

  const data = fetch(URL)

  const left1 = document.querySelector('.left--one')
  const right1 = document.querySelector('.right--one')
  const articleUl1 = document.querySelector('.article__ul--one')

  data
   .then((res) => res.json())
   .then((res) => {console.log(res)

    res.forEach(element => {
      console.log(element)

      articlePromesa.innerHTML += `
      <li class='article__li'>
          <img src='${element.image}' alt='${element.title}' class='article__img'>
          <h3 data-translate-en="${element.title}" data-translate-es="${element.titulo}" class='article__h3'>${element.titulo}</h3>
          <p class="article__p" data-translate-en="${element.description}" data-translate-es="${element.descripcion}">${element.descripcion}</p>
          <h4 data-translate-en="${element.tecnologias}" data-translate-es="${element.tecnologias}" class='article__h4--Projects'>${element.tecnologias}</h4>
 </li> 
      `  
    });

    let index1 = 0

  left1.addEventListener('click', function () {
    
    index1 = (index1 > 0) ? --index1 : res.length - 1
    articleUl1.style.transform = `translateX(-${index1 * 100}%`
  })

    right1.addEventListener('click', function () {
    
    index1 = (index1 < res.length - 1) ? ++index1 : 0
    articleUl1.style.transform = `translateX(-${index1 * 100}%`
  })
   })
    .catch((error) => {
    console.log(error)
   })
   .finally(() => {

   }) 
});

