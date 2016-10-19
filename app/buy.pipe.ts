import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "buy",
  pure: false
})
export class BuyPipe implements PipeTransform{
  transform(input: Album[], havePurchased) {
    var output: Album[] = [];
    if (havePurchased === "bought"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].bought === true) {
          output.push(input[i]);
         }
       }
       return output;
     } else if(havePurchased === "notBought") {
        for(var i = 0; i < input.length; i++) {
          if (input[i].bought === false) {
            output.push(input[i]);
           }
        }
        return output;
      } else{
        return input;
    }
  }
}
