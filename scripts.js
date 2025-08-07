const uploadBtn = document.getElementById("upload__btn");
const inputUpload = document.getElementById("imagem__upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name })
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
    if (arquivo) {
        try {
            const ConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = ConteudoDoArquivo.url;
            nomeDaImagem.textContent = ConteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo")
        }
    }
})

const inputTags = document.getElementById("input__tag");
const listaTags = document.getElementById("lista__tags");


listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove__tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})

const tagsDisponiveis = ["Front-end", "Programação", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular", "Sass", "Bootstrap", "Tailwind CSS"];

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000);
    })
}

inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                if(tagExiste){

                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove__tag">`;
                    listaTags.appendChild(tagNova);
                    inputTags.value = "";
                }else{
                    alert("Tag não foi encontrada.");
                }

            } catch (error) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existência da tag. Verifique o console.");
            }
        }
    }
});

const botaoPublicar = document.querySelector("botao__publicar");

botaoPublicar.addEventListener("click", async (evento) =>{
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjetos = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

})

async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjetos){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if(deuCerto){
                resolve("Projeto publicado com sucesso.");
            }else {
                reject("Erro de publicação do projeto");
            }
        }, 2000)
    })

}

