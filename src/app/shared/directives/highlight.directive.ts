import { AfterViewInit, Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective implements OnInit, AfterViewInit{
    constructor(private elem: ElementRef){}
    private elementStyleRef: any;
    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        this.elementStyleRef = this.elem.nativeElement.style;
    }

    @HostListener("mouseover") onMouseOver(){
        this.elementStyleRef.color = "red";
    }

    @HostListener("mouseleave") onMouseLeave(){
        this.elementStyleRef.color = "black";
    }
}