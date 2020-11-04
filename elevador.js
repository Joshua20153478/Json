class Elevador{
    constructor(pisosTotales, capacidad){
        this._pisoActual = 1; 
        this._estadoPuerta = true;
        this._capacidad = capacidad;
        this._pisosTotales = pisosTotales;
    }

    get pisoActual(){
        return this._pisoActual;
    }

    get estadoPuerta(){
        return this._estadoPuerta;
    }

    get capacidad(){
        return this._capacidad;
    }

    get pisosTotales(){
        return this._pisosTotales;
    }

    get estadoPuerta(){
        if(_estadoPuerta){
            return "abierta";
        } else{
            return "cerrada";
        }
    }

    moverse(pisoDestino){
        this.cerrarPuerta();
        if(this._pisoActual < pisoDestino){
        while(this._pisoActual < pisoDestino)
        _subir();
    } else {
        while(this._pisoActual > pisoDestino)
        _bajar();
        this.abrirPuerta();
    }
}
    _subir(_estadoPuerta){
        if(!_estadoPuerta && this._pisoActual < this._pisosTotales){
        this._pisoActual++;
    }
}
    
    _bajar(){
        if(!this._estadoPuerta && this._pisoActual < this._pisosTotales){
            this._pisoActual--;

        }
    }
}

e1 = new Elevador;

Number(console.log(e1._subir(5, 600)));

console.log(e1._bajar(2, 600));
