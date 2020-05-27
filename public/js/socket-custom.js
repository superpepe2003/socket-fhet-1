var socket = io();

// Escuchar on
socket.on('connect', function (){

    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){

    console.log('Desconectado del servidor');

});

// emit Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pablo Martin',
    mensaje: 'Hola Mundo'
}, function( resp ) {
    console.log(resp);
});

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})