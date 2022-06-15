import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  @Input() heroe!: Heroe;

  constructor(private sanitizer: DomSanitizer, public router: Router) {}

  ngOnInit(): void {

  }

  detalles(heroe:Heroe) {
    let id = heroe.id;
    let casa=heroe.casaheroe
    this.router.navigateByUrl('heroes/'+casa+'/'+ id);
  }

}
