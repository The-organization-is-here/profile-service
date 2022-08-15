import {Body, Controller, Get, Post} from '@nestjs/common';
import { ProfileService } from './profile.service';
import {CreateProfileDto} from "./dto/profile.dto";
import {Profile} from "./schema/profile.schema";
import {Observable} from "rxjs";

@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfiles(): Observable<Profile[]> {
    return this.profileService.getProfiles();
  }

  @Post()
  addProfile(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.profileService.addProfile(createProfileDto);
  }

}
