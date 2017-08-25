import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], criteria: any): any {
    //console.log(value, items, criteria);
        return (items || []).filter(item =>{
           for (let key in item ) {
             if((""+item[key]).includes(criteria)){
                return true;
             }
           }
           return false;
        });
    }
}