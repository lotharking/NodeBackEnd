import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('libros')
export class LibrosController {
    @Get()
    buscarLibros(): string {
        return 'aqui mostrara los libros'
    }

    @Get(':id')
    infoLibros(@Param() params): string{
        return `Informacion del libro numero #${params.id}`;
    }

}
