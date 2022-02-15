import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {path: 'login', loadChildren: () => import('./modules/authentication/login/login.module'). then(r => r.LoginModule)},
    
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: '404' },
	{ path: '*', redirectTo: 'notfound' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,{
			scrollPositionRestoration: 'enabled'
		  })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }