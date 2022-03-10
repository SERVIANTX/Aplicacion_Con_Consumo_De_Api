<div id="mdlEditProducto" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5>Editar producto</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
          </button>
      </div>

      <div class="modal-body">
       
        <form id="formEditProducto">

          <input type="hidden" name="txtId" id="txtId">

                <div class="card-body">


                <div class="col-md-12">
                    <div class="form-group">
                        <label>Imagen del Producto</label>
                        <input type="text" id="txtImagenproducto" name="txtImagenproducto" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Nombre del Producto</label>
                        <input type="text" id="txtNombreproducto" name="txtNombreproducto" class="form-control" required>
                        
                    </div>
                    <div class="form-group">
                        <label>Categoria</label>
                        <input type="text" id="txtCategoriaproducto" name="txtCategoriaproducto" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Marca</label>
                        <input type="text" id="txtMarcaproducto" name="txtMarcaproducto" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Descripcion</label>
                        <input type="text" id="txtDescripcion" name="txtDescripcion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Stock</label>
                        <input type="text" id="txtStock" name="txtStock" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Precio Venta</label>
                        <input type="text" id="txtPrecioventa" name="txtPrecioventa" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Precio Compra</label>
                        <input type="text" id="txtPreciocompra" name="txtPreciocompra" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Lote</label>
                        <input type="text" id="txtLote" name="txtLote" class="form-control" required>
                    </div>

                 </div>


                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <a type="submit" onclick="EditarProducto()" class="btn btn-primary">Guadar</a>
                  <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                </div>
              </form>


      </div>

      
    </div>
  </div>
</div>