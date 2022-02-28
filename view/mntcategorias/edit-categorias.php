<div id="mdlEditCategoria" class="modal fade" role="dialog">
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
                                <label>Nombre de la Categoria</label>
                                <input type="text" id="txtNombre_categoria" name="txtNombre_categoria"
                                    class="form-control" required>
                            </div>

                            <div class="form-group">
                                <label>Estado</label>
                                <input type="text" id="txtEstado" name="txtEstado"
                                    class="form-control" required>
                            </div>

                        </div>



                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <a type="submit" onclick="EditarCategoria()" class="btn btn-primary">Guadar</a>
                        <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                    </div>
                </form>


            </div>


        </div>
    </div>
</div>