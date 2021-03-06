
<!doctype html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Vendors Min CSS -->
    <link rel="stylesheet" href="assets\css\vendors.min.css">
    <!-- Style CSS -->
    <link rel="stylesheet" href="assets\css\style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="assets\css\responsive.css">

    <title>Acceso</title>

    <link rel="icon" type="image/png" href="assets\img\favicon.png">
</head>

<body>

    <!-- Start Login Area -->
    <div class="login-area bg-image">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="login-form">
                    <div class="logo">
                        <a href="dashboard-analytics.html"><img src="assets\img\logo.png" alt="image"></a>
                    </div>

                    <h2>Bienvenido</h2>

                    <form id="frmLogin">

                        <div class="form-group">
                            <input type="email" class="form-control" name="txtEmail" id="txtEmail" placeholder="Correo Electrónico">
                            <span class="label-title"><i class='bx bx-user'></i></span>
                        </div>

                        <div class="form-group">
                            <input type="password" class="form-control" name="txtPassword" id="txtPassword" placeholder="Contraseña">
                            <span class="label-title"><i class='bx bx-lock'></i></span>
                        </div>

                        <div class="form-group">
                            <div class="remember-forgot">
                                <label class="checkbox-box">Recuerdame
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                        </div>
                        <!-- <input type="hidden" name="enviar" value="si"> -->
                        <button type="submit" class="login-btn">Acceder</button>


                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End Login Area -->


    <!-- Vendors Min JS -->
    <script src="assets\js\vendors.min.js"></script>

    <!-- ApexCharts JS -->
    <script src="assets\js\apexcharts\apexcharts.min.js"></script>
    <script src="assets\js\apexcharts\apexcharts-stock-prices.js"></script>
    <script src="assets\js\apexcharts\apexcharts-irregular-data-series.js"></script>
    <script src="assets\js\apexcharts\apex-custom-line-chart.js"></script>
    <script src="assets\js\apexcharts\apex-custom-pie-donut-chart.js"></script>
    <script src="assets\js\apexcharts\apex-custom-area-charts.js"></script>
    <script src="assets\js\apexcharts\apex-custom-column-chart.js"></script>
    <script src="assets\js\apexcharts\apex-custom-bar-charts.js"></script>
    <script src="assets\js\apexcharts\apex-custom-mixed-charts.js"></script>
    <script src="assets\js\apexcharts\apex-custom-radialbar-charts.js"></script>
    <script src="assets\js\apexcharts\apex-custom-radar-chart.js"></script>

    <!-- ChartJS -->
    <script src="assets\js\chartjs\chartjs.min.js"></script>
    <div class="chartjs-colors">
        <!-- To use template colors with Javascript -->
        <div class="bg-primary"></div>
        <div class="bg-primary-light"></div>
        <div class="bg-secondary"></div>
        <div class="bg-info"></div>
        <div class="bg-success"></div>
        <div class="bg-success-light"></div>
        <div class="bg-danger"></div>
        <div class="bg-warning"></div>
        <div class="bg-purple"></div>
        <div class="bg-pink"></div>
    </div>

    <!-- jvectormap Min JS -->
    <script src="assets\js\jvectormap-1.2.2.min.js"></script>
    <!-- jvectormap World Mil JS -->
    <script src="assets\js\jvectormap-world-mill-en.js"></script>
    <!-- Custom JS -->
    <script src="assets\js\custom.js"></script>

    <!-- jquery-validation -->
    <script src="assets/js/jquery-validation/jquery.validate.min.js"></script>
    <script src="assets/js/jquery-validation/additional-methods.min.js"></script>


    <script type="text/javascript">

    $(function () {
        $.validator.setDefaults({
            submitHandler: function () {

                $.ajax({
                        method: "POST",
                        url: "https://apiangelamaria.000webhostapp.com/api/seguridad/login",
                        data: {
                            email: $("#txtEmail").val(),
                            password: $("#txtPassword").val()
                        }
                    })
                    .done(function (response) {

                        sessionStorage.setItem('_token', response.data.token);
                        window.location="view/home/";
                        // $.ajax({
                        //     method: "GET",
                        //     url: "https://apiangelamaria.000webhostapp.com/api/datosAdmin/"+$("#txtEmail").val(),
                        //     headers: {"Authorization": "Bearer "+ _token}
                        //     })
                        //     .done(function( response ) {
                        //         $.each(response,function(indice,fila){

                        //             let admin = fila;

                        //             localStorage.setItem("Admin", JSON.stringify(fila));

                        //             });

                        //             window.location="view/home/";
                        //     });

                    });


            }
        });


        $('#frmLogin').validate({
            rules: {
                txtEmail: {
                    required: true
                },
                txtPassword: {
                    required: true
                }
            },
            messages: {
                txtEmail: {
                    required: "Ingrese el email"
                },
                txtPassword: {
                    required: "Ingrese el password"
                }
            },
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                element.closest('.form-group').append(error);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('is-invalid');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
            }
        });
    });
</script>


</body>

</html>