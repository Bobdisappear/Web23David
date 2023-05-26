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

//menus por secciones

// const breakfast = menu.filter(b =>(b.category == 'breakfast'))
// const lunch = menu.filter(l =>(l.category == 'lunch'))
// const shakes = menu.filter(s =>(s.category == 'shakes'))

// //seleccion de botones
// //funcion de botones
// window.addEventListener('DOMContentLoaded',(event) =>{
//   displayItemsMenu(menu);
  
//   const btns = document.querySelectorAll('.filter-btn')
// btns.forEach(function(sectionBtn){
//   sectionBtn.addEventListener('click', function(selectbtn){
//     const type = selectbtn.currentTarget.getatribute.dataset.id;
//     if(type.contains('breakfast')){
      
//       displayItemsMenu(breakfast)
//     }else if(type.contains('lunch')){

//       displayItemsMenu(lunch)
//     }else if(type.contains('shake')){

//       displayItemsMenu(shakes)
//     }else{
//       displayItemsMenu(menu)
//     }
    
//     })
// })
// })
//Traerse el div contenedor 




//Traerse el div donde vamos a insertar la lista de menu
const sectionCenter = document.querySelector(".section-center");
// const filterBtns = document.querySelectorAll(".filter-btn");


const filterBtns = document.querySelectorAll(".btn.container");



//Añadir el evento para cada boton
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    //Queremos filtrar el menu por su categoria
    const menuCategory = menu.filter((item) => {
      return item.category === category;
    });
    console.log(menuCategory);
    //Refrescar la página con el array filtrado
    //Si category es all imprimo el menu entero
    //sino imprimo el menu filtrado
    if (category === "all") {
      displayItemsMenu(menu);
    } else {
      displayItemsMenu(menuCategory);
    }
    console.log(e.currentTarget.dataset.id);
  });
});
//Al terminar de cargaser el DOM insertamos todos los items de menu
window.addEventListener("DOMContentLoaded", () => {
  displayItemsMenu(menu);
});



// Al terminar de cargarse el DOM insertamos todos los items

//Recorre el array menu y genera el codigo html en funcion de la plantilla que nos han pasado con los datos correspondientes
function displayItemsMenu(menuItems){
  let displayMenu = menuItems.map((item)=>{
    return `
    <article class="menu-item">
            <img src="${item.img}" alt="menu item" class="photo" />
              <div class="item-info">
              <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                  </header>
                  <p class="item-text">
                ${item.desc}
              </p>
            </div>
            </article>`
          })
displayMenu = displayMenu.join("")
sectionCenter.innerHTML = displayMenu
}

//Dibujar botones
function  displayMenuButtons(){
  //crear una array con categorias unicas
  const categorias = menu.reduce((values,item)=>{
    if(!values.includes(item.category)){
      values.push()
    }
    return values;
  },['all'])
  console.log(displayMenuButtons());

}
// const sectionCenter = document.querySelector(".section-center");

// window.addEventListener("DOMContentLoaded", function () {
//   let displayMenu = menu.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// });











/* <div class="section-center">
<!-- single item -->
<article class="menu-item">
<img src="./menu-item.jpeg" alt="menu item" class="photo" />
<div class="item-info">
<header>
<h4>buttermilk pancakes</h4>
<h4 class="price">$15</h4>
</header>
<p class="item-text">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
laboriosam excepturi! Quo, officia.
</p>
</div>
</article> */



// //anticopy
// window.addEventListener('copy',(e)=>{
//   e.clipboardData.setData('text/plain', 'dir\r')
//   e.preventDefault()
// })












