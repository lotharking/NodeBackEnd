import { Injectable } from '@nestjs/common';
import { Libro } from './interfaces/libros.interfaces';

@Injectable()
export class LibrosService {

    private readonly libros: Libro[] = [];

    /** Buscar indice */
    private findId(id: number): number {
        let indice: number;
        this.libros.forEach(function(Libro: Libro, index: number) {
            if(Libro.libro_id === id)
                indice=index;
        })
        return indice;
    }

    // Creacio de libros
    crearLibro(infoLibro) {
        let lastId: number;

        function addId(matrixLibros): number {
            if (matrixLibros.length > 0)
                return lastId = matrixLibros[matrixLibros.length -1].libro_id + 1;
            else
                return lastId = 1;
        }

        let nuevoLibro = {
            libro_id: addId(this.libros),
                ...infoLibro
        };
        this.libros.push(nuevoLibro);
    }    

    /** Listar todos los libros */
    ListarTodo(){
        return this.libros;
    }

    /** Buscar libro especifico */
    infoLibro(id: number): Libro {
        return this.libros[this.findId(id)];
    }

    /** editar libro */
    editarLibro(id: number, infoLibro: Libro): Libro {
        const indice = this.findId((id));
        console.log(indice);
        this.libros.splice(indice, 1, infoLibro);
        console.log(this.libros);
        return this.libros[indice];
    }

    /** Borrado */
    eliminarLibro(id: number) {
        const indice = this.findId(id);
        this.libros.splice(indice,1);
    }

}
