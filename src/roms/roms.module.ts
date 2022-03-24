import { Module } from '@nestjs/common';
import { RomsController } from './roms.controller';
import { RomsService } from './roms.service';

@Module({
  controllers: [RomsController],
  providers: [RomsService]
})
export class RomsModule {}
