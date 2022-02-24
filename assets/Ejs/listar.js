function listar()
{
	$.ajax(
		{
			method:"GET",
			url:"http://localhost/AngelaMaria/public/api/empleados"
		}
	)

	.done(function(response){

		data = response.data;

	let Creartabla = function(list)
		{
			let Stringtabla = "<thead><th>ID</th><th>Nombre</th><th>Apellido Paterno</th><th>Apellido Materno</th><th>N° Doc</th><th>Pais</th></thead>";
			for (let data of list){
				let fila = "<tbody> <td>"
				fila += data.id;;
				fila += "</td>"

				fila += "<td>"
				fila += data.nombre;
				fila += "</td>"

				fila += "<td>"
				fila += data.apellido_paterno;
				fila += "</td>"

				fila += "<td>"
				fila += data.apellido_materno;
				fila += "</td>"

				fila += "<td>"
				fila += data.numero_documento_identidad;
				fila += "</td>"

				fila += "<td>"
				fila += data.pais;
				fila += "</td>"

				fila += "</tbody>";
				Stringtabla += fila;

			}
			return Stringtabla
		}
	document.getElementById("tablaempleados").innerHTML = Creartabla(data);
	});


}