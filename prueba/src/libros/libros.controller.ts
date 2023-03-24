import { Controller, Post , Body, Get, Param, Put, Delete} from '@nestjs/common';
import { CrearLibroDto } from './dto/crear-libros.dto';
import { Libro } from './interfaces/libros.interfaces';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {

    constructor(private librosService: LibrosService) {}

    @Get()
    buscarLibros(): Libro[] {
        return this.librosService.ListarTodo();
    }

    @Get(':id')
    infoLibros(@Param() id: number) {
        // return this.librosService.ListarTodo(id);
    }

    @Post()
    createLibro(@Body() infoLibro: CrearLibroDto) {
        return this.librosService.crearLibro(infoLibro);
    }

    @Put(':id')
    editarLibro(@Param() id: number, @Body() ActualizarLibro: CrearLibroDto): string {
        return `El libro ${id} se actualizo`;
    }

    @Delete(':id')
    eliminarLibro(@Param() id: number): string {
        return `El libro ${id} se elimino`;
    }

}
