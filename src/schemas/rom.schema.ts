import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RomDocument = Rom & Document;

@Schema()
export class Rom {
    @Prop({ required: true }) name: string;
    @Prop({ required: true }) platform: string;
    @Prop({ required: true }) file: string;
    @Prop({ required: false }) image: string;
};

export const RomSchema = SchemaFactory.createForClass(Rom);