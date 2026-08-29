'use strict'

const botaoPesquisar = document.getElementById('pesquisar')

async function buscarFotosDogApi(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)
    const data = await response.json()
    return data.message

}
function criarFoto(url){
    const galeria = document.getElementById('galeria')
    const foto = document.createElement('img')
    foto.src = url
    foto.onclick = ()=> alert(url)

    galeria.append(foto)

}

async function preencherGaleria() {
    const galeria = document.getElementById('galeria')
    const raca = document.getElementById('raca')

    const fotosCachorros = await buscarFotosDogApi(raca.value)
    galeria.replaceChildren()
    
    fotosCachorros.forEach(criarFoto)

    console.log(fotosCachorros)
}

botaoPesquisar.addEventListener('click', preencherGaleria)