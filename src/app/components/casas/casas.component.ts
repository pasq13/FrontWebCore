import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from 'src/app/interfaces/heroe';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css'],
})
export class CasasComponent implements OnInit {
  constructor(
    public service: SharedService,
    private activatedroute: ActivatedRoute,
    public breakpointObserver: BreakpointObserver
  ) {
    //Observamos el tamaño de la pantalla para adaptar las columnas mostradas y hacer responsive el layout
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.columns = 1;
        }
        if (state.breakpoints[Breakpoints.Small]) {
          this.columns = 2;
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          this.columns = 3;
        }
        if (state.breakpoints[Breakpoints.Large]) {
          this.columns = 4;
        }
        if (state.breakpoints[Breakpoints.XLarge]) {
          this.columns = 5;
        }
      });
  }
  columns: number = 5;
  heroes!: Heroe[];
  filterSearch: string = '';
  casa!: string;

  selectedhouse!: Subscription;
  //al crear la vista cogemos de la ruta la casa a la que pertenecen y llamamos a la funcion
  async ngOnInit(): Promise<void> {
    this.selectedhouse = this.activatedroute.paramMap.subscribe((params) => {
      this.casa = params.get('casa')!;
      this.refresHouseHeroes(this.casa);
    });
  }
  //destruimos los datos de la subscription
  ngOnDestroy(): void {
    this.selectedhouse.unsubscribe();
  }
  //funcion para obtener los heroes dependiendo de la casa
  async refresHouseHeroes(casa: string) {
    (await this.service.getHeroes(casa)).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.heroes = data;
          console.log(this.heroes);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
