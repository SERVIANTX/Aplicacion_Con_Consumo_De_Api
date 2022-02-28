<div id="mdlEditPedido" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <h5>Editar Categoria</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">

                <form id="formEditCategoria">

                    <input type="hidden" name="txtId" id="txtId">

                    <div class="card-body">


                        <div class="col-md-12">

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
                                <input type="text" id="txtFecha_pedido" name="txtFecha_pedido" class="form-control"
                                    required>
                            </div>

                            <div class="form-group">
                                <label>Fecha de Envio</label>
                                <input type="text" id="txtFecha_envio" name="txtFecha_envio" class="form-control"
                                    required>
                            </div>

                            <div class="form-group">
                                <label>Estado</label>
                                <input type="text" id="txtEstado" name="txtEstado" class="form-control" required>
                            </div>

                        </div>



                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <a type="submit" onclick="Editar()" class="btn btn-primary">Guadar</a>
                        <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                    </div>
                </form>


            </div>


        </div>
    </div>
</div>