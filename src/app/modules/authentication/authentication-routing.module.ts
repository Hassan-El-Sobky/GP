import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoggedInGuard } from './gurads/logged-in.guard';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin'
    },
    {
        path: 'signin',
        component: SignInComponent,
        canActivate:[LoggedInGuard]
     
        
    },
    {
        path: 'signup',
        component: SignUpComponent,
    },

    //   { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule {
    static componentsDeclarations = [
   
        SignInComponent,
        SignUpComponent,
 
    
    ];
}
