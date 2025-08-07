const uploadBtn = document.getElementById("upload__btn");
const inputUpload = document.getElementById("imagem__upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
});

function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name})
        }

        leitor.onerror = () => {
            reject(`Erro na leittura do arquivo ${arquivo.name}`)
        }
        
        leitor.readAsDataURL(arquivo);
    })
}

const imagemPrincipal = document.querySelector(".main__imagem");
const nomeDaImagem = document.querySelector(".container__imagem__nome p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];
     if (arquivo){
        try{
            const ConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = ConteudoDoArquivo.url;
            nomeDaImagem.textContent = ConteudoDoArquivo.nome;
        } catch (erro){
            console.error("Erro na leitura do arquivo")
        }
     }
})

const inputTags = document.getElementById("input__tag");
const listaTags = document.getElementById("lista__tags");

inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== ""){
            const tagNova = document.createElement("li");
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove__tag">`;
            listaTags.appendChild(tagNova);
            inputTags.value = "";

        }
    }
});

listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove__tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})
