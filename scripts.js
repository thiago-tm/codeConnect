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