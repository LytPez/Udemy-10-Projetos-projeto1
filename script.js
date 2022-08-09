const botao=document.getElementById('button')
let dark_theme= true

function change_background(){
  if(dark_theme==false){
    dark_theme=true
    document.body.style.background='white'
    botao.style.background='black'
    botao.style.color='white'
  } else{
    dark_theme=false
    document.body.style.background='black'
    botao.style.background='white'
    botao.style.color='black'
  }
}

