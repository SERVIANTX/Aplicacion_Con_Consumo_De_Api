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
                        <label>Nombre del Empleado</label>
                        <input type="text" id="txtnombre" name="txtnombre" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" id="txtapellido_paterno" name="txtapellido_paterno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" id="txtapellido_materno" name="txtapellido_materno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Numero de Documento</label>
                        <input type="text" id="txtnumero_documento_identidad" name="txtnumero_documento_identidad" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Pais</label>
                        <input type="text" id="txtpais" name="txtpais" class="form-control" required>
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