import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';
// import { AuthGuard } from 'src/app/core/auth-guard';

// import { TestDetailsComponent, TestListComponent, TestNewComponent } from './';

const routes: Routes = [
  // { path: '', component: TestListComponent, canDeactivate: [CanDeactivateGuard], canActivate: [ AuthGuard ] },
  // { path: ':id', component: TestDetailsComponent, canDeactivate: [CanDeactivateGuard], canActivate: [ AuthGuard ] },
  // { path: 'new', component: TestNewComponent, canActivate: [ AuthGuard ] },
];

export const testRoute: ModuleWithProviders = RouterModule.forChild(routes);
