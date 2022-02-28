<!-- Modal -->
<div id="mdlcategoria" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <form method="post" id="categoria_form">
                <div class="modal-header">
                    <h5 id="lbltitulo" class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <div class="form-group">
                        <label>Nombre de la Categoria</label>
                        <input type="text" id="txtNombre_categoria" name="txtNombre_categoria" class="form-control" required>
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