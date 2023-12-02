import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective{
    constructor(private elem: ElementRef){}

    @HostListener("mouseover") onMouseOver(){
        this.elem.nativeElement.style.color = "red";
    }

    @HostListener("mouseleave") onMouseLeave(){
        this.elem.nativeElement.style.color = "black";
    }
}