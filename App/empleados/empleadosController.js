//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "/Aplicacion_Con_Consumo_De_Api/view/login.html";
var DT_EMPLEADO;
var EMPLEADO_TO_DELETE;

$(document).ready(function(){

    DT_EMPLEADO=$('#tablaempleados').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost/AngelaMaria/public/api/empleados",
                 headers: {"Authorization": "Bearer "+_token},
                 dataSrc: 'data',
                 cache: true
                 },

                 /* Cambiar el lenguaje de DataTable */
                "language": {
                    "sProcessing": "Procesando...",
                    "sLengthMenu": "Mostrar _MENU_ registros",
                    "sZeroRecords": "No se encontraron resultados",
                    "sEmptyTable": "Ningún dato disponible en esta tabla",
                    "sInfo": "Mostrando registros del  _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando registros del 0 a 0 de un total de 0 registros",
                    "sInfoFiltered": "(Filtro de un total de _MAX_ registros)",
                    "sInfoPostFix": "",
                    "sSearch": "Buscar:",
                    "sUrl": "",
                    "sInfoThousands": ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast": "Último",
                        "sNext": "Siguiente",
                        "sPrevious": "Anterior"
                    },
                    "oAria": {
                        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sSortDescending": ": Activar para ordenar la columna de manera desendente"
                    }
                },
             columns: [
                {
                    "targets": 0,
                    "render": function (data, type, row) {
                        /* Retorna la fecha de creacion */
                      //  return row.created_at;
                        return moment(row.created_at).format('DD/MM/YYYY HH:mm:ss');
                    },
    
                },   
                 { data: 'nombre' },
                 { data: 'apellido_paterno' },
                 { data: 'apellido_materno' },
                 { data: 'numero_documento_identidad' },
                 { data: 'pais' },
                 {
                    "targets": 3,
                    "render": function (data, type, row) {
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditEmpleado('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminarEmpleado('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
     
         });
     
     });


function guardarEmpleado()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost/AngelaMaria/public/api/empleados",
            headers: {"Authorization": "Bearer "+_token},
			data:{nombre:$("#txtnombre").val(),apellido_paterno:$("#txtapellido_paterno").val(),apellido_materno:$("#txtapellido_materno").val(),numero_documento_identidad:$("#txtnumero_documento_identidad").val(),pais:$("#txtpais").val()}
            
		
        }
	)
	.done(function(msg){
       
		$("#txtnombre").val("");
		$("#txtapellido_paterno").val("");
		$("#txtapellido_materno").val("");
		$("#txtnumero_documento_identidad").val("");
		$("#txtpais").val("");

        $('#mntempleado').modal("hide");
        
            
             

	});
    updateDataTableEmpleado();	
}	



/* Funcion para actualizar el DataTable */
function updateDataTableEmpleado()
{
    DT_EMPLEADO.ajax.reload();
}


function loadnewEmpleados()
{

    $("#modalContainer1").load("../../views/mntempleados/new-empleados.php",function(response){
        $('#mntempleado').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    });


}


function loadEditEmpleado(id)
{

    $("#modalContainer1").load("../../views/mntempleados/edit-empleados.php",function(response){

         loadDataEmpleado(id);

    });


}



function loadDataEmpleado(id)
{
    $.ajax({
      method: "GET",
      url: "http://localhost/AngelaMaria/public/api/empleados/"+id,
      headers: {"Authorization": "Bearer "+_token}
    })
    .done(function( response ) {

        console.log(response)
        $("#txtId").val(response.data.id);
        $("#txtNombre").val(response.data.nombre);
        $("#txtApellido_paterno").val(response.data.apellido_paterno);
        $("#txtApellido_materno").val(response.data.apellido_materno);
        $("#txtNumero_documento_identidad").val(response.data.numero_documento_identidad);
        $("#txtPais").val(response.data.pais);

        $('#mdlEditEmpleado').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}

function EditarEmpleado()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost/AngelaMaria/public/api/empleados",
            headers: {"Authorization": "Bearer "+_token},
			data:{id:$("#txtId").val(),nombre:$("#txtNombre").val(),apellido_paterno:$("#txtApellido_paterno").val(),apellido_materno:$("#txtApellido_materno").val(),numero_documento_identidad:$("#txtNumero_documento_identidad").val(),pais:$("#txtPais").val()}
		}
	)
	.done(function( msg ){

		$("#message").text("El empleado se actualizo satisfactoriamente");
		
		$("#txtNombre").val("");
		$("#txtApellido_paterno").val("");
		$("#txtApellido_materno").val("");
		$("#txtNumero_documento_identidad").val("");
		$("#txtPais").val("");
       
      
	});
    closeModalEmpleado();
    updateDataTableEmpleado();	
}	
function closeModalEmpleado()
{
$('#mdlEditEmpleado').modal("hide");
}

function eliminarEmpleado(id){
    
    EMPLEADO_TO_DELETE=id;

    Swal.fire({
        title: 'Eliminar?',
        text: "Esta seguro que desea eliminar el registro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'NO',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                method: "delete",
                url: "http://localhost/AngelaMaria/public/api/empleados/"+EMPLEADO_TO_DELETE,
                headers: {"Authorization": "Bearer "+_token}
              })
              .done(function( msg ) {
                updateDataTableEmpleado();
                });

                Swal.fire(
                    'Eliminado!',
                    'Eliminado correctamente.',
                    'success'
                )
        }{
        }
      })
}


