const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if( mensaje.usuario ) {
        //     callback({
        //         respuesta: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio Mal'
        //     });
        // }

    });

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido al Server'
    })

});