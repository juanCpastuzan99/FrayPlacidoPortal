import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TracerService } from './tracer.service';
import { CreateTracerDto } from './dto/create-tracer.dto';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';

@Controller('tracer')
export class TracerController {
  constructor(private readonly tracerService: TracerService) {}
  @Post('update') @UseGuards(FirebaseAuthGuard) update(@Body() dto: CreateTracerDto) { return this.tracerService.update(dto); }
  @Get('stats') @UseGuards(FirebaseAuthGuard) getStats() { return this.tracerService.getStats(); }
}
