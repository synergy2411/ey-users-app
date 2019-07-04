import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector : "[app-highlight]"
})

export class HighLightDirective{

    @Input('myColor') myColor : string;

    @HostBinding("style.background-color") bgColor : any;

    @HostListener('mouseenter') onmouseenter(){
        this.bgColor = this.myColor;
    }

    @HostListener('mouseleave') onmouseleave(){
        this.bgColor = "transparent";
    }

    constructor(private elementRef : ElementRef){
        // console.log(this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }

}