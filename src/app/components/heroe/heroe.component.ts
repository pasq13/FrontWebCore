import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  @Input() heroe!: Heroe;
  @Input() casa!: string;
  constructor(private sanitizer: DomSanitizer, public router: Router) {}

  ngOnInit(): void {}
  //funcion que obtiene el id y la casa del heroe seleccionado para verlo
  detalles(heroe: Heroe) {
    let id = heroe.id;
    let casa = heroe.casaheroe.toLowerCase();
    this.router.navigateByUrl('heroes/' + casa + '/' + id);
  }
}
