//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "/public_html/views/login.php";

var DT_MARCAS;
var MARCA_TO_DELETE;

$(document).ready(function(){

    DT_MARCAS=$('#tablamarcas').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost/AngelaMaria/public/api/marcas",
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
                 {
                    "targets": 3,
                    "render": function (data, type, row) {
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditMarca('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminarMarca('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
     
         });
     
     });

function updateDataTableMarca()
{
   DT_MARCAS.ajax.reload();
}

function guardarmarca()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost/AngelaMaria/public/api/marcas",
            headers: {"Authorization": "Bearer "+_token},
			data:{nombre:$("#txtnombremarca").val()}
            
		
        }
	)
	.done(function(msg){
       
		$("#txtnombremarca").val("");

        $('#mntmarcas').modal("hide");
        
        

	});	
    
    updateDataTableMarca();    
}	



/* Funcion para actualizar el DataTable */



function loadnewMarca()
{

    $("#modalContainer3").load("../../views/mntmarca/new-marcas.php",function(response){
        $('#mntmarcas').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    });


}


function loadEditMarca(id)
{

    $("#modalContainer3").load("../../views/mntmarca/edit-marcas.php",function(response){

         loadDataMarca(id);

    });


}



function loadDataMarca(id)
{
    $.ajax({
      method: "GET",
      url: "http://localhost/AngelaMaria/public/api/marcas/"+id,
      headers: {"Authorization": "Bearer "+_token}
    })
    .done(function( response ) {

        console.log(response)
        $("#txtIdmarca").val(response.data.id);
        $("#txtNombre").val(response.data.nombre);

        $('#mdlEditMarca').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}

function EditarMarca()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost/AngelaMaria/public/api/marcas",
            headers: {"Authorization": "Bearer "+_token},
			data:{id:$("#txtIdmarca").val(),nombre:$("#txtNombre").val()}
		}
	)
	.done(function( msg ){

		
		$("#txtNombre").val("");
       
      
	});
    closeModalMarca();
    updateDataTableMarca();	
}	

function closeModalMarca()
{
$('#mdlEditMarca').modal("hide");
}

function eliminarMarca(id){
    
    MARCA_TO_DELETE=id;

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
                url: "http://localhost/AngelaMaria/public/api/marcas/"+MARCA_TO_DELETE,
                headers: {"Authorization": "Bearer "+_token}
              })
              .done(function( msg ) {
                updateDataTableMarca();
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
