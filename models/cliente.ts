class Camara{
    nombre:string;
    precioMax:number;
    direccion:string;
    equipos:Equipo[]=new Array();

    constructor(nombre:string,precioMax:number,direccion:string){
        this.nombre=nombre;
        this.precioMax=precioMax;
        this.direccion=direccion;
    }
    
    addEquipo(Equipo:Equipo):void{
        this.equipos.push(Equipo);
    }

    get totalPrecioEquipos(): number {
        let total = 0;
        for(let equipo of this.equipos) {
            total += equipo.precioEnfriador;
        }
        return total;
    }
}
