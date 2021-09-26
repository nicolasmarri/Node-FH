


//setTimeout(() =>{
//    console.log('Hola Mundo')
//}, 1000); //Es una funcion que ejecuta un callback (funcion) en cierto momento del tiempo

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Nicolas'
    }

    setTimeout(() =>{
        callback(usuario)
    },1500)

}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
});