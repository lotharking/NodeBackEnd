import { Injectable } from '@nestjs/common';
import { Libro } from './interfaces/libros.interfaces';

@Injectable()
export class LibrosService {

    private readonly libros: Libro[] = [];

    // Creacio de libros
    crearLibro(infoLibro) {
        let lastId: number;

        function addId(matrixLibros): number {
            if (matrixLibros.length > 0)
                lastId = matrixLibros[matrixLibros.length -1].libro_id + 1;
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

}
