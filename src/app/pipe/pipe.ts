import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchByName'
})
export class SearchPipe implements PipeTransform {
    public transform(value, term: string) {
        if (!term) return value;
        return value.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    }
}