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