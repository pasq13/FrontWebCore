import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {

  constructor( public service: SharedService) { }
  heroes!: Heroe[];
  filterSearch: string = '';
  async ngOnInit(): Promise<void> {
   (await this.service.getHeroes()).subscribe(
      (data) => {
        console.log(data);
        if (data) {


        this.heroes = data;
        console.log(this.heroes );
      }
    },(error) => {
      console.error(error);
    }
    )

  }

}
