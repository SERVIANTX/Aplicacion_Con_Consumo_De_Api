function guardar()
{
	$.ajax(
		{
			method:"POST",
			url:"http://",
			data:{codigo:$("#txtCodigo").val(),nombre:$("#txtNombre").val()}
		}
	)
	.done(function(response){

		$("#message").text("El empleado se registro satisfactoriamente");

		$("#txtCodigo").val("");
		$("#txtNombre").val("");

	});	
}	