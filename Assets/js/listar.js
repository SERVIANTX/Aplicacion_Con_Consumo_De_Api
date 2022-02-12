function listar()
{
	$.ajax(
		{
			method:"GET",
			url:"http://localhost/AngelaMaria/public/api/empleados",
		}
	)

	.done(function(response){

		console.log(response);

        datos = response.datos;

        for(i=0;i<datos.length;i++)
        {
            document.write(datos[i].nombre);
            document.write("<br>");

        }

	});
}