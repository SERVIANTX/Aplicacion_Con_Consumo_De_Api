<!doctype html>
<html lang="es">

<head>

    <?php
            require_once("../html/MainHead.php")

        ?>
    <title>Mnt Proveedor</title>

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
            <h1>Mnt Proveedor</h1>

            <ol class="breadcrumb">
                <li class="item"><a href="../home"><i class='bx bx-home-alt'></i></a></li>

                <li class="item">Mantenimiento de Proveedor</li>

            </ol>
        </div>

        <div id="modalContainer2"></div>



        <div class="card mb-30">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h3>Listado de Proveedores</h3>
                <br>
                <button type="button" class="btn btn-dark" data-toggle="modal" onclick="loadnewProveedores()" >Nuevo</button>
            </div>

            <div class="card-body">
                <table id="tablaproveedores" name="tablaproveedores" class="table display responsive nowrap">
                    <thead>
                            <th>Fecha de Creación</th>
                            <th>Razon Social</th>
                            <th>Ruc</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Dirección</th>
                            <th>Acciones</th>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal Guardar Empleado -->
        <?php
            require_once("new-proveedores.php")
            ?>
         <!-- Modal Edit Empleado -->
         <?php
            require_once("edit-proveedores.php")
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