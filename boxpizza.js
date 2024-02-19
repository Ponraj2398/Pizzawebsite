AOS.init({
    duration: 1000, // Animation duration in milliseconds
    offset: 500,   // Offset (in pixels) from the top of the page
});
// Number counter Animation
const counter = document.querySelector(".count");
const target = parseInt(counter.getAttribute("data-target"));
const increment = Math.ceil(target / 100); // Adjust the speed of the animation by changing the denominator

let count = 0;

const updateCount = () => {
    count += increment;
    if (count < target) {
        counter.textContent = count;
        setTimeout(updateCount, 20); // Adjust the timing of the animation
    } else {
        counter.textContent = target;
    }
};

updateCount();
const counter1 = document.querySelector(".count1");
const target1 = parseInt(counter1.getAttribute("data-target"));
const increment1 = Math.ceil(target1 / 100); // Adjust the speed of the animation by changing the denominator

let count1 = 0;

const updateCount1 = () => {
    count1 += increment1;
    if (count1 < target1) {
        counter1.textContent = count1;
        setTimeout(updateCount1, 20); // Adjust the timing of the animation
    } else {
        counter1.textContent = target1;
    }
};

updateCount1();
const counter2 = document.querySelector(".count2");
const target2 = parseInt(counter2.getAttribute("data-target"));
const increment2 = Math.ceil(target2 / 100); // Adjust the speed of the animation by changing the denominator

let count2 = 0;

const updateCount2 = () => {
    count2 += increment2;
    if (count2 < target2) {
        counter2.textContent = count2;
        setTimeout(updateCount2, 20); // Adjust the timing of the animation
    } else {
        counter2.textContent = target2;
    }
};

updateCount2();
const counter3 = document.querySelector(".count3");
const target3 = parseInt(counter3.getAttribute("data-target"));
const increment3 = Math.ceil(target3 / 100); // Adjust the speed of the animation by changing the denominator

let count3 = 0;

const updateCount3 = () => {
    count3 += increment3;
    if (count3 < target3) {
        counter3.textContent = count3;
        setTimeout(updateCount3, 20); // Adjust the timing of the animation
    } else {
        counter3.textContent = target3;
    }
};

updateCount3();

// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
    {
        id: 1,
        title: "Margherita pizza",
        category: "breakfast",
        price: 180,
        img: "menu-1.png",
        // desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan `,
    },
    {
        id: 2,
        title: "Rum With Soda",
        category: "shakes",
        price: 80,
        img: "menu-3.png",
        // desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 100,
        img: "milkychock.png",
        // desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Veg Pizza",
        category: "lunch",
        price: 120,
        img: "pizza-png-15.png",
        // desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Chilly Pizza",
        category: "lunch",
        price: 200,
        img: "menu-6.png",
        // desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Oreo dream cake",
        category: "breakfast",
        price: 500,
        img: "oreo.png",
        // desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Bacon overflow",
        category: "dinner",
        price: 250,
        img: "menu-8.png",
        // desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "American classic Salad",
        category: "lunch",
        price: 300,
        img: "menu-5.png",
        // desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Cookies",
        category: "breakfast",
        price: 100,
        img: "menu-2.png",
        // desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Veg Pasta",
        category: "dinner",
        price: 240,
        img: "vegpasta.png",
        // desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "Chicken Rice",
        category: "dinner",
        price: 220,
        img: "chrice.png",
        // desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 12,
        title: "Kitkat Shake",
        category: "shakes",
        price: 120,
        img: "kitkat.png",
        // desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<div class="col-sm-6 col-md-4 col-lg-3 col-12 text-center menu-box">
        <article class="menu-item">
  <img src=${item.img} class="img-fluid menu-image" alt=${item.title} />
  <div class="item-info">
    <header class="d-flex flex-column mt-5 justify-content-center align-items-center">
      <h4>${item.title}</h4>
      <h4 class="price">Rs.${item.price}</h4>
    </header>
  </div>
</article>
</div>`;
        // <p class="item-text">
        //       ${item.desc}
        //     </p>
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button class="filter-btn" type="button" data-id=${category}>
${category}
</button>`;
        })
        .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}