function enviarMensagem(){ //Função para enviar a mensagem, por enquanto vai apenas jogar pra dentro de uma variável
    let mensagem = document.getElementById("mensager").value;
    console.log(mensagem);
}

// [ARMAZENAR VIRIÁVEL NO HTML ]

document.addEventListener('DOMContentLoaded', () => {
    let contador = 0; // Inicializa um contador para gerar IDs únicos para as tarefas

    // Define uma ação ao clicar no botão "Adicionar Tarefa" 
    document.getElementById('button').onclick = function() {

        // Captura o valor inserido no campo de texto
        let mensagem = document.getElementById('mensager').value;

        // Verifica se a tarefa não está vazia
        if (mensagem !== "") {
            contador++; // Incrementa o contador para o próximo ID único
            let divMensagens = document.getElementById('messages'); // Seleciona a DIV onde as tarefas serão exibidas

            // Cria um novo elemento <div> para a nova tarefa
            let novaMensagem = document.createElement('div');
            novaMensagem.innerText = mensagem; // Define o texto da nova tarefa como o valor inserido
            novaMensagem.id = 'mensagem-' + contador; // Atribui um ID exclusivo à nova tarefa
 
            // Adiciona a nova tarefa à DIV de tarefas
            divMensagens.appendChild(novaMensagem);
            // Limpa o campo de entrada após adicionar a tarefa
            document.getElementById('mensager').value = '';
        }
    };
});

// [TROCANDO COR DO SITE]

'use strict'

const mudando= document.querySelector('.botão');

mudando.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className=='light-theme') {
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
    console.log('currente class name:' + className);
});


// // [CRUD BÁSICO]
// const miniRede = {
//     usuarios:[{username: 'fabio'}] ,
//     posts: [{id: 1 , owner: 'fabio', content: 'Meu primeiro post'}]
// };
// // CREATE
// function criaPost(dados){
//     miniRede.posts.push({
//         id: miniRede.posts.length + 1,
//         owner:dados.owner,
//         content:dados.console
//     });
// }
// criaPost({owner:'fabio' , content: 'Segundo post'})
// criaPost({owner:'fabio' , content: 'Terceiro post'})
// // READ
// function pegaPosts(){
//     return miniRede.posts;
// }
// console.log(pegaPosts())
// // UPDATE
// function atualizaContentPost(id, novoConteudo){
//     const postQueVaiSerAtualizado = pegaPosts().find((post) =>{
//         return post.id === id;
//     })
//     console.log(postQueVaiSerAtualizado)
//     postQueVaiSerAtualizado.content = novoConteudo
// }
// atualizaContentPost(1,'Novo Post')
// console.log(pegaPosts())

// // DELETE
// function apagaPost(id){
//     const listaDePostAtualizada = pegaPosts().filter((postAtual) =>{
//         return postAtual.id !== id;
//     })
//     miniRede.posts = listaDePostAtualizada;
// }
// apagaPost(2);
// console.log(pegaPosts());