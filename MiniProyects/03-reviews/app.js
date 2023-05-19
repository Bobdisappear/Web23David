// local reviews data

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  }, 
];

// seleccionar botones
const btns = document.querySelectorAll('.btn');

//elements de bloque
  // const aut = document.getElementById('autor')

//recorrer array de objetos
const idReviews = reviews.map(function(review){
  return review
})

btns.forEach(function(r){
  r.addEventListener('click', function(a){
    const change = a.currentTarget.classList;
    
    if(change.contains('prev-btn')){
    aut++
  } else if (change.contains('next.btn')){
    
      
  } else{
    Math.random(idReviews)
  }
 
  })
 
})




console.log(idReviews);
//traer las referencias de los elementos del DOM que vamos a manehar desde el split

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//Traemos los elementos graficos

const img = document.getElementById('person-img')
const autor = document.getElementById('autor')
const job = document.getElementById('job')
const info = document.getElementById('info')

//Necesitamos saber el objeto (review) que se esta mostrando
const persona = reviews[0]
persona.name
persona.job
persona.img
persona.text


//Elementos para la interacción del usuario