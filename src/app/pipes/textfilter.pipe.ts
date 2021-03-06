import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'textfilter'
})
//pipe para filtrar los heroes por nombre
export class TextfilterPipe implements PipeTransform {

  transform(heroes: Heroe[], filter: string): Heroe[] {
    if(!filter){
      return heroes;
    }else{
      return heroes.filter(heroe => heroe.nombre.toLowerCase().includes(filter.toLowerCase()));
    }
  }

}


