<!-- Modal -->
<div id="mntproducto" class="modal fade basicModalLG" role="dialog" aria-hidden="true">
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
                        <label>Nombre del Producto</label>
                        <input type="text" id="txtnombreproducto" name="txtnombreproducto" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Descripcion</label>
                        <input type="text" id="txtdescripcion" name="txtdescripcion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Stock</label>
                        <input type="text" id="txtstock" name="txtstock" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Precio Venta</label>
                        <input type="text" id="txtprecioventa" name="txtprecioventa" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Precio Compra</label>
                        <input type="text" id="txtpreciocompra" name="txtpreciocompra" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Lote</label>
                        <input type="text" id="txtlote" name="txtlote" class="form-control" required>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" onclick="guardarproducto()">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>