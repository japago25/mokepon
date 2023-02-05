function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipeo')
    let inputratigueya = document.getElementById('ratigueya')
    
    if(inputHipodoge.checked){
        alert('SELECCIONASTE TU hipodoge')
    }

    else if(inputCapipepo.checked){
        alert('SELECCIONASTE TU capipepo')
    }

    else if(inputratigueya.checked){
        alert('SELECCIONASTE TU ratigueya')
    }
    
    else{
        alert('No seleccionaste nada')
    }
  
}

window.addEventListener('load', iniciarJuego)