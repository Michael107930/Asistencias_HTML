class EstudiantesController{
    construct(){
    }
    consultar(req,res){
        try{
            let arreglo=[];
            let myObj = {dni: "1234", nombre: "Juan", apellidos: "Perez", email:"ejemplo@nose.com"};
            let myObj2 = {dni: "2", nombre: "J2uan", apellidos: "222Perez", email:"222ejemplo@nose.com"};

            arreglo.push (myObj);
            arreglo.push (myObj2);

            let myJSON = JSON.stringify(arreglo);

            res.status(200).send (myJSON);
        }catch (err){
            res.status(500).send(err.message);
        }
    }
    ingresar(req,res){
        try{
            const {dni,nombre,apellidos,email} = req.body;
            console.log ("Documento de identidad:... " + dni);
            console.log ("Nombres con apellidos:" + nombre + " " + apellidos);
            console.log ("email: "+ email);
            res.status(200).send ("Funciono ok");
        }catch (err){
            res.status(500).send(err.message);
        }
    }
    consultarDetalle(req, res) {
        try {
            const estudianteId = req.params.id;
            res.status(200).send(`Obteniendo detalles del estudiante con ID: ${estudianteId}`);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        try {
            const estudianteId = req.params.id;
            const datosActualizados = req.body;
            res.status(200).send(`Actualizando estudiante con ID: ${estudianteId}, Datos: ${JSON.stringify(datosActualizados)}`);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    borrar(req, res) {
        try {
            const estudianteId = req.params.id;
            res.status(200).send(`Eliminando estudiante con ID: ${estudianteId}`);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}
module.exports = new EstudiantesController();