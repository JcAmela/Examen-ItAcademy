class Equipo {
    public frigoriasEnfriador: string;
    public volumenEnfriador: number;
    public precioEnfriador: number;

    constructor(volumenEnfriador: number, frigoriasEnfriador: string, precioEnfriador: number) {
        this.frigoriasEnfriador = frigoriasEnfriador;
        this.volumenEnfriador = volumenEnfriador;
        this.precioEnfriador = precioEnfriador;
    }
}