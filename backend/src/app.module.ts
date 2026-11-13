import { Module } from '@nestjs/common';
import { EjemploModule } from './modules/ejemplo/ejemplo.module';

@Module({
  imports: [EjemploModule],
})
export class AppModule {}
