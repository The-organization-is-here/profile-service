import { Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfiles(): [string] {
    return this.profileService.getProfiles();
  }

  @Post()
  addProfile(): string {
    return this.profileService.addProfile();
  }
}
