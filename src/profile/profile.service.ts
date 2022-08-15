import { Injectable } from '@nestjs/common';
import {CreateProfileDto} from "./dto/profile.dto";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Profile, ProfileDocument} from "./schema/profile.schema";
import {from, Observable} from "rxjs";
import {hash} from 'bcrypt';

@Injectable()
export class ProfileService {

  constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,) {
  }

  async addProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    createProfileDto.password = await hash(createProfileDto.password, 10);
    const createdProfile = new this.profileModel(createProfileDto);
    return createdProfile.save();
  }

  getProfiles(): Observable<Profile[]> {
    return from(this.profileModel.find().exec());
  }
}
