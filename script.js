/* Já no código Javascript, foi criado duas funções.
    1- Para trocar a imagem ao clicar no button criado via HTML com o atributo onclick="trocarImagem"
    2- Para pegar o nome do animal adicionado em memória via HTML, para ser mostrado via alert(), assim que clicado no button
    */


function trocarImagem(filename, nameanimal){ //Função criada com o nome trocarImagem e com os params filename e nameanimal
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename); //Selecionando a imagem via querySelector
    document.querySelector('.imagem').setAttribute('data-ani', nameanimal); // Selecionando o nome do animal via querySelector
}

function pegarAnimal() { // Segunda função criada afim de mostrar o nome do animal via alert()
    let animal = document.querySelector('.imagem').getAttribute('data-ani'); // Aqui foi adicionada uma variável (let) animal para ser selecionado via alert e mostrado na tela.
    alert('O animal é um: '+animal); // função alert concatenada com uma string e o nome do animal
}