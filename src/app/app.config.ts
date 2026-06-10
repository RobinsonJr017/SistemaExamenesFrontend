import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 
import { routes } from './app.routes';
import { authInterceptorProviders } from './services/auth.interceptor'; 

// 1. Importas los dos módulos de la librería que instalaste
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), 
    authInterceptorProviders, 
    
    // 2. Registras la librería dentro de importProvidersFrom para Standalone
    importProvidersFrom(
      NgxUiLoaderModule,
      NgxUiLoaderHttpModule // Este se encarga de mostrar el spinner automáticamente en cada petición HTTP
    )
  ]
};