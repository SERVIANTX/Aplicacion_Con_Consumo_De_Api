function guardar()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost/AngelaMaria/public/api/empleados",
			data:{nombre:$("#txtnombre").val(),apellido_paterno:$("#txtapellido_paterno").val(),apellido_materno:$("#txtapellido_materno").val(),numero_documento_identidad:$("#txtnumero_documento_identidad").val(),pais:$("#txtpais").val()}
		}
	)
	.done(function(response){

		$("#message").text("El empleado se registro satisfactoriamente");
		
		$("#txtnombre").val("");
		$("#txtapellido_paterno").val("");
		$("#txtapellido_materno").val("");
		$("#txtnumero_documento_identidad").val("");
		$("#txtpais").val("");

	});	
}	
