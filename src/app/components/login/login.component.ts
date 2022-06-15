import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  public loginInvalid: boolean | undefined;
  private formSubmitAttempt: boolean | undefined;
  private returnUrl: string | undefined;
  logueado: boolean | undefined;
  usuario: any;
  hide = true;
  @Output() conectado = new EventEmitter<boolean>();
  @Output() nombreUsuario = new EventEmitter<string>();
  @Output() token = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    private service: SharedService
  ) {}
//inicializamos el formulario con la vista
  async ngOnInit() {
    this.form = this.fb.group({
      usuario: ['', Validators.required],

      password: ['', Validators.required],
    });
  }
//funcion para enviar los datos del formulario de login
  async onSubmit() {
    this.loginInvalid = false;

    this.formSubmitAttempt = false;

    if (this.form.valid) {
      console.log('enviando');
      try {
        const usuario = this.form.get('usuario')!.value;

        const password = this.form.get('password')!.value;

        (await this.service.login(usuario, password))
          .pipe()
          .subscribe((data: string) => {
            this.logueado = data != 'error' ? true : false;
            if (this.logueado) {
              this.conectado.emit(true);
              let fechaborrado = Date.now() + 3600000;

              localStorage.setItem('token', data);
              localStorage.setItem('borrado', fechaborrado.toString());

              this.token.emit(localStorage.getItem('token')!);
              this.router.navigate(['/casas/todas']);
            } else {
              this.loginInvalid = true;
            }
          });
      } catch (err) {
        console.log(err);
        this.loginInvalid = true;
        this.logueado = false;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
