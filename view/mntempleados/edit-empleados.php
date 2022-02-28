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
                        <label>Nombre del Empleado</label>
                        <input type="text" id="txtNombre" name="txtNombre" class="form-control" required>
                        
                    </div>

                    <div class="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" id="txtApellido_paterno" name="txtApellido_paterno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" id="txtApellido_materno" name="txtApellido_materno" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Numero de Documento</label>
                        <input type="text" id="txtNumero_documento_identidad" name="txtNumero_documento_identidad" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Pais</label>
                        <input type="text" id="txtPais" name="txtPais" class="form-control" required>
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










