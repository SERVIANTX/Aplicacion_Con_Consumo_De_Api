<!-- Modal -->
<div id="mntproveedores" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="post" id="proveedor_form">
                <div class="modal-header">
                    <h5 id="lbltitulo" class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                <div class="form-group">
                        <label>Razon Social</label>
                        <input type="text" id="txtrazon_social" name="txtrazon_social" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Ruc</label>
                        <input type="text" id="txtruc" name="txtruc" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Telefono</label>
                        <input type="text" id="txttelefono" name="txttelefono" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Correo</label>
                        <input type="text" id="txtcorreo" name="txtcorreo" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Dirección</label>
                        <input type="text" id="txtdireccion" name="txtdireccion" class="form-control" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" onclick="guardarproveedores()">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>