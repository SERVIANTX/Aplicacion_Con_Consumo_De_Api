var DT_PEDIDOS;
var PEDIDOS_TO_DELETE;

$(document).ready(function () {

    DT_PEDIDOS = $('#tablapedidos').DataTable({
        "ajax": {
            type: 'get',
            url: "#",
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
                data: 'empleado'
            },
            {
                data: 'cliente'
            },
            {
                data: 'direccion'
            },
            {
                data: 'fecha_pedido'
            },
            {
                data: 'fecha_envio'
            },
            {
                data: 'estado'
            },
            {
                "targets": 3,
                "render": function (data, type, row) {

                    return "<button class=\"btn btn-outline-success\" onclick=\"loadEditPedido('" + row.id + "')\"><i class=\"bx bx-edit\"></i></button>  &nbsp  <button class=\"btn btn-outline-danger\" onclick=\"eliminar('" + row.id + "');\"><i class=\"bx bx-trash\"></i></button>";
                }
            },
        ]

    });

});



function guardar() {
    $.ajax({
            method: "POST",
            url: "#",
            data: {
                empleado: $("#txtEmpleado").val(),
                cliente: $("#txtCliente").val(),
                direccion: $("#txtDireccion").val(),
                fecha_pedido: $("#txtFecha_pedido").val(),
                fecha_envio: $("#txtFecha_envio").val(),
                estado: $("#txtEstado").val(),
            }
        })
        .done(function (msg) {

            //$("#message").text("El empleado se registro satisfactoriamente");
            $("#txtEmpleado").val("");
            $("#txtCliente").val("");
            $("#txtDireccion").val("");
            $("#txtFecha_pedido").val("");
            $("#txtFecha_envio").val("");
            $("#txtEstado").val("");

            $('#mdlpedido').modal("hide");

            updateDataTable();
        });
}



/* Funcion para actualizar el DataTable */
function updateDataTable() {
    DT_PEDIDOS.ajax.reload();
}




function loadEditPedido(id) {

    $("#modalContainer1").load("../../views/mntpedidos/edit-pedidos.php", function (response) {

        loadDataPedido(id);

    });


}




function loadnewPedido() {

    $("#modalContainer1").load("../../views/mntpedidos/new-pedidos.php", function (response) {
        $('#mdlpedido').modal({
            show: true,
            backdrop: 'static',
            size: 'lg',
            keyboard: false
        });
    });


}




function loadDataPedido(id) {
    $.ajax({
            method: "GET",
            url: "http://localhost/AngelaMaria/public/api/pedidos/" + id
        })
        .done(function (response) {

            console.log(response)
            $("#txtId").val(response.data.id);
            $("#txtEmpleado").val(response.data.empleado);
            $("#txtCliente").val(response.data.cliente);
            $("#txtDireccion").val(response.data.direccion);
            $("#txtFecha_pedido").val(response.data.fecha_pedido);
            $("#txtFecha_envio").val(response.data.fecha_envio);
            $("#txtEstado").val(response.data.estado);

            $('#mdlEditPedido').modal({
                show: true,
                backdrop: 'static',
                size: 'lg',
                keyboard: false
            });

        });

}




function Editar() {
    $.ajax({
            method: "PUT",
            url: "http://localhost/AngelaMaria/public/api/categorias",
            data: {
                id: $("#txtId").val(),
                empleado: $("#txtEmpleado").val(),
                cliente: $("#txtCliente").val(),
                direccion: $("#txtDireccion").val(),
                fecha_pedido: $("#txtFecha_pedido").val(),
                fecha_envio: $("#txtFecha_envio").val(),
                estado: $("#txtEstado").val(),
            }
        })
        .done(function (msg) {

            $("#message").text("El pedido se actualizo satisfactoriamente");

            $("#txtEmpleado").val("");
            $("#txtCliente").val("");
            $("#txtDireccion").val("");
            $("#txtFecha_pedido").val("");
            $("#txtFecha_envio").val("");
            $("#txtEstado").val("");


        });
    closeModal();
    updateDataTable();
}




function closeModal() {
    $('#mdlEditPedido').modal("hide");
}




function eliminar(id) {

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
                    url: "" + PEDIDOS_TO_DELETE,
                })
                .done(function (msg) {
                    updateDataTable();
                });

            Swal.fire(
                'Eliminado!',
                'Eliminado correctamente.',
                'success'
            )
        } {}
    })
}