import { Controller, Post , Body, Get, Param, Put, Delete} from '@nestjs/common';
import { CrearLibroDto } from './dto/crear-libros.dto';

@Controller('libros')
export class LibrosController {
    @Get()
    buscarLibros(): string {
        return 'aqui mostrara los libros'
    }

    @Get(':id')
    infoLibros(@Param() id: number): string{
        return `Informacion del libro numero #${id}`;
    }

    @Post()
    createLibro(@Body() infoLibro: CrearLibroDto): string {
        return `este libro tiene ${infoLibro.pags} paginas`;
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
