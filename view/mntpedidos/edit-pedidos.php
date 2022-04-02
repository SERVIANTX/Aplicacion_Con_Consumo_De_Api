<div id="mdlEditPedido" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <h5>Editar Estado</h5>
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
                                <label>Estado</label>
                                <select name="txtEstado" class="form-control" id="txtEstado">
                                   
                                </select>
                            </div>

                        </div>



                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <a type="submit" onclick="EditarPedido2()" class="btn btn-primary">Guardar</a>
                        <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                    </div>
                </form>


            </div>


        </div>
    </div>
</div>