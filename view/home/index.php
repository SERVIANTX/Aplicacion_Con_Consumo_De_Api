<!doctype html>
<html lang="es">

<head>

    <?php
            require_once("../html/MainHead.php");
        ?>
    <title>Inicio</title>

    <link rel="icon" type="image/png" href="../../assets/img/favicon.png">
</head>

<body>

    <!-- Start Sidemenu Area -->
    <?php
            require_once("../html/MainMenu.php");
        ?>
    <!-- End Sidemenu Area -->

    <!-- Start Main Content Wrapper Area -->
    <div class="main-content d-flex flex-column">

        <!-- Top Navbar Area -->
        <?php
            require_once("../html/MainNavbar.php");
            ?>
        <!-- End Top Navbar Area -->

        <!-- Breadcrumb Area -->
        <div class="breadcrumb-area">
            <h1>Dashboard</h1>

            <ol class="breadcrumb">
                <li class="item"><a href="../home"><i class='bx bx-home-alt'></i></a></li>

                <li class="item">Dashboard</li>

            </ol>
        </div>
        <!-- End Breadcrumb Area -->

        <div class="welcome-area">
            <div class="row m-0 align-items-center">
                <div class="col-lg-5 col-md-12 p-0">
                    <div class="welcome-content">
                        <h1 class="mb-2">Hola, administrador bienvenido!</h1>
                        <p class="mb-0">Solo haz algo mejor</p>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12 p-0">
                    <div class="welcome-img">
                        <img src="../../assets/img/welcome-img.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <!-- End Welcome Area -->

        <!-- Stats Area -->
        <div class="ecommerce-stats-area">
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-stats-card-box">
                        <div class="icon">
                            <i class='bx bxs-user-check'></i>
                        </div>
                        <span class="sub-title">Suscripción ganada</span>
                        <h3>23.7k <span class="badge"><i class='bx bx-up-arrow-alt'></i> 26.0%</span></h3>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-stats-card-box">
                        <div class="icon">
                            <i class='bx bxs-badge-dollar'></i>
                        </div>
                        <span class="sub-title">Ingresos generados</span>
                        <h3>15.1k <span class="badge badge-red"><i class='bx bx-down-arrow-alt'></i> 45.5%</span></h3>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-stats-card-box">
                        <div class="icon">
                            <i class='bx bx-purchase-tag'></i>
                        </div>
                        <span class="sub-title">Ventas Trimestrales</span>
                        <h3>30.9k <span class="badge"><i class='bx bx-up-arrow-alt'></i> 32.1%</span></h3>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-stats-card-box">
                        <div class="icon">
                            <i class='bx bx-shopping-bag'></i>
                        </div>
                        <span class="sub-title">Ordenes recibidas</span>
                        <h3>10.5k <span class="badge"><i class='bx bx-up-arrow-alt'></i> 56.9%</span></h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Stats Area -->

        <!-- Start -->
        <div class="row">
            <div class="col-lg-10 col-md-12">
                <div class="card mb-30">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h3>Resumen de ingresos</h3>

                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i class='bx bx-dots-horizontal-rounded'></i>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class='bx bx-show'></i> View
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class='bx bx-edit-alt'></i> Edit
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class='bx bx-trash'></i> Delete
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class='bx bx-printer'></i> Print
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class='bx bx-download'></i> Download
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="revenue-summary-content">
                            <div class="d-sm-flex">
                                <div class="pr-4 border-right">
                                    <p class="mb-1">Ingresos netos</p>
                                    <h5 class="mb-0">
                                        <span class="font-weight-bold">$50,525</span>
                                        <span class="primary-text">+8.71%</span>
                                    </h5>
                                </div>

                                <div class="px-4 border-right">
                                    <p class="mb-1">Venta</p>
                                    <h5 class="mb-0">
                                        <span class="font-weight-bold">$20,520</span>
                                        <span class="danger-text">+2.82%</span>
                                    </h5>
                                </div>

                                <div class="px-4">
                                    <p class="mb-1">Costos</p>
                                    <h5 class="mb-0">
                                        <span class="font-weight-bold">$7,317</span>
                                        <span class="primary-text">+10.2%</span>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="revenue-summary-chart" class="extra-margin"></div>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4">
                <div class="new-product-box">
                    <div class="icon">
                        <i class='bx bx-shopping-bag'></i>
                    </div>
                    nuevos productos
                    <span class="sub-text d-block font-weight-bold">1.3K</span>
                </div>

                <div class="new-user-box">
                    <div class="icon">
                        <i class='bx bx-user-pin'></i>
                    </div>
                    Usuarios nuevos
                    <span class="sub-text d-block font-weight-bold">2.5K</span>
                </div>

                <div class="upcoming-product-box">
                    <div class="icon">
                        <i class='bx bx-cart-alt'></i>
                    </div>
                    Próximos productos
                    <span class="sub-text d-block font-weight-bold">1.1K</span>
                </div>
            </div>


        </div>
        <!-- End -->

        <div class="flex-grow-1"></div>

        <!-- Start Footer End -->
        <?php
            require_once("../html/MainFooter.php");
            ?>
        <!-- End Footer End -->

    </div>
    <!-- End Main Content Wrapper Area -->
    <?php
            require_once("../html/MainJS.php");
        ?>
</body>

</html>