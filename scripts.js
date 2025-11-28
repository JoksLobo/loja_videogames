let products = [
  {
    id: 1,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 2,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 3,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 4,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 5,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 6,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 7,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
  {
    id: 8,
    title: "Nintendo Switch 2",
    price: 3000,
    installments: "10x de R$300,00",
    discount: "R$2.800,00 à vista",
    image:
      "https://universonintendo.com/wp-content/uploads/2025/04/Nintendo-Switch-2-Mario-Kart-World-Boxart-BRA.png",
  },
];

let classics = [
  {
    id: 1,
    title: "Master System - usado",
    price: 800,
    installments: "10x de R$80,00",
    discount: "R$700,00 à vista",
    image:
      "https://beanstalk.io/wp-content/uploads/2023/01/sega-master-system-emulators.jpg",
  },
  {
    id: 2,
    title: "Nintendo Gameboy - usado",
    price: 800,
    installments: "10x de R$80,00",
    discount: "R$700,00 à vista",
    image:
      "https://th.bing.com/th/id/R.874f1b6a8509269cfbeaf41500bea597?rik=AQSVmfiTN0nmSQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    title: "Gameboy Advance SP",
    price: 800,
    installments: "10x de R$80,00",
    discount: "R$700,00 à vista",
    image:
      "https://cdn.awsli.com.br/2500x2500/17/17021/produto/39048667/gba-sp-aquln0etq9.jpg",
  },
  {
    id: 4,
    title: "Mega Drive",
    price: 800,
    installments: "10x de R$80,00",
    discount: "R$700,00 à vista",
    image: "https://m.media-amazon.com/images/I/71jz2UF7LsS._AC_SL1000_.jpg",
  },
];

//formata o preço
function formatPrice(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// cria os cards

function creatCardProduct(product) {
  return `<div class="product-card">
            <img src="${product.image}" alt="${product.title}" />
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-installment">${product.installments}</div>
            <div class="product-discount">${product.discount}</div>
          </div>`;
}

//renderiza os cards
function renderLancamentos(products) {
  const grid = document.getElementById("lancamentosGrid");

  grid.innerHTML = products.map(creatCardProduct).join("");
}
function renderClassics(classics) {
  const grid = document.getElementById("classicsGrid");

  grid.innerHTML = classics.map(creatCardProduct).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderLancamentos(products);
  renderClassics(classics);
});
