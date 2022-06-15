import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasasComponent } from './components/casas/casas.component';
import { EditheroeComponent } from './components/editheroe/editheroe.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: "", component: CasasComponent},
  { path: "casas/:casa", component: CasasComponent, canActivate: [LoginGuardGuard] },
  { path: "heroes/:casa/:id", component: EditheroeComponent, canActivate: [LoginGuardGuard] },];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
