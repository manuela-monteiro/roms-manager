import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RomsModule } from './roms/roms.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Monteiro:romsroom@roms-room.n9uox.mongodb.net/romsroom?retryWrites=true&w=majority'), RomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
