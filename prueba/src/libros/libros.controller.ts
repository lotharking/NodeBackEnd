import { Controller, Post , Body, Get, Param, Put, Delete} from '@nestjs/common';

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
    createLibro(@Body() infoLibro): string {
        return `este libro tiene ${infoLibro.numpags} paginas`;
    }

    @Put(':id')
    editarLibro(@Param() params) {
        return `El libro ${params.id} se actualizo`;
    }

    @Delete(':id')
    eliminarLibro(@Param() params) {
        return `El libro ${params.id} se elimino`;
    }

}
