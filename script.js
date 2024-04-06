let pag1 = document.getElementById('pagina1');
let pag2 = document.getElementById('pagina2');
let livro = document.getElementById('livro')

// livro.addEventListener("load", carregarConteudo);
window.onload = carregarConteudo;


let pagAtual = 1;

function carregarConteudo() {
    
    var url = './../containerFlores/pagina' + pagAtual + '.html'

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            livro.innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}

function virarPaginaDireita() {
    pagAtual ++;
    carregarConteudo();
}
function virarPaginaEsquerda() {
    pagAtual --;
    carregarConteudo();
}


// function openPage(x, y) {
//     var indice = x
//     var target = y
//     var url = './../content/content' + indice + '.html'

//     var xml = new XMLHttpRequest()

//     xml.onreadystatechange = function () {
//         if (xml.readyState == 4 && xml.status == 200) {
//             document.getElementById(target).innerHTML = xml.responseText
//         }
//     }

//     xml.open("GET", url, true)

//     xml.send()
// }

'use strict';