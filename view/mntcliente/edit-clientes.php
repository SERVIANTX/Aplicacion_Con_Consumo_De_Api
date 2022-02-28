<div id="mdlEditCliente" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5>Editar clientes</h5>
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
                        <label>Nombre del Cliente</label>
                        <input type="text" id="txtNombrecliente" name="txtNombrecliente" class="form-control" required>
                        
                    </div>

                    <div class="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" id="txtApellidopaterno" name="txtApellidopaterno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" id="txtApellidomaterno" name="txtApellidomaterno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Direccion</label>
                        <input type="text" id="txtDireccion" name="txtDireccion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Documento de Identidad</label>
                        <input type="text" id="txtDocumentoidentidad" name="txtDocumentoidentidad" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Correo</label>
                        <input type="text" id="txtCorreo" name="txtCorreo" class="form-control" required>
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