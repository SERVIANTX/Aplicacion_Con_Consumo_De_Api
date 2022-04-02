<!-- Modal -->
<div id="mntempleado" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="post" id="producto_form">
                <div class="modal-header">
                    <h5 id="lbltitulo" class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <div class="form-group">
                        <label>Imagen</label>
                        <input type="text" id="txtimagen" name="txtimagen" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Nombre </label>
                        <input type="text" id="txtnombre" name="txtnombre" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellidos</label>
                        <input type="text" id="txtapellido" name="txtapellido" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Dirección</label>
                        <input type="text" id="txtdireccion" name="txtdireccion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Documento de Identidad</label>
                        <input type="text" id="txtdocumento" name="txtdocumento" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Correo</label>
                        <input type="text" id="txtcorreo" name="txtcorreo" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" id="txtcontraseña" name="txtcontraseña" class="form-control" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" onclick="guardarEmpleado()">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>