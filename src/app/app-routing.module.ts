import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasasComponent } from './components/casas/casas.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: "", component: CasasComponent},
  { path: "casas", component: CasasComponent, canActivate: [LoginGuardGuard] },
  { path: "heroes/:casaheroe/:id", component: HeroeComponent, canActivate: [LoginGuardGuard] },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
