import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "countrycode"
})
export class CountryCodePipe implements PipeTransform {
    transform(value: any, code: string) {
        switch (code) {
            case "US":
                return "+1 " + value;
            case "AUS":
                return "+18 " + value;
            case "UK":
                return "+3 " + value;
            default:
                return "+91 " + value;
        }
        
    }
}