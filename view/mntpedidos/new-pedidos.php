<!-- Modal -->
<div id="mdlpedido" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="post" id="pedido_form">
                <div class="modal-header">
                    <h5 id="lbltitulo" class="modal-title">Nuevo Pedido</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <div class="form-group">
                        <label>Empleado</label>
                        <input type="text" id="txtempleado" name="txtempleado" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Cliente</label>
                        <input type="text" id="txtcliente" name="txtcliente" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Dirección</label>
                        <input type="text" id="txtdireccion" name="txtdireccion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Pedido</label>
                        <input type="text" id="txtfecha_pedido" name="txtfecha_pedido" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Envio</label>
                        <input type="text" id="txtfecha_envio" name="txtfecha_envio" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Estado</label>
                        <input type="text" id="txtestado" name="txtestado" class="form-control" required>
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