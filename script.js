//vamos criar um carrossel de opiniões 
// primeiro criamos uma matriz de objetos e cada objeto representa uma pessoa.
// então adicionamos a ele um id e outras propriedades necessarias
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat arcu ac magna fringilla, eu molestie nunc fringilla. Aliquam interdum blandit vestibulum.",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac odio nunc. Aenean egestas lacus id est commodo facilisis. Sed urna dui, congue ac tristique ut, consectetur vel tortor.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Pellentesque rhoncus ac est in rutrum. Quisque eget dictum elit. Morbi nec nisl semper, condimentum libero sit amet, lobortis tellus. Phasellus malesuada dapibus risus, nec sollicitudin ipsum posuere blandit.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Fusce tincidunt risus quis facilisis pellentesque. Nulla interdum metus vitae facilisis iaculis. Nullam urna felis, sodales non dapibus a, tincidunt at leo."
    },
    {
        id: 5,
        name: "Victor Sousa",
        job: "softwere developer",
        img:
          "https://avatars.githubusercontent.com/u/85964942?v=4",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat arcu ac magna fringilla, eu molestie nunc fringilla. Aliquam interdum blandit vestibulum."
      },
  ];

//agora vamos selecionar os itens do bloco de opiniões
//informações da pessoa
const img = document.querySelector('#person-img')
const author = document.querySelector('#author')
const cargo = document.querySelector('#job')
const info = document.querySelector('#info')

//selecionando botões
const btnAnterior = document.querySelector('.prev-btn')
const btnProximo = document.querySelector('.next-btn')
const btnAleatorio = document.querySelector('.random-btn')

//Agora vou adicionar um variavel com um valor inicial 0 que será o indice do meu item atual
let itemAtual = 4

//vou adicionar um evento à minha window, para que quando a página carregar ja selecionar 
//o meu item atual
window.addEventListener('DOMContentLoaded', () => {
   mostrarPessoa(itemAtual)
})

//mostrar proxima pessoa
btnProximo.addEventListener('click', () => {
    itemAtual++
    if(itemAtual > reviews.length - 1){
        itemAtual = 0
    }
    mostrarPessoa(itemAtual)
})

//mostrar pessoa anterior
btnAnterior.addEventListener('click', () => {
    itemAtual--
    if(itemAtual < 0){
        itemAtual = reviews.length - 1
    }
    mostrarPessoa(itemAtual)
})

//mostrar pessoa aleatória
btnAleatorio.addEventListener('click', () => {
    itemAtual = Math.floor(Math.random() * reviews.length)
    mostrarPessoa(itemAtual)
})





//função onde irá mostrar a pessoa de acordo com itemAtual
//pessoa atual
function mostrarPessoa(pessoa){
    const item = reviews[pessoa] 
    //agora irei definir os valores das propriedades do objeto.
    //const img na propriedade src irá receber um novo endereço de imagem de
    //acordo com o itemAtual do array reviews
    img.src = item.img
    //agora vamos mudar o nome
    author.textContent = item.name
    //o cargo
    cargo.textContent = item.job
    //opnião
    info.textContent = item.text
}


