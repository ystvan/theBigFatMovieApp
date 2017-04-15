import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

//transforming every input to lowercase, so that we get more successful search methods

export class FilterPipe implements PipeTransform {
  transform(pipeData, pipeModiefier) {
    return pipeData.filter((eachItem) => {
      return eachItem['title'].toLowerCase().includes(pipeModiefier.toLowerCase()) ||
             eachItem['name'].toLowerCase().includes(pipeModiefier.toLowerCase());
    });
  }

}