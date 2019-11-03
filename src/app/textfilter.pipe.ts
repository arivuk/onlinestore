import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textfilter'
})
export class TextfilterPipe implements PipeTransform {

  transform(value: any,field:string,searchtext: string): any {
    console.log("searchtext",searchtext)
    if(searchtext){
      return value.filter(a=>{
        return a[field].indexOf(searchtext) >=0;
      });
    }else{
      return value;
    }
  }

}
