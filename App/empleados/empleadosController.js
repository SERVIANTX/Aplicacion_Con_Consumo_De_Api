//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "../../index.php";
var DT_EMPLEADOS;
var EMPLEADO_TO_DELETE;

$(document).ready(function(){

    DT_EMPLEADOS=$('#tablaempleados').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost/AngelaMaria/public/api/usuariosAdmin",
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
                { data: 'imagen',
                            "render":function (data, type, row){
                            return "<img class=\"rounded-circle\" src='"+ data +"' width=\"55\" height=\"30\" />";
                    },
                },
                { data: 'name' },
                { data: 'apellidos' },
                { data: 'direccion' },
                { data: 'numero_documento' },
                { data: 'email' },
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
			url:"http://localhost/AngelaMaria/public/api/ingresarAdmin",
            headers: {"Authorization": "Bearer "+_token},
			data:{imagen:$("#txtimagen").val(),name:$("#txtnombre").val(),apellidos:$("#txtapellido").val(),direccion:$("#txtdireccion").val(),numero_documento:$("#txtdocumento").val(),email:$("#txtcorreo").val(),password:$("#txtcontraseña").val()}
            
		
        }
	)
	.done(function(msg){
       
		$("#txtimagen").val("");
		$("#txtnombre").val("");
		$("#txtapellido").val("");
		$("#txtdireccion").val("");
		$("#txtdocumento").val("");
        $("#txtcorreo").val("");
        $("#txtcontraseña").val("");

        $('#mntempleado').modal("hide");
        
	});
    updateDataTableAdmin();	
}	



/* Funcion para actualizar el DataTable */
function updateDataTableAdmin()
{
    DT_EMPLEADOS.ajax.reload();
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
      url: "http://localhost/AngelaMaria/public/api/buscarAdmin/"+id,
      headers: {"Authorization": "Bearer "+_token}
    })
    .done(function( response ) {

        $("#txtId").val(response.data.id);
        $("#txtImagen").val(response.data.imagen);
        $("#txtNombre").val(response.data.name);
        $("#txtApellido").val(response.data.apellidos);
        $("#txtDireccion").val(response.data.direccion);
        $("#txtDocumento").val(response.data.numero_documento);
        $("#txtCorreo").val(response.data.email);
        $("#txtContraseña").val(response.data.password);

        $('#mdlEditEmpleado').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}

function EditarEmpleado()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost/AngelaMaria/public/api/ActualizarAdmin",
            headers: {"Authorization": "Bearer "+_token},
			data:{id:$("#txtId").val(),imagen:$("#txtImagen").val(),name:$("#txtNombre").val(),apellidos:$("#txtApellido").val(),direccion:$("#txtDireccion").val(),numero_documento:$("#txtDocumento").val(),email:$("#txtCorreo").val(),password:$("#txtContraseña").val()}
		}
	)
	.done(function( msg ){

        updateDataTableAdmin();	
		$("#message").text("El empleado se actualizo satisfactoriamente");
		
		$("#txtId").val("");
		$("#txtImagen").val("");
		$("#txtNombre").val("");
		$("#txtApellido").val("");
		$("#txtDireccion").val("");
        $("#txtDocumento").val("");
        $("#txtCorreo").val("");
        $("#txtContraseña").val("");
        
      
	});
    closeModalEmpleado();
    
    
}	
function closeModalEmpleado()
{
$('#mdlEditEmpleado').modal("hide");
}

function eliminarEmpleado(id){
    
    EMPLEADO_TO_DELETE=id;

    Swal.fire({
        title: 'Acceso Denegado!',
        text: "No se puede elimar a usuarios Administradores!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'OK',
      })
}


