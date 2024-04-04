import { CanActivateFn } from '@angular/router';
import { JwtService } from './services/jwt.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const jwtService = inject(JwtService);
  const user = jwtService.getUserFromJwt();

  if (user!= null){
    return user.admin
  }
  
  return false;
};
