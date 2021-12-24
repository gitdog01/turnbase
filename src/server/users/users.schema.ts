import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User {
  @Prop()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop({
    unique: true,
    required: true,
    index: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  password: string;

  @Prop()
  deckId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
