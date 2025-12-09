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
    title: "Jogo Clair Obscure - Expedition 33 - PS5",
    price: 432.56,
    installments: "5x de R$86,51",
    discount: "R$405,00 à vista",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_622373-MLA95701668352_102025-F.webp",
  },
  {
    id: 3,
    title: "Controle 8BitDo Bluetooth",
    price: 377.9,
    installments: "3x de R$125,66",
    discount: "R$350,00 à vista",
    image:
      "https://img.terabyteshop.com.br/produto/g/controle-gamer-8bitdo-ultimate-24g-wireless-bluetooth-windows-android-apple-steamos-hall-effect-roxo-81ha09_205588.jpg",
  },
  {
    id: 4,
    title: "PlayStation 5 - Edição Especial Spider-man 2",
    price: 4149,
    installments: "12x de R$345,88",
    discount: "R$4.049,00 à vista",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.a1rgCFBfeGZ5PDQRbaKr0QHaHZ?w=550&h=549&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    title: "Jogo EA Sport FC 26 - PS5",
    price: 278.9,
    installments: "4x de R$70,00",
    discount: "R$258,00 à vista",
    image:
      "https://images7.kabum.com.br/produtos/fotos/916677/jogo-ea-sports-fc-26-ps5-ea000011ps5_1756844581_gg.jpg",
  },
  {
    id: 6,
    title: "Xbox Series S - Pack com controle adicional",
    price: 2781,
    installments: "12x de R$251,35",
    discount: "R$2.586,00 à vista",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_622820-MLA96118095915_102025-F.webp",
  },
  {
    id: 7,
    title: "Gift Card Nintendo",
    price: 100,
    installments: "2x de R$5,00",
    discount: "R$92,00 à vista",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_933986-MLA85349303924_062025-F.webp",
  },
  {
    id: 8,
    title: "Joy Con Nintendo Switch  Roxo e Laranja",
    price: 549,
    installments: "5x de R$109,80",
    discount: "R$510,57 à vista",
    image: "https://m.media-amazon.com/images/I/6197HqTcMiL._AC_SL1500_.jpg",
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
    price: 399,
    installments: "10x de R$39,00",
    discount: "R$371,00 à vista",
    image:
      "https://th.bing.com/th/id/R.874f1b6a8509269cfbeaf41500bea597?rik=AQSVmfiTN0nmSQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    title: "Gameboy Advance SP",
    price: 1000,
    installments: "10x de R$100,00",
    discount: "R$930,00 à vista",
    image:
      "https://cdn.awsli.com.br/2500x2500/17/17021/produto/39048667/gba-sp-aquln0etq9.jpg",
  },
  {
    id: 4,
    title: "Mega Drive",
    price: 1234,
    installments: "1x de R$102,83",
    discount: "R$1.147,62 à vista",
    image: "https://m.media-amazon.com/images/I/71jz2UF7LsS._AC_SL1000_.jpg",
  },
];

//formata o preço
function formatPrice(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// cria os cards

function creatCardProduct(product) {
  return `
  <a class="product-link" href="./produto.html">
  <div class="product-card">
            <img src="${product.image}" alt="${product.title}" />
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-installment">${product.installments}</div>
            <div class="product-discount">${product.discount}</div>
          </div>
          </a>
          `;
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

const installmentBtn = document.querySelector(".installment-btn");
const installmentsList = document.querySelector(".installments-list");

installmentBtn.addEventListener("click", () => {
  installmentsList.classList.toggle("active");
});
