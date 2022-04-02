<div id="mdlEditEmpleado" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5>Editar empleado</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
          </button>
      </div>

      <div class="modal-body">
       
        <form id="formEditEmpleado">

          <input type="hidden" name="txtId" id="txtId">

                <div class="card-body">


                <div class="col-md-12">

                    <div class="form-group">
                        <label>Imagen</label>
                        <input type="text" id="txtImagen" name="txtImagen" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Nombre </label>
                        <input type="text" id="txtNombre" name="txtNombre" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellidos</label>
                        <input type="text" id="txtApellido" name="txtApellido" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Dirección</label>
                        <input type="text" id="txtDireccion" name="txtDireccion" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Documento de Identidad</label>
                        <input type="text" id="txtDocumento" name="txtDocumento" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Correo</label>
                        <input type="text" id="txtCorreo" name="txtCorreo" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" id="txtContraseña" name="txtContraseña" class="form-control" required>
                    </div>

                 </div>


                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <a type="submit" onclick="EditarEmpleado()" class="btn btn-primary">Guardar</a>
                  <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                </div>
              </form>
      </div>
    </div>
  </div>
</div>










