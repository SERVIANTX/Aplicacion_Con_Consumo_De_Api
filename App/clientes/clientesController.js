//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "/public_html/views/login.php";
var DT_CLIENTES;
var CLIENTE_TO_DELETE;

$(document).ready(function(){

    DT_CLIENTES=$('#tablaclientes').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost/AngelaMaria/public/api/clientes",
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
                 { data: 'direccion' },
                 { data: 'numero_documento_identidad' },
                 { data: 'correo' },
                 {
                    "targets": 3,
                    "render": function (data, type, row) {
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditCliente('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminar('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
     
         });
     
     });


/////////////////////////////////////////////////////////////////////////////////////////////





function guardarcliente()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost/AngelaMaria/public/api/clientes",
            headers: {"Authorization": "Bearer "+_token},
			data:{nombre:$("#txtnombrecliente").val(),apellido_paterno:$("#txtapellidopaterno").val(),apellido_materno:$("#txtapellidomaterno").val(),direccion:$("#txtdireccion").val(),numero_documento_identidad:$("#txtdocumentoidentitad").val(),correo:$("#txtcorreo").val()}
            
		
        }
	)
	.done(function(msg){

		//$("#message").text("El empleado se registro satisfactoriamente");
		    
       
		$("#txtnombrecliente").val("");
		$("#txtapellidopaterno").val("");
		$("#txtapellidomaterno").val("");
		$("#txtdireccion").val("");
		$("#txtdocumentoidentitad").val("");
        $("#txtcorreo").val("");

        $('#mntcliente').modal("hide");
        
             updateDataTable();
             

	});	
}	


/////////////////////////////////////////////////////////////////////////////////



/* Funcion para actualizar el DataTable */
function updateDataTable()
{
    DT_CLIENTES.ajax.reload();
}

/////////////////////////////////////////////////////////////


////////////////////////////////////////

function loadEditCliente(id)
{

    $("#modalContainer1").load("../../views/mntcliente/edit-clientes.php",function(response){

         loadDataCliente(id);

    });


}

//////////////////////


//////////////////////////////////////////////////////
function loadnewCliente()
{

    $("#modalContainer1").load("../../views/mntcliente/new-clientes.php",function(response){
        $('#mntcliente').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    });


}



////////////////////////////////////////////////////////////////


/////carga los datos que estan en la tabla para el modal editar
function loadDataCliente(id)
{
    $.ajax({
      method: "GET",
      url: "http://localhost/AngelaMaria/public/api/clientes/"+id,
      
      headers: {"Authorization": "Bearer "+_token}
    })
    .done(function( response ) {

        console.log(response)
        $("#txtId").val(response.data.id);
        $("#txtNombrecliente").val(response.data.nombre);
        $("#txtApellidopaterno").val(response.data.apellido_paterno);
        $("#txtApellidomaterno").val(response.data.apellido_materno);
        $("#txtDireccion").val(response.data.direccion);
        $("#txtDocumentoidentidad").val(response.data.numero_documento_identidad);
        $("#txtCorreo").val(response.data.correo);

        $('#mdlEditCliente').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}


////////////////////////////////////////////////////////////////////////////////////////////


//////////ques actuliza los dato en la bd


function Editar()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost/AngelaMaria/public/api/clientes",
            headers: {"Authorization": "Bearer "+_token},
			data:{id:$("#txtId").val(),nombre:$("#txtNombrecliente").val(),apellido_paterno:$("#txtApellidopaterno").val(),apellido_materno:$("#txtApellidomaterno").val(),direccion:$("#txtDireccion").val(),numero_documento_identidad:$("#txtDocumentoidentidad").val(),correo:$("#txtCorreo").val()}
		}
	)
	.done(function( msg ){

		$("#message").text("El cliente se actualizo satisfactoriamente");
		
		$("#txtNombrecliente").val("");
		$("#txtApellidopaterno").val("");
		$("#txtApellidomaterno").val("");
		$("#txtDireccion").val("");
		$("#txtDocumentoidentidad").val("");
        $("#txtCorreo").val("");
       
      
	});
    closeModal();
    updateDataTable();	
}	


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function closeModal()
{
$('#mdlEditCliente').modal("hide");
}

/////////////////////////////////////////////////////



/*function loadConfirmDelete(id)
{
    PRODUCTO_TO_DELETE=id;
    
    $("#modalContainer1").load("/views/productos/frm-confirm-delete.html",function(response){

        $('#mdlConfirmDelete').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });


    });
}*/


////esto es eliminar undato de la tabñla

function eliminar(id){
    
    CLIENTE_TO_DELETE=id;

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
                url: "http://localhost/AngelaMaria/public/api/clientes/"+CLIENTE_TO_DELETE,
                headers: {"Authorization": "Bearer "+_token}
              })
              .done(function( msg ) {
              updateDataTable();
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
///////////////////////////////////////////////