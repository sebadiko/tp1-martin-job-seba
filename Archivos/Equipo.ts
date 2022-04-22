import { number } from "yargs";

export class Equipo{
    private nombreEquipo: string;
    private codigoPais: string;
    public goles: number=0;
    public golTotal: number = 0;
    public puntosTotal : number = 0;
    public golSuplementario: number = 0;

    constructor(pNombre: string, pCodigo: string){
        if(pNombre.charAt(0) === "0" || pNombre.charAt(0) === "1" || pNombre.charAt(0) === "2" || pNombre.charAt(0) === "3" || pNombre.charAt(0) === "5" || pNombre.charAt(0) === "6" ||pNombre.charAt(0) === "7"  ||pNombre.charAt(0) === "8" || pNombre.charAt(0) === "9" || pNombre.length>50){
            this.nombreEquipo = null;
            this.codigoPais = null;
        }else{
            this.nombreEquipo = pNombre;
            this.codigoPais = pCodigo;
        }
        
    }

    public getNombre(){
        return this.nombreEquipo;
    }

    public getCodigo(){
        return this.codigoPais;
    }

    public sumarGol(){
        this.goles = this.goles + 1;
    }

    public sumarGolSuplementario(){
        this.golSuplementario = this.golSuplementario +1;
    }

    public sumarGolTotal(){
        this.golTotal = this.golTotal + this.goles + this.golSuplementario;
        this.goles = 0;
        this.golSuplementario = 0;
    }

    public puntosTotales(puntos : number){
        this.puntosTotal = this.puntosTotal + puntos;
    }
      
}