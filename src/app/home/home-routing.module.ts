import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const MyPath: Routes = [

// { path: '', component: HomeComponent,
// children : [
//   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
//   { path: 'activite', loadChildren: () => import('./activite/activite.module').then(m => m.ActiviteModule) }, 
//   { path: 'leaveRequest', loadChildren: () => import('./leave-request/leave-request.module').then(m => m.LeaveRequestModule) }, 
//   { path: 'listLeave', loadChildren: () => import('./list-leave/list-leave.module').then(m => m.ListLeaveModule) }, 
//   { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 
//  { path: 'updatePassword', loadChildren: () => import('./update-password/update-password.module').then(m => m.UpdatePasswordModule) },
//    { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
// ]},
 
//   { path: '', redirectTo: '/dashboard', pathMatch:'full'},
//   { path: '**', redirectTo: 'dashboard'},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(MyPath)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
