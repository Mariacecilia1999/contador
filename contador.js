
function init(){
   
   let contador = 0

   let primerBoton=document.getElementById('-1')
   let segundoBoton=document.getElementById('+1')
   let tercerBoton=document.getElementById('-5')
   let cuartoBoton=document.getElementById('+5')
   let quintoBoton=document.getElementById('-10')
   let sextoBoton=document.getElementById('+10')

   let contenedor=document.getElementById('contenedor')
   let creandoH2=document.createElement('h2')

   contenedor.appendChild(creandoH2)

   creandoH2.style.color='blue'
   contenedor.style.backgroundColor='yellow'
   contenedor.style.width='500px'
   contenedor.style.height='500px'
   


   primerBoton.onclick= function(e){
      contador--
      console.log(contador)
      creandoH2.innerHTML=contador
   }

   segundoBoton.onclick=function(e){
      contador++
      console.log(contador)
      creandoH2.innerHTML=contador
   }

   tercerBoton.onclick=function(e){
      contador=contador-5
      console.log(contador)
      creandoH2.innerHTML=contador
   }
   
   cuartoBoton.onclick=function(e){
      contador=contador+5
      console.log(contador)
      creandoH2.innerHTML=contador
   }

   quintoBoton.onclick=function(e){
      contador=contador-10
      console.log(contador)
      creandoH2.innerHTML=contador
   }

   sextoBoton.onclick=function(e){
      contador=contador+10
      console.log(contador)
      creandoH2.innerHTML=contador
   }


}