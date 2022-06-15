import { Component, ViewChild,OnInit } from '@angular/core';
import {LoginComponent} from './components/login/login.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontwebcore';
  @ViewChild(LoginComponent) child: LoginComponent | undefined;
  fechaactual: number = Date.now();
  token = '';
  conectado:boolean =false;
  ngOnInit() {
    if(localStorage.getItem('borrado')!=null){
    if (parseInt(localStorage.getItem('borrado')!) > this.fechaactual) {
      if (localStorage.getItem('token')) {
        this.conectado = true;
      }
    } else {
      this.conectado = false;
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');

      localStorage.clear();
    }
  }
}
  login(event: boolean) {
    this.conectado = event;
  }
  logOut(event:any) {
    this.conectado = event;
    this.token = '';
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.clear();
  }
}
