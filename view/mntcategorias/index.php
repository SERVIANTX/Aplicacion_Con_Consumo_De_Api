<!doctype html>
<html lang="es">

<head>

    <?php
            require_once("../html/MainHead.php")

    ?>

    <title>Mnt Categorias</title>

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
            <h1>Mnt Categorias</h1>

            <ol class="breadcrumb">
                <li class="item"><a href="../home"><i class='bx bx-home-alt'></i></a></li>

                <li class="item">Mantenimiento de Categorias</li>

            </ol>
        </div>

        <div id="modalContainer1"></div>



        <div class="card mb-30">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h3>Listado de Categorias</h3>
                <br>
                <button type="button" class="btn btn-dark" data-toggle="modal" onclick="loadnewCategoria()" >Nuevo</button>
            </div>

            <div class="card-body">
                <table id="tablacategorias" name="tablacategorias" class="table display responsive nowrap">
                    <thead>
                            <th>Fecha de Creacion</th>
                            <th>Nombre de Categoria</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal Guardar categorias -->
        <?php
            require_once("new-categorias.php")
        ?>
        <!-- Modal Edit categorias -->
        <?php
            require_once("edit-categorias.php")
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