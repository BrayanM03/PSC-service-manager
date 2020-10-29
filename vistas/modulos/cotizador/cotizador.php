<?php

if(isset($_POST)){
    print_r('<div class="row">
    <div class="col-xl-12">
        <h1 class="mb-5 text-center text-primary">Cotizador</h1>
    </div>

<!-----form--->

<div class="col-xl-5">
    <div class="row">
        <div class="col-xl-12">
        <div class="card">
            <div class="card-body">
                    <h4 class="card-title mb-4">Agregar concepto</h4>
                    <form action="" id="form-add-concept">
                            <div class="form-group row">
                                        <div class="col-xl-6">
                                            <label for="concepto">Concepto</label>
                                            <input type="text" class="form-control" id="concepto" placeholder="Escribe un concepto" required>
                                        </div>

                                    
                                        <div class="col-xl-3">
                                            <label for="concepto">Precio</label>
                                            <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">$</span>
                                            </div>
                                            <input type="text" class="form-control" id="precio" placeholder="0.00" required>
                                            </div>
                                            
                                        </div>

                                        <div class="col-xl-3">
                                            <label for="concepto">Cantidad</label>
                                            <input type="Number" class="form-control" id="cantidad" value="1" min="1" max="99">
                                        </div>
                            </div>

                                <div class="form-group">
                                    <button class="btn btn-success btn-xl" type="submit">Agregar</button>
                                    <button class="btn btn-danger btn-xl" type="reset">Cancelar</button>
                                </div>
                    </form>
        </div> 
    </div>
        </div>


        <div class="col-xl-12" id="wrapper-form"></div>
    </div>
    
</div>


<!-----Tabla--->

<div class="col-xl-7" id="wrapper-cotizacion">
 <!---carga de Ajax -->
</div>
</div>');
}

?>