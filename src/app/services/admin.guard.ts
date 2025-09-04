import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn() && loginService.getUserRole() === 'ADMIN') {
    return true;
  }

  // 🚫 Si no es admin o no está logueado → redirigir al login
  router.navigate(['login']);
  return false;
};
