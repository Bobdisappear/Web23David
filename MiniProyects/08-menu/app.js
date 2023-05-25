const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//Seleccion de lugar.document
const sectionCenter = document.querySelector('.section-center')
const titleName = document.querySelector('.title')
const text = document.querySelector('.item-text')
const price = document.querySelector('.price')
const photo = document.querySelector('.photo')

//menus por secciones

const breakfast = menu.filter(b =>(b.category == 'breakfast'))
const lunch = menu.filter(l =>(l.category == 'lunch'))
const shakes = menu.filter(s =>(s.category == 'shakes'))


//seleccion de botones
const btns = document.querySelectorAll('.filter-btn')

//funcion de botones
btns.forEach(function(sectionBtn){
  
  sectionBtn.addEventListener('click', function(selectbtn){
    const type = selectbtn.currentTarget.getatribute('data-id');
    if(type.contains('breakfast')){
      
      filterByCategory('breakfast')
    }else if(type.contains('lunch')){

      filterByCategory('lunch')
    }else if(type.contains('shake')){

      filterByCategory('shake')
    }else{
      
    }
    
    })
})


//funcions para reutilizar y elegir array en vez de seleccionar cada una
function filterByCategory (categoryname){
const filteredMenu = menu.filter(b =>(b.category == categoryname))
return filteredMenu

}
console.log(filterByCategory('breakfast'));


console.log(breakfast);
console.log(shakes);
console.log(lunch);




// // funcion por atributos de menu
// let currentMenu = 0;

// function showEats(){
//   const eats = menu[currentMenu];

//   titleName.textContent = eats.title;
//   text.textContent = eats.desc;
//   price.textContent = eats.price;
//   photo.src = eats.img

// }