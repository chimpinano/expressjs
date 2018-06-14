/*
// ***1)Introduccion a EXPRESS
var express = require('express');
var app = express();

app.get('/', function(llamado, respuesta){
	console.log("Se hizo un llamado GET");
	console.log("Hola desde express");
});


app.listen(3000, function(){
	console.log("Aplicación corriendo en el puerto 3000");
});
*/

/*// ***2)LLamado GET
var express = require('express');
var app = express();

//Para crear un path ('camino') virtual - donde el camino no existe en el sistema de archivos - para archivos que van a ser servidos con express.static.
//De esta forma podemos servir archivos que se encuentren en el directorio 'public' a través del directorio '/virtual' (el nombre no tiene que ser 'virtual' puede ser cualquier nombre)
app.use('/virtual', express.static('public'));

app.get('/', function(llamado, respuesta){
	console.log("Se hizo un llamado GET");
	console.log("Hola desde Express");
});

// decirle a get q si tenemos un llamado a esta pagina(form.html) vamos a servir y leer el archivo que esta en ese directorio
app.get('/form.html', function(llamado, respuesta){
	// MADAR LA RESPUESTA CON EL ARCHIVO QUE QUEREMOS LEER
	respuesta.sendFile(__dirname + "/" + "form.html");
});
// Cuando halla un llamado a la pagina(getForm) como metodo GET vamos a ejecutar 1 function que lo unico que hace es leer la info que nos mando el formulario extrayendo el nombre ect
app.get('/getForm', function(llamado, respuesta) {
	var nombre = llamado.query.nombre;
	var apellido = llamado.query.apellido;
	respuesta.send("El nombre es: " + nombre + "<br/>" + "el apellido es: " + apellido);
});

app.listen(3000, function(){
	console.log("Aplicación corriendo en el puerto 3000");
});
*/

/*
// ***3)LLamado GET
var express = require('express');
// un paquete(que se debe instalar) que nos va a permitir leer esta informacion facilmente
var bodyParser = require('body-parser');
var app = express();

//Para crear un path ('camino') virtual - donde el camino no existe en el sistema de archivos - para archivos que van a ser servidos con express.static.
//De esta forma podemos servir archivos que se encuentren en el directorio 'public' a través del directorio '/virtual' (el nombre no tiene que ser 'virtual' puede ser cualquier nombre)
app.use('/virtual', express.static('public'));
// Hay 2 tipo de codificacion de esas variables uno es JSON, el otro es cuando se recibe la info via browser 
// urlencoded: por que se esta recibiendo la info de un formulario desde un browser.
// extended : true para cuando la info este anidada en muchos niveles
// lo que bodyParser esta haciendo es leyendo las variables que estan siendo mandadas a nuestro codigo 
// tipo Post y esta colocandolas ordenadamente en nuestro objeto "llamado"(app.post('/recibirPost', function(llamado...)
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function(llamado, respuesta){
	console.log("Se hizo un llamado GET");
	console.log("Hola desde Express");
});

// decirle a get q si tenemos un llamado a esta pagina(form.html) vamos a servir y leer el archivo que esta en ese directorio
app.get('/form.html', function(llamado, respuesta){
	// MADAR LA RESPUESTA CON EL ARCHIVO QUE QUEREMOS LEER
	respuesta.sendFile(__dirname + "/" + "form.html");
});

// Cuando halla un llamado a la pagina(recibirPost) como metodo POST vamos a ejecutar 1 function que lo unico que hace es leer la info que nos mando el formulario extrayendo el nombre ect
app.post('/recibirPost', function(llamado, respuesta) {
	// la opcion de hacer el llamado del body es gracias al bodyParser que es el que esta llenando la info
	var nombre = llamado.body.nombre;
	var apellido = llamado.body.apellido;
	respuesta.send("El nombre es: " + nombre + "<br/>" + "el apellido es: " + apellido);
});

app.listen(3000, function(){
	console.log("Aplicación corriendo en el puerto 3000");
});
*/

// ***4)EXPRESS Servir archivos
var express = require('express');
var app = express();

// nombre de la carpeta donde estan nuestros archivos estaticos
// con esta simple linea vemos que podemos correr nuestros archivos estaticos ej(http://localhost:3000/css/style.css)
//app.use(express.static('public'));
// Una opcion que tenemos al subir contenido estatico, es simplemente definir un camino virtual(es 1 folder que nunca existe)
// todo el contenido estatico va a pasar por el folder 'virtual' q no existe
// Ahora solo se puede accerder via (http://localhost:3000/virtual/css/style.css)
app.use('/virtual', express.static('public'));

app.get('/', function(llamado, respuesta){
	console.log("Se hizo un llamado GET");
	console.log("Hola desde express");
});


app.listen(3000, function(){
	console.log("Aplicación corriendo en el puerto 3000");
});
