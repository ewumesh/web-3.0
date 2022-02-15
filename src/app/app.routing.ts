import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('./modules/home/home.module'). then(r => r.HomeModule)},
    
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: '404' },
	{ path: '*', redirectTo: 'notfound' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,
        //     {
		// 	scrollPositionRestoration: 'enabled'
		//   }
          )
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }