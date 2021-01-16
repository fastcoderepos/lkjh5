import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { AuthGuard } from 'src/app/core/auth-guard';
import { TestDetailsExtendedComponent, TestListExtendedComponent, TestNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: TestListExtendedComponent, canDeactivate: [CanDeactivateGuard], canActivate: [AuthGuard] },
  {
    path: ':id',
    component: TestDetailsExtendedComponent,
    canDeactivate: [CanDeactivateGuard],
    canActivate: [AuthGuard],
  },
  { path: 'new', component: TestNewExtendedComponent, canActivate: [AuthGuard] },
];

export const testRoute: ModuleWithProviders = RouterModule.forChild(routes);
