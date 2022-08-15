import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Profile, ProfileSchema} from "./profile/schema/profile.schema";

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/test'),
             MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])],
  controllers: [AppController, ProfileController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
