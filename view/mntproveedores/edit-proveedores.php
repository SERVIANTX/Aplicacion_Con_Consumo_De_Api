<div id="mntEditProveedores" class="modal fade" role="dialog">
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

          <input type="hidden" name="txtIdproveedores" id="txtIdproveedores">

                <div class="card-body">
                <div class="col-md-12">
                <div class="form-group">
                        <label>Razon Social</label>
                        <input type="text" id="txtRazon_social" name="txtRazon_social" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Ruc</label>
                        <input type="text" id="txtRuc" name="txtRuc" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Telefono</label>
                        <input type="text" id="txtTelefono" name="txtTelefono" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Correo</label>
                        <input type="text" id="txtCorreo" name="txtCorreo" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Dirección</label>
                        <input type="text" id="txtDireccion" name="txtDireccion" class="form-control" required>
                    </div>


                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <a type="submit" onclick="EditarProveedores()" class="btn btn-primary">Guardar</a>
                  <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                </div>
         </form>
      </div>
    </div>
  </div>
</div>