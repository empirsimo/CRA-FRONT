import { Routes } from '@angular/router';
import { RoleGuard } from '../shared/role.guard';

 export const FULL_ROUTES: Routes = [

 
         { path: 'dashboard', loadChildren: () => import('../home/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
         { path: 'activite', loadChildren: () => import('../home/activite/activite.module').then(m => m.ActiviteModule), canActivate:[RoleGuard], data: { roles : ['user']} }, 
         { path: 'listActivite', loadChildren: () => import('../home/list-activite/list-activite.module').then(m => m.ListActiviteModule) , canActivate:[RoleGuard], data: { roles : ['user']} },
         { path: 'listActiviteAdmin', loadChildren: () => import('../home/list-activite-admin/list-activite-admin.module').then(m => m.ListActiviteAdminModule), canActivate:[RoleGuard], data: { roles : ['admin']} },
         { path: 'users', loadChildren: () => import('../home/users/users.module').then(m => m.UsersModule), canActivate:[RoleGuard], data: { roles : ['admin']} } ,
         { path: 'contrat', loadChildren: () => import('../home/contrat/contrat.module').then(m => m.ContratModule), canActivate:[RoleGuard], data: { roles : ['admin']} } ,
         { path: 'service', loadChildren: () => import('../home/service/service.module').then(m => m.ServiceModule), canActivate:[RoleGuard], data: { roles : ['admin']} } ,
         { path: 'leaveRequest', loadChildren: () => import('../home/leave-request/leave-request.module').then(m => m.LeaveRequestModule), canActivate:[RoleGuard], data: { roles : ['user']} }, 
         { path: 'listLeave', loadChildren: () => import('../home/list-leave/list-leave.module').then(m => m.ListLeaveModule), canActivate:[RoleGuard], data: { roles : ['user']} }, 
         { path: 'listLeaveAdmin', loadChildren: () => import('../home/list-leave-admin/list-leave-admin.module').then(m => m.ListLeaveAdminModule), canActivate:[RoleGuard], data: { roles : ['admin']} },
         { path: 'profile', loadChildren: () => import('../home/profile/profile.module').then(m => m.ProfileModule) }, 
         { path: 'updatePassword', loadChildren: () => import('../home/update-password/update-password.module').then(m => m.UpdatePasswordModule) },
         { path: 'help', loadChildren: () => import('../home/help/help.module').then(m => m.HelpModule) },        
         { path: '', redirectTo: '/dashboard', pathMatch:'full'},
         //page error 404
         { path: '**', redirectTo: 'dashboard'},
         

]