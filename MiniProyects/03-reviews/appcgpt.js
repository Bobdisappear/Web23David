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
  
  // seleccionar elementos del DOM
  const personImg = document.getElementById('person-img');
  const authorElement = document.getElementById('autor');
  const jobElement = document.getElementById('job');
  const infoElement = document.getElementById('info');
  
  // elemento de revisión actual
  let currentReview = 0;
  
  // función para actualizar la revisión mostrada en el HTML
  function showReview() {
    const review = reviews[currentReview];
  
    personImg.src = review.img;
    authorElement.textContent = review.name;
    jobElement.textContent = review.job;
    infoElement.textContent = review.text;
  }
  
  // mostrar la revisión inicial al cargar la página
  showReview();
  
//Selector botones
  const btns = document.querySelectorAll('.btn')

//funcion botones

btns.forEach(function(arrbtn){
    arrbtn.addEventListener('click', function(selecbtn){
        const type = selecbtn.currentTarget.classList;
        if(type.contains('prev-btn')){
            currentReview--;
            if(currentReview < 0){
                currentReview = reviews.length -1
            }
            showReview();
        }else if(type.contains('next-btn')){
            currentReview++;
            if(currentReview === reviews.length){
                currentReview = 0;
            }
            showReview
        } else{
            currentReview = Math.floor(Math.random() * reviews.length);
            showReview();
        }
    })
})


  // agregar controladores de eventos a los botones
//   const prevBtn = document.querySelector('.prev-btn');
//   const nextBtn = document.querySelector('.next-btn');
//   const randomBtn = document.querySelector('.random-btn');
  
//   prevBtn.addEventListener('click', function () {
//     currentReview--;
//     if (currentReview < 0) {
//       currentReview = reviews.length - 1;
//     }
//     showReview();
//   });
  
//   nextBtn.addEventListener('click', function () {
//     currentReview++;
//     if (currentReview === reviews.length) {
//       currentReview = 0;
//     }
//     showReview();
//   });
  
//   randomBtn.addEventListener('click', function () {
//     currentReview = Math.floor(Math.random() * reviews.length);
//     showReview();
//   });