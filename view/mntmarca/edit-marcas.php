<div id="mdlEditMarca" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5>Editar Marca</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
          </button>
      </div>

      <div class="modal-body">
       
        <form id="formEditmarca">

          <input type="hidden" name="txtIdmarca" id="txtIdmarca">

                <div class="card-body">


                <div class="col-md-12">

                <div class="form-group">

                        <label>Nombre de la Marca</label>
                        <input type="text" id="txtNombre" name="txtNombre" class="form-control" required>
                        
                    </div>


                 </div>


                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <a type="submit" onclick="EditarMarca()" class="btn btn-primary">Guardar</a>
                  <button type="button" data-dismiss="modal" class="btn btn-secondary">Cancelar</button>
                </div>
              </form>
      </div>
    </div>
  </div>
</div>
