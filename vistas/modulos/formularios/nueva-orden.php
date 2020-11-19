<?php

if (isset($_POST)) {
    print_r('<div class="row">
    <div class="col" id="form-nueva-orden">
        <div class="card-nueva-orden card p-4"> 

            <h4 class="tituloNuevaOrden" ><b>Nueva orden de servicio<b></h4>

            <form class="" id="formulario-nueva-orden">
                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                    <label for="exampleInputEmail1"><b>CR:</b></label></br>
                    <input type="text" class="form-control" id="cr-input-modal" name="cr-input-nuevaOrden" aria-describedby="emailHelp" placeholder="CR" autocomplete="off">

                    <div class="search-cr-container-hide" id="search-cr-container">
                    <ul id="select-mostrar-tienda" class="card lista-tiendas-busqueda" name="select-mostrar-tienda"></ul>
                    </div>
           
                </div>
                </div>
                
                
                <div class="col-6">
                <div class="form-group">
                <label><b>Fecha:</b></label></br>
                <input type="date" name="date-nuevaOrden" class="form-control">
                </div>
                </div>

                
                    <div class="col-12">
                    <div class="form-group">
                    <label><b>Cliente</b></label>
                    <input type="text" class="tienda-span-modal-mto form-control" id="tienda-cliente" name="tienda-span-modal-mto" placeholder="Coloca el CR para mostrar">
                </div>
                    </div>

                    <div class="col-6">
                    <div class="form-group nice-select-group">
                    <label><b>Estatus</b></label>
                    <select class="mt-2" id="select-status" name="status-new-orden">
                    <option value="Abierto">Abierto</option>
                    <option value="Cerrado">Cerrado</option>
                    </select>
                </div>
                    </div>


                </div>

                <div class="row">
                    <div class="col-5">
                        <div class="form-group">
                            <label><b>Folio</b></label>
                            <input type="number" class="form-control" name="folio-nueva-orden" placeholder="Escribe el folio">
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="form-group nice-select-group">
                            <label><b>Categoria</b></label>
                            <select class="" name="select-cat-nueva-orden" id="optionsNuevaOrden">
                                <option id="optionComputer" value="Computadora">Computadora</option>
                                <option id="optionVozyDat" value="Voz y Datos">Voz y datos</option>
                                <option id="optionCCTV" value="CCTV">CCTV</option>
                                <option id="optionMto" value="Mantenimiento">Mantenimiento</option>
                                <option id="optionPrints" value="Impresoras">Impresoras</option>
                                <option id="optionAccesorios" value="Accesorios">Accesorios</option>
                                <option id="optionIMAC" value="IMAC">IMAC</option>
                                <option id="optionRefaccion" value="Refacciones">Refacciones</option>  
                                <option id="optionRenovacion" value="Renovacion">Renovación Tecnológica</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div class="sub-categorias mb-5" id="subcategorias">
                    <div class="row">
                        <div id="col-1" class="col-6"></div>
                        <div id="col-2" class="col-6"></div>
                    </div>
                </div>

                <div class="row">
                <div class="col-12">
                <div class="form-group" id="area-solucion">
                <textarea class="form-control" name="solucion-nueva-orden" id="textareaNueva-orden" form="formulario-nueva-orden" placeholder="Escriba la solución"></textarea>
                </div>
                </div>
                </div>
                
                
                        <div class="row">
                            <div class="text-center col-12">
                            <div id="btn-insertar-orden-nueva" onclick="insertarNuevaOrden();" class="btn btn-success m-3">Registrar</div>
                            <button type="buttom" class="btn btn-danger m-3" id="btn-cancelar-orden"><a href="index.php">Cancelar</a></button>
                            </div>
                        </div>
            </form>

        </div>
    </div>
</div>');
}
