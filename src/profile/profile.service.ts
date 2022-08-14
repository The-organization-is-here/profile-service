import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  addProfile(): string {
    return 'Profile added';
  }

  getProfiles(): [string] {
    return ['profile1'];
  }
}
