<?php

if (isset($_POST)) {
    print_r('<div class="row">
    <div class="col" id="form-nueva-orden">
        <div class="card-nueva-orden card p-4">

            <h4 class="tituloNuevaOrden" ><b>Nueva orden de servicio<b></h4>

            <form class="">
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
                    <label class="tienda-span-modal-mto form-control" id="tienda-cliente" name="tienda-span-modal-mto"><strong class="text-center" id="tienda-span">Coloca el CR para mostrar</strong></label>
                </div>
                    </div>

                    <div class="col-5">
                    <div class="form-group">
                    <label><b>Estatus</b></label>
                    <select class="form-control" name="status-new-orden">
                    <option>Abierto</option>
                    <option>Cerrado</option>
                    </select>
                </div>
                    </div>


                </div>

                <div class="row">
                    <div class="col-5">
                        <div class="form-group">
                            <label><b>Folio</b></label>
                            <input class="form-control" placeholder="Escribe el folio">
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="form-group">
                            <label><b>Categoria</b></label>
                            <select class="form-control" name="" id="optionsNuevaOrden">
                                <option id="optionComputer" value="Computadora">Computadora</option>
                                <option id="optionVozyDat" value="Voz y Datos">Voz y datos</option>
                                <option id="optionCCTV" value="CCTV">CCTV</option>
                                <option id="optionMto" value="Mantenimiento">Mantenimiento</option>
                                <option id="optionPrints" value="Impresoras">Impresoras</option>
                                <option id="optionAccesorios" value="Accesorios">Accesorios</option>
                                <option id="optionIMAC" value="IMAC">IMAC</option>
                                <option id="optionRefaccion" value="Refacciones">Refacciones</option>
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
                <textarea class="form-control" id="textareaNueva-orden" placeholder="Escriba la solución"></textarea>
                </div>
                </div>
                </div>
                
                
                        <div class="row">
                            <div class="text-center col-12">
                            <button type="submit" class="btn btn-success m-3">Registrar</button>
                            <button type="" class="btn btn-danger m-3" id="btn-cancelar-orden"><a href="index.php">Cancelar</a></button>
                            </div>
                        </div>
            </form>

        </div>
    </div>
</div>');
}
