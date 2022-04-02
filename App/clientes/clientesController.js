//js para productos
var _token = sessionStorage.getItem('_token');

if(!_token)
window.location = "../../index.php";
var DT_CLIENTES;
var CLIENTE_TO_DELETE;

    $(document).ready(function () {

        DT_CATEGORIAS = $('#tablaclientes').DataTable({
            "ajax": {
                type: 'get',
                url: "http://localhost/AngelaMaria/public/api/usuariosClientes",
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
                { data: 'imagen',
                            "render":function (data, type, row){
                            return "<img class=\"rounded-circle\" src='"+ data +"' width=\"55\" height=\"30\" />";
                     },
                },
                {
                    data: 'name'        
                },
                {
                    data: 'apellidos'
                },
                {
                    data: 'direccion'
                },
                {
                    data: 'numero_documento'
                },
                {
                    data: 'email'
                },
            ]
    
        });
    
    });