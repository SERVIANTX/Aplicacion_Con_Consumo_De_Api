//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "../../index.php";
var DT_PEDIDOS;
var PEDIDOS_TO_DELETE;

function cerrarsesion(){
    console.log("hola");
}

$(document).ready(function () {

    DT_PEDIDOS = $('#tablapedidos').DataTable({
        "ajax": {
            type: 'get',
            url: "http://localhost/AngelaMaria/public/api/pedidos",
            headers: {"Authorization": "Bearer "+_token},
            dataSrc: 'data',
            cache: true
        },

        /* Cambiar el lenguaje de DataTable */
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar MENU registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del  START al END de un total de TOTAL registros",
            "sInfoEmpty": "Mostrando registros del 0 a 0 de un total de 0 registros",
            "sInfoFiltered": "(Filtro de un total de MAX registros)",
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
        columns: [{
                "targets": 0,
                "render": function (data, type, row) {
                    /* Retorna la fecha de creacion */
                    //  return row.created_at;
                    return moment(row.created_at).format('DD/MM/YYYY HH:mm:ss');
                },

            },
            
            {
                data: 'cliente'
            },
            {
                data: 'direccion'
            },
            {
               
                "targets": 4,
                "render": function (data, type, row) {
                    /* Retorna la fecha de creacion */
                  //  return row.created_at;
                    return moment(row.fecha_pedido).format('DD/MM/YYYY');
                },
            },
            {
                "targets": 5,
                "render": function (data, type, row) {
                    /* Retorna la fecha de creacion */
                  //  return row.created_at;
                    return moment(row.fecha_envio).format('DD/MM/YYYY');
                },
            },
            {
                data: 'importe'
            },
            {
                data: 'estado',
                "render": function (data, type, row) 
                {
                    if(data == "No iniciado")
                        return "<span class=\"badge badge-pill badge-danger\">" + data + "</span>";
                    else if(data == "En proceso")
                        return "<span class=\"badge badge-pill badge-warning\">" + data + "</span>";
                    else if (data == "Finalizado")
                        return "<span class=\"badge badge-pill badge-success\">" + data + "</span>";
                    
                },
            },
            {
                "targets": 8,
                "render": function (data, type, row) {

                    return "<button class=\"btn btn-outline-success\" onclick=\"loadEditPedido('" + row.id + "')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminarPedido('" + row.id + "');\"><i class=\"bx bx-trash\"></i></button>";
                }
            },
        ]

    });

});



/* Funcion para actualizar el DataTable */
function updateDataTablePedido() {
    DT_PEDIDOS.ajax.reload();
}




function loadEditPedido(id) {

    $("#modalContainer1").load("../../views/mntpedidos/edit-pedidos.php", function (response) {

        loadDataPedido(id);

    });


}



function loadDataPedido(id)
{
    $.ajax({
      method: "GET",
      url: "http://localhost/AngelaMaria/public/api/pedidos/"+id,
      headers: {"Authorization": "Bearer "+_token}
    })
    .done(function( response ) {

        $("#txtId").val(response.data.id);

        $('#txtEstado').append("<option value='"+response.data.estado+"'>"+response.data.estado +"</option>");
        llenardatos();
        $('#mdlEditPedido').modal({
            show: true,
            backdrop: 'static',
            size: 'lg',
            keyboard: false
        });
    
      });
    
}

function llenardatos()
{
    $('#txtEstado').append("<option value ='En proceso' > En proceso </option>");
    $('#txtEstado').append(" <option value='Finalizado'> Finalizado</option>");
    
}





function EditarPedido2() {
    $.ajax({
            method: "PUT",
            url: "http://localhost/AngelaMaria/public/api/pedidos",
            headers: {"Authorization": "Bearer "+_token},
            data: {
                id: $("#txtId").val(),
                estado: $("#txtEstado").val(),
            }
        })
        .done(function (msg) {
            $("#message").text("El pedido se actualizo satisfactoriamente");

            $("#txtEstado").val("");


        });
    closeModalPedido();
    updateDataTablePedido();
}




function closeModalPedido() {
    $('#mdlEditPedido').modal("hide");
}




function eliminarPedido(id) {

    PEDIDOS_TO_DELETE = id;

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
                    url: "http://localhost/AngelaMaria/public/api/pedidos/" + PEDIDOS_TO_DELETE,
                    headers: {"Authorization": "Bearer "+_token}
                })
                .done(function (msg) {
                    updateDataTablePedido();
                });

            Swal.fire(
                'Eliminado!',
                'Eliminado correctamente.',
                'success'
            )
        } {}
    })
}





// $(document).ready(function() {
//     $('#txtcliente').select2();
//     $(function()
//     {


//         $.ajax({
//             type:'GET',
//             url: "http://localhost/AngelaMaria/public/api/clientesnombre",
//             headers: {"Authorization": "Bearer "+_token},
//             success:function(response)
//             {
               
//                 $.each(response,function(indice,fila){       
                    
//                     $('#txtcliente').append("<option value='"+fila.id+"'>"+fila.nombrecliente +"</option>");

//                 });
              
                
               
//             }
           


//         });
//     });

//     extraerdatos();


// });

// function extraerdatos(){
//     $('#txtcliente').change(function(){
//         extraerid();

//     })
//     function extraerid(){
        
//         $("#idCliente").attr("value", $('#txtcliente').val());
//         rellenardatos();
//     }
// }

// function rellenardatos(){
//     var id =  $('#idCliente').val();

//         $.ajax({
//             method: "GET",
//             url: "http://localhost/AngelaMaria/public/api/clientes/"+id,
            
//             headers: {"Authorization": "Bearer "+_token}
//           })
//           .done(function( response ) {
      
//               console.log(response)
//               $("#txtdireccion").val(response.data.direccion);
//             });
// }

// $(document).ready(function() {
    

// $('#rdbguardado').click(function(){
//     document.getElementById("divdireccion").innerHTML= "<input type=\"text\" id=\"txtdireccion\" name=\"txtdireccion\" class=\"form-control\" required readonly>";
//     rellenardatos();

// })
// $('#rdbalternativo').click(function(){
//     document.getElementById("divdireccion").innerHTML= "<input type=\"text\" id=\"txtdireccion\" name=\"txtdireccion\" class=\"form-control\" value=\"prueba2\" required>";
// })
// $('#rdbtienda').click(function(){
//     document.getElementById("divdireccion").innerHTML= "<input type=\"text\" id=\"txtdireccion\" name=\"txtdireccion\" class=\"form-control\" value=\"Recojo en Tienda\" required>";
// })


// });
