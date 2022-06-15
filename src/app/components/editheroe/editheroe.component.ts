import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from 'src/app/interfaces/heroe';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-editheroe',
  templateUrl: './editheroe.component.html',
  styleUrls: ['./editheroe.component.css'],
})
export class EditheroeComponent implements OnInit {
  constructor(
    public service: SharedService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}
  casa!: string;
  id!: number;
  selectedhero!: Subscription;
  heroe!: Heroe;
  //al iniciar obtenemos de la ruta la casa y la id para mostrar un heroe en especifico
  async ngOnInit(): Promise<void> {
    this.selectedhero = this.activatedroute.paramMap.subscribe(
      async (params) => {
        this.casa = params.get('casa')!;
        this.id = parseInt(params.get('id')!);
        await this.getHero(this.casa, this.id);
      }
    );
  }
  //funcion para obtener el heroe
  async getHero(casa: string, id: number) {
    (await this.service.getOneHeroe(casa, id)).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.heroe = data;
          console.log(this.heroe);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  //funcion para destruir la vista
  ngOnDestroy(): void {
    this.selectedhero.unsubscribe();
  }
}
