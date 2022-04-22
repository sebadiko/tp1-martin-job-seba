export class Estadio{
    public Nombre: string;
    public Latitud: number;
    public Longitud: number
    

    constructor(pNombre: string, pLatitud?: number, pLogitud?: number){
        this.Nombre = pNombre;
        this.Latitud = pLatitud;
        this.Longitud = pLogitud;
       
    }
}