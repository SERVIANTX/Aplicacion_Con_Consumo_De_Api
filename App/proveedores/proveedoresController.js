//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "../../index.php";
var DT_PROVEEDORES;
var PROVEEDORES_TO_DELETE;

$(document).ready(function(){

    DT_PROVEEDORES=$('#tablaproveedores').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "https://apiangelamaria.000webhostapp.com/api/proveedores",
                 headers: {"Authorization": "Bearer "+_token},
                 dataSrc: 'data',
                 cache: true
                 },
                 "aLengthMenu":[[5, 10, 15, 20],[5, 10, 15, 20]],
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
                 { data: 'razon_social' },
                 { data: 'ruc' },
                 { data: 'telefono' },
                 { data: 'correo' },
                 { data: 'direccion' },
                 {
                    "targets": 3,
                    "render": function (data, type, row) {
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditProveedores('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminarproveedores('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
             
     
         });
     
     });


function guardarproveedores()
{
	$.ajax(
		{
			method:"POST",
			url:"https://apiangelamaria.000webhostapp.com/api/proveedores",
            headers: {"Authorization": "Bearer "+_token},
			data:{razon_social:$("#txtrazon_social").val(),ruc:$("#txtruc").val(),telefono:$("#txttelefono").val(),correo:$("#txtcorreo").val(),direccion:$("#txtdireccion").val()}
            
		
        }
	)
	.done(function(msg){

		//$("#message").text("El empleado se registro satisfactoriamente");
		    
       
		$("#txtrazon_social").val("");
		$("#txtruc").val("");
		$("#txttelefono").val("");
		$("#txtcorreo").val("");
		$("#txtdireccion").val("");

        $('#mntproveedores').modal("hide");
        
        
             

	});	

    updateDataTableProveedores();
}	



/* Funcion para actualizar el DataTable */
function updateDataTableProveedores()
{
    DT_PROVEEDORES.ajax.reload();
}

function loadnewProveedores()
{

    $("#modalContainer2").load("../../views/mntproveedores/new-proveedores.php",function(response){
        $('#mntproveedores').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    });


}

function loadEditProveedores(id)
{

    $("#modalContainer2").load("../../views/mntproveedores/edit-proveedores.php",function(response){

         loadDataProveedores(id);

    });


}


function loadDataProveedores(id)
{
    $.ajax({
      method: "GET",
      url: "https://apiangelamaria.000webhostapp.com/api/proveedores/"+id,
      headers: {"Authorization": "Bearer "+_token}
    })
    .done(function( response ) {

        console.log(response)
        $("#txtIdproveedores").val(response.data.id);
        $("#txtRazon_social").val(response.data.razon_social);
        $("#txtRuc").val(response.data.ruc);
        $("#txtTelefono").val(response.data.telefono);
        $("#txtCorreo").val(response.data.correo);
        $("#txtDireccion").val(response.data.direccion);

        $('#mntEditProveedores').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}

function EditarProveedores()
{
	$.ajax(
		{
			method:"PUT",
			url:"https://apiangelamaria.000webhostapp.com/api/proveedores",
            headers: {"Authorization": "Bearer "+_token},
			data:{id:$("#txtIdproveedores").val(),razon_social:$("#txtRazon_social").val(),ruc:$("#txtRuc").val(),telefono:$("#txtTelefono").val(),correo:$("#txtCorreo").val(),direccion:$("#txtDireccion").val()}
		}
	)
	.done(function( msg ){

		$("#message").text("El empleado se actualizo satisfactoriamente");
		
		$("#txtRazon_social").val("");
		$("#txtRuc").val("");
		$("#txtTelefono").val("");
		$("#txtCorreo").val("");
		$("#txtDireccion").val("");
       
      
	});
    closeModalProveedores();
    updateDataTableProveedores();	
}	
function closeModalProveedores()
{
$('#mntEditProveedores').modal("hide");
}

function eliminarproveedores(id){
    
    PROVEEDORES_TO_DELETE=id;

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
                url: "https://apiangelamaria.000webhostapp.com/api/proveedores/"+PROVEEDORES_TO_DELETE,
                headers: {"Authorization": "Bearer "+_token}
              })
              .done(function( msg ) {
               updateDataTableProveedores();
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

