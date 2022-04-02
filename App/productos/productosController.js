//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "/Aplicacion_Con_Consumo_De_Api/view/login.php";

var DT_PRODUCTOS;
var PRODUCTO_TO_DELETE;

$(document).ready(function(){

    DT_PRODUCTOS=$('#tablaproductos').DataTable( {
             "ajax":{
                 type: 'get',
                 url: "http://localhost/AngelaMaria/public/api/productos",
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
                        return "<img class=\"rounded-circle\" src='"+ data +"' width=\"60\" height=\"25\" />";
                 },
                },  
                 { data: 'nombre_producto' },
                 { 
                     "targets": 4,
                     "render": function ( data, type, row ) {
                    
                        if(row.categoria)
                            return row.categoria.nombre_categoria;
                        else
                            return "";
                    },
                   
                 },
                 { data: 'marca_id', 
                     "targets": 5,
                     "render": function ( data, type, row ) {
                    
                        if(row.marca)
                            return row.marca.nombre;
                        else
                            return "";
                    },
                },
                 { data: 'descripcion' },
                 { data: 'stock' },
                 { data: 'precio_venta' },
                 { data: 'precio_compra' },
                 { data: 'lote' },
                 {
                    "targets": 11,
                    "render": function (data, type, row) {
                        
                        return "<button class=\"btn btn-outline-success\" onclick=\"loadEditProducto('"+row.id+"')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminarProducto('"+row.id+"');\"><i class=\"bx bx-trash\"></i></button>";
                      
                    }
    
                },
                
     
             ]
     
         });
     
     });


/////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    $('#txtcategoriaproducto').select2();
    $(function()
    {


        $.ajax({
            type:'GET',
            url: "http://localhost/AngelaMaria/public/api/categoriasnombre",
            headers: {"Authorization": "Bearer "+_token},
            success:function(response)
            {
                let array = [];
               
                $.each(response,function(indice,fila){       
                    
                    $('#txtcategoriaproducto').append("<option value='"+fila.id+"'>"+fila.nombre_categoria +"</option>");
                    array.push(fila.nombre);
                    
                });
              
                
               
            }
           


        });
    });
    $('#txtcategoriaproducto').change(function(){
        extraerid();
    })
    function extraerid(){
        
        $("#idcategoria").attr("value", $('#txtcategoriaproducto').val());
        
    }


});

$(document).ready(function() {
    $('#txtmarcaproducto').select2();
    $(function()
    {


        $.ajax({
            type:'GET',
            url: "http://localhost/AngelaMaria/public/api/marcasnombre",
            headers: {"Authorization": "Bearer "+_token},
            success:function(response)
            {
                let array = [];
               
                $.each(response,function(indice,fila){       
                    
                    $('#txtmarcaproducto').append("<option value='"+fila.id+"'>"+fila.nombre +"</option>");
                    array.push(fila.nombre);
                    
                });
              
                
               
            }
           


        });
    });
    $('#txtmarcaproducto').change(function(){
        extraerid();
    })
    function extraerid(){
        
        $("#idmarca").attr("value", $('#txtmarcaproducto').val());
        
    }


});

function editarcategoria(){

    $('#txtCategoriaproducto').select2();
    $(function()
    {


        $.ajax({
            type:'GET',
            url: "http://localhost/AngelaMaria/public/api/categoriasnombre",
            headers: {"Authorization": "Bearer "+_token},
            success:function(response)
            {
                let array = [];
               
                $.each(response,function(indice,fila){       
                    
                    $('#txtCategoriaproducto').append("<option value='"+fila.id+"'>"+fila.nombre_categoria +"</option>");
                    array.push(fila.nombre);
                    
                });
              
                
               
            }
           


        });
    });
    $('#txtCategoriaproducto').change(function(){
        extraerid();
    })
    function extraerid(){
        
        $("#idCategoria").attr("value", $('#txtCategoriaproducto').val());
        
    }
}




function editarmarca(){

    $(document).ready(function() {
        $('#txtMarcaproducto').select2();
        $(function()
        {
    
    
            $.ajax({
                type:'GET',
                url: "http://localhost/AngelaMaria/public/api/marcasnombre",
                headers: {"Authorization": "Bearer "+_token},
                success:function(response)
                {
                    let array = [];
                   
                    $.each(response,function(indice,fila){       
                        
                        $('#txtMarcaproducto').append("<option value='"+fila.id+"'>"+fila.nombre +"</option>");
                        array.push(fila.nombre);
                        
                    });
                  
                    
                   
                }
               
    
    
            });
        });
        $('#txtMarcaproducto').change(function(){
            extraerid();
        })
        function extraerid(){
            
            $("#idMarca").attr("value", $('#txtMarcaproducto').val());
            
        }
    
    
    });


}






function guardarproducto()
{
	$.ajax(
		{
			method:"POST",
			url:"http://localhost/AngelaMaria/public/api/productos",
            headers: {"Authorization": "Bearer "+_token},
			data:{imagen:$("#txtimagenproducto").val(),nombre_producto:$("#txtnombreproducto").val(),categoria_id:$("#idcategoria").val(),marca_id:$("#idmarca").val(),descripcion:$("#txtdescripcion").val(),stock:$("#txtstock").val(),precio_venta:$("#txtprecioventa").val(),precio_compra:$("#txtpreciocompra").val(),lote:$("#txtlote").val()}

        }
	)
	.done(function(msg){

		//$("#message").text("El empleado se registro satisfactoriamente");
		    
        $("#txtimagenproducto").val("");
		$("#txtnombreproducto").val("");
        $("#idcategoria").val("");
        $("#idmarca").val("");
		$("#txtdescripcion").val("");
		$("#txtstock").val("");
		$("#txtprecioventa").val("");
		$("#txtpreciocompra").val("");
        $("#txtlote").val("");

        $('#mntproducto').modal("hide");
        
        updateDataTableProductos();
             

	});	
}	



/////////////////////////////////////////////////////////////////////////////////



/* Funcion para actualizar el DataTable */
function updateDataTableProductos()
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
function loadnewProducto()
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
      url: "http://localhost/AngelaMaria/public/api/productos/"+id,
      headers: {"Authorization": "Bearer "+_token},
    })
    .done(function(response) {

        $.ajax({
            method: "GET",
            url: "http://localhost/AngelaMaria/public/api/categorias/"+response.data.categoria_id,
            headers: {"Authorization": "Bearer "+_token},
        })
        .done(function(response){

            $('#txtCategoriaproducto').append("<option value='"+response.data.id+"'>"+response.data.nombre_categoria +"</option>"); 
            $("#idCategoria").attr("value", response.data.id);

        });
        $.ajax({
            method: "GET",
            url: "http://localhost/AngelaMaria/public/api/marcas/"+response.data.marca_id,
            headers: {"Authorization": "Bearer "+_token},
        })
        .done(function(response){
            $('#txtMarcaproducto').append("<option value='"+response.data.id+"'>"+response.data.nombre +"</option>");
            $("#idMarca").attr("value", response.data.id);
        });

        $('#txtCategoriaproducto').click(function(){
            document.getElementById("txtCategoriaproducto").innerHTML= "";
            editarcategoria();
        })

        $('#txtMarcaproducto').click(function(){
            document.getElementById("txtMarcaproducto").innerHTML= "";
            editarmarca();
        })
        

        $("#txtId").val(response.data.id);
        $("#txtImagenproducto").val(response.data.imagen);
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


function EditarProducto()
{
	$.ajax(
		{
			method:"PUT",
			url:"http://localhost/AngelaMaria/public/api/productos",
            headers: {"Authorization": "Bearer "+_token},
			data:{id:$("#txtId").val(),imagen:$("#txtImagenproducto").val(),nombre_producto:$("#txtNombreproducto").val(),categoria_id:$("#txtCategoriaproducto").val(),marca_id:$("#txtMarcaproducto").val(),descripcion:$("#txtDescripcion").val(),stock:$("#txtStock").val(),precio_venta:$("#txtPrecioventa").val(),precio_compra:$("#txtPreciocompra").val(),lote:$("#txtLote").val()}
		}
	)
	.done(function( msg ){

		$("#message").text("El producto se actualizo satisfactoriamente");
		
		$("#txtImagenproducto").val("");
        $("#txtNombreproducto").val("");
        $("#idCategoria").val("");
        $("#idMarca").val("");
		$("#txtDescripcion").val("");
		$("#txtStock").val("");
		$("#txtPrecioventa").val("");
		$("#txtPreciocompra").val("");
        $("#txtLote").val("");
       
      
	});
    closeModalProducto();
    updateDataTableProductos();	
}	


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function closeModalProducto()
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

function eliminarProducto(id){
    
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
                url: "http://localhost/AngelaMaria/public/api/productos/"+PRODUCTO_TO_DELETE,
                headers: {"Authorization": "Bearer "+_token}
              })
              .done(function( msg ) {
                updateDataTableProductos();
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