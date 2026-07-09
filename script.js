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
        categoria: "alimentos",
        nome: "Espetinhos",
        preco: "R$ 12,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Carne",
            "Medalhão de Frango",
            "Chocolate com morango",
        ]
    },
{
        categoria: "alimentos",
        nome: "Caldo 300ml",
        preco: "R$ 15,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Mandioca",
        ]
    },
    {
        categoria: "alimentos",
        nome: "Churros",
        preco: "R$ 12,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Chocolate",
            "Doce de Leite",
        ]
    },
    {
        categoria: "alimentos",
        nome: "Pamonha",
        preco: "R$ 12,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Doce",
            "Salgada",
        ]
    },
    {
        categoria: "alimentos",
        nome: "Pipoca Copo",
        preco: "R$ 10,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Salgada",
        ]

    },
    {
        categoria: "alimentos",
        nome: "Pipoca Saco",
        preco: "R$ 5,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Salgada",
            "Doce",
        ]
    },
    {
        categoria: "alimentos",
        nome: "Canjica",
        preco: "R$ 8,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Doce",
        ]
    },
    {
        categoria: "alimentos",
        nome: "Doce Bar/ Pudim",
        preco: "R$ 8,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Paçoca",
            "doce de abobora",
            "Pé de moleque",
            "Pudim",
        ]
    },
    {
        categoria: "alimentos",
        nome: "Bolo",
        preco: "R$ 8,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Aipin",
            "chocolate",
            
        ]
    },
    
    
    {
        categoria: "bebidas",
        nome: "Refrigerante 350ml(lata)",
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
        categoria: "bebidas",
        nome: "Cerveja Heineken 350ml(lata)",
        preco: "R$ 10,00",
        icone: "fa-glass-water",
        destaque: false,
        sabores: [
            "Sem Álcool",
            "com Álcool",
        ]
    },
    
    {
        categoria: "bebidas",
        nome: "Suco 300ml",
        preco: "R$ 10,00",
        icone: "fa-glass-water",
        destaque: false,
        sabores: [
            "Laranja",
            "Uva",
        ]
    },
    
    {
        categoria: "bebidas",
        nome: "Cerveja",
        preco: "R$ 6,00",
        icone: "fa-glass-water",
        destaque: false,
        sabores: [
            "Sckol",
            "Brama",
        ]
    },
    
    {
        categoria: "bebidas",
        nome: "Agua",
        preco: "R$ 3,00",
        icone: "fa-glass-water",
        destaque: false,
        sabores: [
            "Com Gás",
            "Sem Gás",
        ]
    },

    {
        categoria: "bebidas",
        nome: "Quentão 180ml",
        preco: "R$ 8,00",
        icone: "fa-hotdog",
        destaque: true,
        sabores: [
            "Vinho",
            "Cachaça",
            "Sem Álcool",
        ]
    },
    
    {
        categoria: "diversao",
        nome: "Show de Prêmios",
        preco: "R$ 15,00",
        icone: "fa-ticket",
        destaque: true,
        sabores: [
            "Apenas para o Domingo 12/07 às 14h"
        ]
    },
    
    {
        categoria: "diversao",
        nome: "Bingo",
        preco: "R$ 8,00",
        icone: "fa-ticket",
        destaque: true,
        sabores: [
            "Para participar do bingo, é necessário comprar cartela, poderá jogar nos dias 11/07 e 12/07"
        ]
    },
    
    {
        categoria: "diversao",
        nome: "Pescaria",
        preco: "R$ 8,00",
        icone: "fa-ticket",
        destaque: true,
        sabores: []
    },

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

        "https://www.google.com/maps/place/Par%C3%B3quia+S%C3%A3o+Francisco+de+Assis/@-23.3966075,-51.9366384,14z/data=!4m15!1m8!3m7!1s0x94ecd13d8c0a497d:0xa77d8c292798834f!2sJardim+Alvorada,+Maring%C3%A1+-+PR,+87035-510!3b1!8m2!3d-23.3967648!4d-51.9130553!16s%2Fg%2F1ymt38ksh!3m5!1s0x94ecd1167079e08b:0xc0bdc514a6b4ed5f!8m2!3d-23.3949558!4d-51.9138167!16s%2Fg%2F1ydkj3pr8?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D",

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