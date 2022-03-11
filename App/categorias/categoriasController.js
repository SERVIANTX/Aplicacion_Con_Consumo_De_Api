//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "/public_html/views/login.php";
var DT_CATEGORIAS;
var CATEGORIA_TO_DELETE;

$(document).ready(function () {

    DT_CATEGORIAS = $('#tablacategorias').DataTable({
        "ajax": {
            type: 'get',
            url: "http://localhost/AngelaMaria/public/api/categorias",
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
        columns: [{
                "targets": 0,
                "render": function (data, type, row) {
                    /* Retorna la fecha de creacion */
                    //  return row.created_at;
                    return moment(row.created_at).format('DD/MM/YYYY HH:mm:ss');
                },

            },
           {
                data: 'nombre_categoria',
                
  
                               
            },
            {
                data: 'estado',
                "render": function (data, type, row) {
                    
                    if(data == "Activo")
                        return "<span class=\"badge badge-pill badge-success\">" + data + "</span>";
                    else
                        return "<span class=\"badge badge-pill badge-danger\">" + data + "</span>";
                    
                },
            },
            {
                "targets": 3,
                "render": function (data, type, row) {

                    return "<button class=\"btn btn-outline-success\" onclick=\"loadEditCategoria('" + row.id + "')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminarCategoria('" + row.id + "');\"><i class=\"bx bx-trash\"></i></button>";
                }
            },
        ]

    });

});



function guardarCategorias() {
    $.ajax({
            method: "POST",
            url: "http://localhost/AngelaMaria/public/api/categorias",
            headers: {"Authorization": "Bearer "+_token},
            data: {
                nombre_categoria: $("#txtnombre_categoria").val(),
                estado: $("#txtestado").val(),
            }
        })
        .done(function (msg) {

            //$("#message").text("El empleado se registro satisfactoriamente");
            $("#txtnombre_categoria").val("");
            $("#txtestado").val("");

            $('#mdlcategoria').modal("hide");

            updateDataTableCategorias();
        });
}



/* Funcion para actualizar el DataTable */
function updateDataTableCategorias() {
    DT_CATEGORIAS.ajax.reload();
}




function loadEditCategoria(id) {

    $("#modalContainer1").load("../../views/mntcategorias/edit-categorias.php", function (response) {

        loadDataCategoria(id);

    });


}




function loadnewCategoria() {

    $("#modalContainer1").load("../../views/mntcategorias/new-categorias.php", function (response) {
        $('#mdlcategoria').modal({
            show: true,
            backdrop: 'static',
            size: 'lg',
            keyboard: false
        });
    });


}




function loadDataCategoria(id) {
    $.ajax({
            method: "GET",
            url: "http://localhost/AngelaMaria/public/api/categorias/" + id,
            headers: {"Authorization": "Bearer "+_token}
        })
        .done(function (response) {

            console.log(response)
            $("#txtId").val(response.data.id);
            $("#txtNombre_categoria").val(response.data.nombre_categoria);
            $("#txtEstado").val(response.data.estado);

            $('#mdlEditCategoria').modal({
                show: true,
                backdrop: 'static',
                size: 'lg',
                keyboard: false
            });

        });

}




function EditarCategoria() {
    $.ajax({
            method: "PUT",
            url: "http://localhost/AngelaMaria/public/api/categorias",
            headers: {"Authorization": "Bearer "+_token},
            data: {
                id: $("#txtId").val(),
                nombre_categoria: $("#txtNombre_categoria").val(),
                estado: $("#txtEstado").val(),
            }
        })
        .done(function (msg) {

            $("#message").text("La categoria se actualizo satisfactoriamente");

            $("#txtId").val("");
            $("#txtNombre_categoria").val("");
            $("#txtEstado").val("");


        });
        closeModalCategoria();
    updateDataTableCategorias();
}




function closeModalCategoria() {
    $('#mdlEditCategoria').modal("hide");
}




function eliminarCategoria(id) {

    CATEGORIA_TO_DELETE = id;

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
                    url: "http://localhost/AngelaMaria/public/api/categorias/" + CATEGORIA_TO_DELETE,
                    headers: {"Authorization": "Bearer "+_token}
                })
                .done(function (msg) {
                    updateDataTableCategorias();
                });

            Swal.fire(
                'Eliminado!',
                'Eliminado correctamente.',
                'success'
            )
        } {}
    })
}