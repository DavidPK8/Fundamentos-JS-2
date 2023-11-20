/*3 FORMAS DE EJECUTAR CODIGO ASINCRONO

1. cALLBACKS - ECMAJS
2. PROMESAS
3. ASYNC - AWAIT

Con el atajo nfn se crea una funcion flecha*/

const conexionBDD = (datosConexion) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            datosConexion ? resolve("Conexion OK") : reject("Conexion Error")
        })
    })
}

const conexionBDDos = async() => {
    try{
        const resultado = await conexionBDD(true)
        console.log(resultado)
    }catch(error){
        console.log(error)
    }
}

conexionBDDos()

/*conexionBDD(false)
    // Para trabajar con promesas se usa .then y .catch
    .then((respuesta) => {console.log(respuesta)}) // La respuesta es la promesa

    .catch((error) => {console.error(error)})*/

/*fetch()
    .then(first = (second) => { third })

    .catch(first = (second) => { third })*/

/*const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users") // Fetch devuelve una promesa

obtenerDatos
    .then(peticion => peticion.json())

    .then(respuesta => console.log(respuesta))

    .catch(error => console.log(error))*/


/*
Mecanismos para trabajar con APIs

1. XMLHTTP Request
2. Fetch
3. Axios
4. React Query
*/

/*const conectarAPI = async() => {
    try {

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await respuesta.json()
        console.log(data)

    }catch(error){
        console.log(error)
    }
}

conectarAPI()*/