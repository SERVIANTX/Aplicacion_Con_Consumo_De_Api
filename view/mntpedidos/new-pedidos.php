<!-- Modal -->
<div id="mdlpedido" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="post" id="pedido_form">
                <div class="modal-header">
                    <h5 id="lbltitulo" class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <div class="form-group">
                        <label>Empleado</label>
                        <input type="text" id="txtEmpleado" name="txtEmpleado" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Cliente</label>
                        <input type="text" id="txtCliente" name="txtCliente" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Dirección</label>
                        <input type="text" id="txtDireccion" name="txtDireccion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Pedido</label>
                        <input type="text" id="txtFecha_pedido" name="txtFecha_pedido" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Envio</label>
                        <input type="text" id="txtFecha_envio" name="txtFecha_envio" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Estado</label>
                        <input type="text" id="txtEstado" name="txtEstado" class="form-control" required>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" onclick="guardar()">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>