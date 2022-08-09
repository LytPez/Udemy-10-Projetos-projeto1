/*
adicionando evento click para o botao e defindo uma variavel com valor boleano para auxiliar na função
*/

const botao=document.getElementById('button')

let dark_theme= true


/*
função que ao clicar no botao altera a cor de fundo da pagina
*/
function change_background(){
  if(dark_theme==false){//variavel ajudando na função, caso seja "false" altera a cor de fundo da pagina e altera o valor da variavel para "true"
    dark_theme=true
    document.body.style.background='white'
    botao.style.background='black'
    botao.style.color='white'
  } else{
    dark_theme=false// altera a cor de fundo da pagina, como trocamos para true agora alteramos para false para poder trocar novamente 
    document.body.style.background='black'
    botao.style.background='white'
    botao.style.color='black'
  }
}

