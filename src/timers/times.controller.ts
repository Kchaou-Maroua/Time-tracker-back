import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TimesService } from './times.service'; // Assurez-vous que l'importation est correcte
import { Time } from './times.entity';
import axios from 'axios';
@Controller('times')
export class TimesController {
  constructor(private readonly timesService: TimesService) {}
  //méthode dans le contrôleur qui effectue une requête HTTP
  async getData() {
    try {
      const response = await axios.get('http://localhost:5173/api/data');
      console.log(response.data);
      // Traitement supplémentaire de la réponse
    } catch (error) {
      console.error(error);
      // Gestion des erreurs
    }
  }
  @Get()
  findAll() {
    return this.timesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.timesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Time>) {
    return this.timesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Time>) {
    return this.timesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.timesService.remove(id);
  }
}
