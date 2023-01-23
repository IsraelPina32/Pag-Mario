/* 
    1-Quando o usuario cliclar no botão ver o trailer, deve ser abrir a modal para ver o trailer
    
    2-Quando aperta no X fechar o usuario.
*/

console.log("mostrar o document", document);

// passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js


const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const LinkDovideo = video.src;

console.log(document.querySelector(".botao-trailer"));  


// passo 2 = dar um jeito de identificar quando o usuario cliclar no botao


// passo 3 - dar um jeito de pegar um elemento da modal no js


function AlternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    // passo 4 = abrir a modal na tela
    AlternarModal();
    video.setAttribute("src", LinkDovideo);
});

//OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
const botaoFecharModal = document.querySelector(".fechar-modal")

// passo 1 - dar um jeito de pegar o elemento de fechar o modal usando o js


//passo 2 - dar um jeito de o usuario indentificar qunado o usuario clicar no X

botaoFecharModal.addEventListener("click", () =>{
    ///passo 3 - fechar a modal
    AlternarModal();
    video.setAttribute("src", "")
});














