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
    {
      id: 9,
      title: "quarantine buddy",
      category: "NewCategory",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  //Traerse el div donde vamos a insertar la lista de menu
  const sectionCenter = document.querySelector(".section-center");
  const btnsContainer = document.querySelector(".btn-container");
  
  //Al terminar de cargaser el DOM insertamos todos los items de menu
  window.addEventListener("DOMContentLoaded", () => {
    displayItemsMenu(menu);
    displayMenuButtons();
  });
  
  //Funcion que dibujara los botones. Uno para cada categoria existente
  //en el array menu
  function displayMenuButtons() {
    //Crear un array con las categorias (unicas)
    const categorias = menu.reduce(
      (values, item) => {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values; //No olvidarse el return
      },
      ["all"]
    );
    console.log(categorias);
  
    //Generar los botonoes
    const categoryButtons = categorias
      .map((category) => {
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    console.log(categoryButtons);
  
    //Insertamos los botones en el div correspondiente
    btnsContainer.innerHTML = categoryButtons;
    //Seleccionamos los botones
    const filterBtns = document.querySelectorAll(".filter-btn");
    console.log(filterBtns);
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
  }
  
  //Funcion que recorre el array menu y genera el codigo HTML
  //en funcion de la plantilla que nos han pasado con los datos
  //con los datos correspondientes de cada elemento del menu
  // function displayItemsMenu(menuItems) {
  //   let displayMenu = menuItems.map((item) => {
  //     return `<article class="menu-item">
  //                   <img src=${item.img} alt=${item.title} class="photo" />
  //                   <div class="item-info">
  //                   <header>
  //                     <h4>${item.title}</h4>
  //                     <h4 class="price">${item.price}</h4>
  //                   </header>
  //                   <p class="item-text">
  //                       ${item.desc}
  //                   </p>
  //                   </div>
  //                 </article>`;
  //   });
  //   displayMenu = displayMenu.join("<hr>");
  //   //console.log(displayMenu);
  //   sectionCenter.innerHTML = displayMenu;
  // }


    function displayItemsMenu(menuItems) {
      menuItems.forEach(menuItems => {

        const newArticle = newItemsMenu(menuItems);
        sectionCenter.appendChild(newArticle);
      })
 
  
  }
  
  function newItemsMenu(menuItems){
    
    
       const article = document.createElement('article');
      article.className = 'menu-item'

      const img = document.createElement('img');
      img.className ='item-info'
      img.src = menuItems.img
      img.alt = menuItems.title 

      const div = document.createElement('div')
      div.className ='item-info'

      const header = document.createElement('header')

      const hHead = document.createElement('h4')
      hHead.innerHTML = menuItems.title

      const hBody = document.createElement('h4')
      hBody.className = 'price'
      hBody.innerHTML = menuItems.price

      const p = document.createElement('p')
      p.className ='item-text'
      p.innerHTML = menuItems.desc

      header.appendChild(hHead)
      header.appendChild(hBody)
      
      div.appendChild(header)
      div.appendChild(p)
      
      article.appendChild(img)
      article.appendChild(div)
      return article;
    }
    
    
    
// Funcion de botones filtros en vez de añadir elementos

    // displayMenu = displayMenu.join("<hr>");

  