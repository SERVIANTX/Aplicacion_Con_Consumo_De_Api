<!doctype html>
<html lang="es">

<head>

    <?php
            require_once("../html/MainHead.php")

        ?>
    <title>Mnt empleado</title>

    <link rel="icon" type="image/png" href="..\..\public\img\favicon.png">
    
</head>

<body>

    <!-- Start Sidemenu Area -->
    <?php
            require_once("../html/MainMenu.php")
    ?>
    <!-- End Sidemenu Area -->

    <!-- Start Main Content Wrapper Area -->
    <div class="main-content d-flex flex-column">

        <!-- Top Navbar Area -->
        <?php
            require_once("../html/MainNavbar.php")
        ?>
        <!-- End Top Navbar Area -->

        <!-- Breadcrumb Area -->
        <div class="breadcrumb-area">
            <h1>Hist Clientes</h1>

            <ol class="breadcrumb">
                <li class="item"><a href="../home"><i class='bx bx-home-alt'></i></a></li>

                <li class="item">Historial de Clientes</li>

            </ol>
        </div>

        <div id="modalContainer1"></div>



        <div class="card mb-30">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h3>Listado de Clientes</h3>
                <br>
                <button type="button" class="btn btn-dark" data-toggle="modal" onclick="loadnewCliente()" >Nuevo</button>
            </div>

            <div class="card-body">
                <table id="tablaclientes" name="tablaclientes" class="table display responsive nowrap">
                    <thead>
                            <th>Fecha de Creación</th>
                            <th>Imagen</th>
                            <th>Nombre del Cliente</th>
                            <th>Apellido del Cliente</th>
                            <th>Direccion</th>
                            <th>Documento de Identidad</th>
                            <th>Correo</th>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal Guardar Empleado -->
        <?php
            require_once("new-clientes.php")
            ?>
         <!-- Modal Edit Empleado -->
         <?php
            require_once("edit-clientes.php")
            ?>



        <!-- End Breadcrumb Area -->

        <div class="flex-grow-1"></div>

        <!-- Start Footer End -->
        <?php
            require_once("../html/MainFooter.php")
            ?>
        <!-- End Footer End -->

    </div>
    
    <!-- End Main Content Wrapper Area -->
    <?php
            require_once("../html/MainJS.php")
        ?>
   
</body>

</html>