import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'truncate',
})

export class Trucate implements PipeTransform{
    transform(text: string):string {
        if (text != null && text != undefined && text != '')
        {
            return text.trim();
        }
        return text;
    }
}