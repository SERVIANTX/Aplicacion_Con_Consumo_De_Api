<!doctype html>
<html lang="es">

<head>

    <?php
            require_once("../html/MainHead.php")
        ?>
    <title>Mnt Producto</title>

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
            <h1>Mnt Producto</h1>

            <ol class="breadcrumb">
                <li class="item"><a href="../home"><i class='bx bx-home-alt'></i></a></li>

                <li class="item">Mantenimiento de Producto</li>

            </ol>
        </div>

        <div class="card mb-30">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h3>Listado de Productos</h3>
                <br>
                <button onClick="nuevo()" class="btn btn-primary" id="btn-nuevo">Nuevo</button>
            </div>

            <div class="card-body">
                <table id="producto_data" class="table display responsive nowrap">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Descuento</th>
                            <th>Cupon</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>

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
    <script type="text/javascript" src="mntproducto.js"></script>
</body>

</html>
