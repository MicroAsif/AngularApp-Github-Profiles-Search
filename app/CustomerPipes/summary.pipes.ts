import { Pipe, PipeTransform } from "angular2/core";

@Pipe({
    name : 'summary'
})
export class SummaryPipes implements PipeTransform { 
    transform(value: string, args: string []) {
        if (value)
            return value.substr(0,42) + " ..";
    }

    
}