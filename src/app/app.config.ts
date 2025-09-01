import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // ← Importar esto
import { routes } from './app.routes';
import { authInterceptorProviders } from './services/auth.interceptor'; // ← Ajusta la ruta según donde tengas tu interceptor

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // ← Agregar esta línea
    authInterceptorProviders, // ← Agregar tu interceptor
  ]
};