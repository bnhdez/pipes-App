import { Pipe, PipeTransform } from "@angular/core";

// boris | toggleCase = 'BORIS'
// BORIS | toggleCase = 'boris'

@Pipe({
  // nombre a usar en implementacion
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  // yo defino que solo quiero string
  transform( value: string, toUpper:boolean = false ):string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
