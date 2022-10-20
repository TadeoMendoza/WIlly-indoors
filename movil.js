var luces= document.getElementById("luces");
var ventilador= document.getElementById("ventilador");

luces.addEventListener('click', function(){
    luces.classList.toggle("active")

    if(luces.classList.contains("active")){
        document.getElementById("encender").innerHTML= 'Apagar luces';
    }else{
        document.getElementById("encender").innerHTML= 'Encender luces';
    }
    


if(luces.classList.contains('active')){
        localStorage.setItem('luces', 'true');
    } else{
        localStorage.setItem('luces', 'false');
}
    
})
//comprobacion

if(localStorage.getItem('luces') === 'true'){
    luces.classList.add('active');
    document.getElementById("encender").innerHTML= 'Apagar luces';
   
}
else{
luces.classList.remove('active');
document.getElementById("encender").innerHTML= 'encender luces';

}

ventilador.addEventListener('click', function(){
    ventilador.classList.toggle("encendido")
    
    if(ventilador.classList.contains("encendido")){
        document.getElementById("encenderventi").innerHTML= 'Apagar ventilador';
        iconoventi.classList.toggle("ventilador")
    }else{
        document.getElementById("encenderventi").innerHTML= 'Encender ventilador';
        iconoventi.classList.remove('ventilador');

    }
    


if(ventilador.classList.contains('encendido')){
        localStorage.setItem('ventilador', 'true');
    } else{
        localStorage.setItem('ventilador', 'false');
}
    
})
//comprobacion

if(localStorage.getItem('ventilador') === 'true'){
    ventilador.classList.add('encendido');
    iconoventi.classList.toggle("ventilador")
    document.getElementById("encenderventi").innerHTML= 'Apagar ventilador';
   
}
else{
ventilador.classList.remove('encendido');
iconoventi.classList.remove('ventilador');
document.getElementById("encenderventi").innerHTML= 'encender ventilador';

}
