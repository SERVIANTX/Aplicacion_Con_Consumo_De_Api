<!-- Modal -->
<div id="mntcliente" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
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
                        <label>Nombre del Cliente</label>
                        <input type="text" id="txtnombrecliente" name="txtnombrecliente" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" id="txtapellidopaterno" name="txtapellidopaterno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" id="txtapellidomaterno" name="txtapellidomaterno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Direccion</label>
                        <input type="text" id="txtdireccion" name="txtdireccion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Documento de Identidad</label>
                        <input type="text" id="txtdocumentoidentitad" name="txtdocumentoidentitad" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Correo</label>
                        <input type="text" id="txtcorreo" name="txtcorreo" class="form-control" required>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" onclick="guardarcliente()">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>