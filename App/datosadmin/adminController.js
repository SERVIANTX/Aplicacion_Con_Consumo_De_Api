
 let datos = JSON.parse(localStorage.getItem("Admin"));


$('#Parte1').append("<span class=\"name\">Hola "+datos.name +" " + datos.apellidos +"!</span> <img src="+datos.imagen+" class=\"rounded-circle\" alt=\"image\">");

$('#Parte2').append("<img src="+datos.imagen+" class=\"rounded-circle\" alt=\"image\">");

$('#Parte3').append("<span class=\"name\"> "+datos.name +" " + datos.apellidos +"</span> <p class=\"mb-3 email\">" + datos.email +"</p>");

$('#Parte4').append("<h1 class=\"mb-2\">Hola, "+ datos.name +" bienvenido!</h1> <p class=\"mb-0\">Solo haz algo mejor</p>");

