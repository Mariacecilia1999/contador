
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
   creandoH2.style.fontSize='2.5rem'

  

   let capturandoCajaGrande=document.querySelector('.cajaGrande')
   capturandoCajaGrande.appendChild(creandoH2)

   creandoH2.style.color='blue'
   contenedor.style.backgroundColor='yellow'
   contenedor.style.width='300px'
   contenedor.style.height='200px'
   


   primerBoton.onclick= function(e){
      contador--
      console.log(contador)
      creandoH2.innerHTML=`El contador esta en: ${contador}`
   }

   segundoBoton.onclick=function(e){
      contador++
      console.log(contador)
      creandoH2.innerHTML=`El contador esta en: ${contador}`
   }

   tercerBoton.onclick=function(e){
      contador=contador-5
      console.log(contador)
      creandoH2.innerHTML=`El contador esta en: ${contador}`
   }
   
   cuartoBoton.onclick=function(e){
      contador=contador+5
      console.log(contador)
      creandoH2.innerHTML=`El contador esta en: ${contador}`
   }

   quintoBoton.onclick=function(e){
      contador=contador-10
      console.log(contador)
      creandoH2.innerHTML=`El contador esta en: ${contador}`
   }

   sextoBoton.onclick=function(e){
      contador=contador+10
      console.log(contador)
      creandoH2.innerHTML=`El contador esta en: ${contador}`
   }


}