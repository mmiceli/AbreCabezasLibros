class ItemDisponible {
    constructor(id,nombre,precio,cantidad,genero,imagen)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.genero=genero;
        this.imagen=imagen;
    }
}

class ItemCompra {
    constructor(id,nombre,precio,cantidad,costo,urlImagen)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.costo=costo;
        this.urlImagen=urlImagen;
    }
}