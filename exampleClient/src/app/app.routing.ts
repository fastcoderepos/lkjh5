import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SwaggerComponent } from 'src/app/swagger/swagger.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './core/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './extended/core/core.module#CoreExtendedModule',
  },
  { path: 'swagger-ui', component: SwaggerComponent, canActivate: [AuthGuard] },
  {
    path: '',
    loadChildren: './extended/admin/admin.module#AdminExtendedModule',
  },
  {
    path: '',
    loadChildren: './extended/account/account.module#AccountExtendedModule',
  },
  {
    path: 'reporting',
    loadChildren: './reporting-module/reporting.module#ReportingModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    loadChildren: './extended/entities/test/test.module#TestExtendedModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'scheduler',
    loadChildren: './scheduler/scheduler.module#SchedulerModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: ErrorPageComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
