//js para productos

var DT_PRODUCTOS;
var PRODUCTO_TO_DELETE;

$(document).ready(function(){

    DT_PRODUCTOS=$('#tablaproductos').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost:8080/AngelaMaria/public/api/productos",
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
                 { data: 'nombre_producto' },
                 { data: 'descripcion' },
                 { data: 'stock' },
                 { data: 'precio_venta' },
                 { data: 'precio_compra' },
                 { data: 'lote' },
                 {
                    "targets": 3,
                    "render": function (data, type, row) {
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditProducto('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminar('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
     
         });
     
     });


/////////////////////////////////////////////////////////////////////////////////////////////





function guardarproducto()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost:8080/AngelaMaria/public/api/productos",
			data:{nombre_producto:$("#txtnombreproducto").val(),descripcion:$("#txtdescripcion").val(),stock:$("#txtstock").val(),precio_venta:$("#txtprecioventa").val(),precio_compra:$("#txtpreciocompra").val(),lote:$("#txtlote").val()}
            
		
        }
	)
	.done(function(msg){

		//$("#message").text("El empleado se registro satisfactoriamente");
		    
       
		$("#txtnombreproducto").val("");
		$("#txtdescripcion").val("");
		$("#txtstock").val("");
		$("#txtprecioventa").val("");
		$("#txtpreciocompra").val("");
        $("#txtlote").val("");

        $('#mntproducto').modal("hide");
        
             updateDataTable();
             

	});	
}	


/////////////////////////////////////////////////////////////////////////////////



/* Funcion para actualizar el DataTable */
function updateDataTable()
{
    DT_PRODUCTOS.ajax.reload();
}

/////////////////////////////////////////////////////////////


////////////////////////////////////////

function loadEditProducto(id)
{

    $("#modalContainer1").load("../../views/mntproducto/edit-productos.php",function(response){

         loadDataProducto(id);

    });


}

//////////////////////


//////////////////////////////////////////////////////
function loadnewEmpleado()
{

    $("#modalContainer1").load("../../views/mntproducto/new-productos.php",function(response){
        $('#mntproducto').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    });


}



////////////////////////////////////////////////////////////////


/////carga los datos que estan en la tabla para el modal editar
function loadDataProducto(id)
{
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/AngelaMaria/public/api/productos/"+id
    })
    .done(function( response ) {

        console.log(response)
        $("#txtId").val(response.data.id);
        $("#txtNombreproducto").val(response.data.nombre_producto);
        $("#txtDescripcion").val(response.data.descripcion);
        $("#txtStock").val(response.data.stock);
        $("#txtPrecioventa").val(response.data.precio_venta);
        $("#txtPreciocompra").val(response.data.precio_compra);
        $("#txtLote").val(response.data.lote);

        $('#mdlEditProducto').modal({ show: true,  backdrop: 'static', size: 'lg', keyboard: false });
    
      });
    
}


////////////////////////////////////////////////////////////////////////////////////////////


//////////ques actuliza los dato en la bd


function Editar()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost:8080/AngelaMaria/public/api/productos",
			data:{id:$("#txtId").val(),nombre_producto:$("#txtNombreproducto").val(),descripcion:$("#txtDescripcion").val(),stock:$("#txtStock").val(),precio_venta:$("#txtPrecioventa").val(),precio_compra:$("#txtPreciocompra").val(),lote:$("#txtLote").val()}
		}
	)
	.done(function( msg ){

		$("#message").text("El producto se actualizo satisfactoriamente");
		
		$("#txtNombreproducto").val("");
		$("#txtDescripcion").val("");
		$("#txtStock").val("");
		$("#txtPrecioventa").val("");
		$("#txtPreciocompra").val("");
        $("#txtLote").val("");
       
      
	});
    closeModal();
    updateDataTable();	
}	


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function closeModal()
{
$('#mdlEditProducto').modal("hide");
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
                url: "http://localhost:8080/AngelaMaria/public/api/productos/"+PRODUCTO_TO_DELETE,
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