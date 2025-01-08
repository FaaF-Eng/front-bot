function enviarMensagem(){ //Função para enviar a mensagem, por enquanto vai apenas jogar pra dentro de uma variável
    let mensagem = document.getElementById("mensager").value;
    console.log(mensagem);
}

// [CRUD]
const miniRede = {
    usuarios:[{username: 'fabio'}] ,
    posts: [{id: 1 , owner: 'fabio', content: 'Meu primeiro post'}]
};
// CREATE
function criaPost(dados){
    miniRede.posts.push({
        id: miniRede.posts.length + 1,
        owner:dados.owner,
        content:dados.console
    });
}
criaPost({owner:'fabio' , content: 'Segundo post'})
criaPost({owner:'fabio' , content: 'Terceiro post'})
// READ
function pegaPosts(){
    return miniRede.posts;
}
console.log(pegaPosts())
// UPDATE
function atualizaContentPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPosts().find((post) =>{
        return post.id === id;
    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentPost(1,'Novo Post')
console.log(pegaPosts())

// DELETE
function apagaPost(id){
    const listaDePostAtualizada = pegaPosts().filter((postAtual) =>{
        return postAtual.id !== id;
    })
    miniRede.posts = listaDePostAtualizada;
}
apagaPost(2);
console.log(pegaPosts());