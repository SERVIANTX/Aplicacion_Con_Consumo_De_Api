var DT_PRODUCTOS;
var PRODUCTO_TO_DELETE;

$(document).ready(function(){

    DT_PRODUCTOS=$('#tablaempleados').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost:8080/AngelaMaria/public/api/empleados",
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
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditProducto('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminar('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
     
         });
     
     });


function guardar()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost:8080/AngelaMaria/public/api/empleados",
			data:{nombre:$("#txtnombre").val(),apellido_paterno:$("#txtapellido_paterno").val(),apellido_materno:$("#txtapellido_materno").val(),numero_documento_identidad:$("#txtnumero_documento_identidad").val(),pais:$("#txtpais").val()}
            
		
        }
	)
	.done(function(msg){

		//$("#message").text("El empleado se registro satisfactoriamente");
		    
       
		$("#txtnombre").val("");
		$("#txtapellido_paterno").val("");
		$("#txtapellido_materno").val("");
		$("#txtnumero_documento_identidad").val("");
		$("#txtpais").val("");

        $('#mntempleado').modal("hide");
        
             updateDataTable();
             

	});	
}	



/* Funcion para actualizar el DataTable */
function updateDataTable()
{
    DT_PRODUCTOS.ajax.reload();
}

function loadEditProducto(id)
{

    $("#modalContainer1").load("../../views/mntempleados/edit-empleados.php",function(response){

         loadDataProducto(id);

    });


}

function loadnewEmpleado()
{

    $("#modalContainer1").load("../../views/mntempleados/new-empleados.php",function(response){
        $('#mntempleado').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    });


}

function loadDataProducto(id)
{
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/AngelaMaria/public/api/empleados/"+id
    })
    .done(function( response ) {

        console.log(response)
        $("#txtId").val(response.data.id);
        $("#txtNombre").val(response.data.nombre);
        $("#txtApellido_paterno").val(response.data.apellido_paterno);
        $("#txtApellido_materno").val(response.data.apellido_materno);
        $("#txtNumero_documento_identidad").val(response.data.numero_documento_identidad);
        $("#txtPais").val(response.data.pais);

        $('#mdlEditProducto').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}

function Editar()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost:8080/AngelaMaria/public/api/empleados",
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
    closeModal();
    updateDataTable();	
}	
function closeModal()
{
$('#mdlEditProducto').modal("hide");
}

function loadConfirmDelete(id)
{
    PRODUCTO_TO_DELETE=id;
    
    $("#modalContainer1").load("/views/productos/frm-confirm-delete.html",function(response){

        $('#mdlConfirmDelete').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });


    });
}


function eliminar(id){
    
    PRODUCTO_TO_DELETE=id;

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
                url: "http://localhost:8080/AngelaMaria/public/api/empleados/"+PRODUCTO_TO_DELETE,
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


