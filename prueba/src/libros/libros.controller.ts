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
    infoLibros(@Param() id: number): Libro {
        return this.librosService.infoLibro(parseInt(id['id']));
    }

    @Post()
    createLibro(@Body() infoLibro: CrearLibroDto) {
        return this.librosService.crearLibro(infoLibro);
    }

    @Put(':id')
    editarLibro(@Param() id: string, @Body() ActualizarLibro: Libro) {
        return this.librosService.editarLibro(parseInt(id['id']), ActualizarLibro);
    }

    @Delete(':id')
    eliminarLibro(@Param() id: string) {
        return this.librosService.eliminarLibro(parseInt(id['id']));
    }

}
