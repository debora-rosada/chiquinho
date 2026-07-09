/* ==========================================================
   QUERMESSE DO CHIQUINHO
   script.js
========================================================== */

/* ==========================================================
   DADOS DOS PRODUTOS
========================================================== */

const produtos = [

    {
        categoria: "alimentos",
        nome: "Pão com Linguiça",
        preco: "R$ 15,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Linguiça Toscana",
            "Linguiça Apimentada",
            "Vinagrete",
            "Maionese",
            "Ketchup",
            "Mostarda"
        ]
    },

    {
        categoria: "alimentos",
        nome: "Pastel",
        preco: "R$ 12,00",
        icone: "fa-stroopwafel",
        destaque: false,
        sabores: [
            "Carne",
            "Queijo",
            "Pizza",
            "Frango"
        ]
    },

    {
        categoria: "bebidas",
        nome: "Refrigerante",
        preco: "R$ 7,00",
        icone: "fa-glass-water",
        destaque: false,
        sabores: [
            "Coca-Cola",
            "Guaraná",
            "Fanta"
        ]
    },

    {
        categoria: "diversao",
        nome: "Show de Prêmios",
        preco: "Consulte",
        icone: "fa-ticket",
        destaque: true,
        sabores: []
    }

];


/* ==========================================================
   REFERÊNCIAS
========================================================== */

const alimentosContainer = document.getElementById("alimentos-container");
const bebidasContainer = document.getElementById("bebidas-container");
const diversaoContainer = document.getElementById("diversao-container");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchArea = document.getElementById("search-area");

const splash = document.getElementById("splash-screen");

const btnTop = document.getElementById("btn-top");
const btnLocation = document.getElementById("btn-location");


/* ==========================================================
   GERAR PRODUTOS
========================================================== */

function criarProdutos(lista){

    alimentosContainer.innerHTML = "";
    bebidasContainer.innerHTML = "";
    diversaoContainer.innerHTML = "";

    lista.forEach(produto=>{

        const card = document.createElement("div");

        card.className="product-card fade";

        let badge="";

        if(produto.destaque){

            badge=`
            <div class="badge">
                <i class="fa-solid fa-star"></i>
                Destaque
            </div>
            `;

        }

        let sabores="";

        if(produto.sabores.length){

            sabores=`

                <button class="accordion-button">

                    Ver opções

                    <i class="fa-solid fa-chevron-down"></i>

                </button>

                <div class="accordion-content">

                    <ul>

                        ${produto.sabores.map(item=>`<li>${item}</li>`).join("")}

                    </ul>

                </div>

            `;

        }

        card.innerHTML=`

            ${badge}

            <div class="product-header">

                <div class="product-info">

                    <h3 class="product-name">

                        ${produto.nome}

                    </h3>

                    <div class="product-price">

                        ${produto.preco}

                    </div>

                </div>

                <div class="product-icon">

                    <i class="fa-solid ${produto.icone}"></i>

                </div>

            </div>

            ${sabores}

        `;

        switch(produto.categoria){

            case "alimentos":

                alimentosContainer.appendChild(card);

                break;

            case "bebidas":

                bebidasContainer.appendChild(card);

                break;

            case "diversao":

                diversaoContainer.appendChild(card);

                break;

        }

    });

    iniciarAccordion();

    revelarCards();

}


/* ==========================================================
   ACORDEÃO
========================================================== */

function iniciarAccordion(){

    document.querySelectorAll(".accordion-button").forEach(botao=>{

        botao.addEventListener("click",()=>{

            botao.classList.toggle("active");

            const conteudo = botao.nextElementSibling;

            if(conteudo.style.maxHeight){

                conteudo.style.maxHeight=null;

                conteudo.classList.remove("open");

            }else{

                conteudo.style.maxHeight=conteudo.scrollHeight+"px";

                conteudo.classList.add("open");

            }

        });

    });

}


/* ==========================================================
   PESQUISA
========================================================== */

searchButton.addEventListener("click",()=>{

    searchArea.classList.toggle("active");

    searchInput.focus();

});


searchInput.addEventListener("input",()=>{

    const texto = searchInput.value.toLowerCase();

    const filtrados = produtos.filter(produto=>{

        return (

            produto.nome.toLowerCase().includes(texto)

            ||

            produto.sabores.join(" ").toLowerCase().includes(texto)

        );

    });

    criarProdutos(filtrados);

});


/* ==========================================================
   NAVEGAÇÃO
========================================================== */

document.querySelectorAll("nav button[data-target]").forEach(botao=>{

    botao.addEventListener("click",()=>{

        document
            .getElementById(botao.dataset.target)
            .scrollIntoView({

                behavior:"smooth"

            });

    });

});


/* ==========================================================
   BOTÃO TOPO
========================================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        btnTop.classList.add("show");

        btnLocation.classList.add("show");

    }else{

        btnTop.classList.remove("show");

        btnLocation.classList.remove("show");

    }

});


btnTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================================
   LOCALIZAÇÃO
========================================================== */

btnLocation.addEventListener("click",()=>{

    window.open(

        "https://maps.google.com",

        "_blank"

    );

});


/* ==========================================================
   SPLASH
========================================================== */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        splash.style.opacity="0";

        splash.style.visibility="hidden";

    },1800);

});


/* ==========================================================
   REVELAR CARDS
========================================================== */

function revelarCards(){

    const cards=document.querySelectorAll(".product-card");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    cards.forEach(card=>observer.observe(card));

}


/* ==========================================================
   INICIAR
========================================================== */

criarProdutos(produtos);