import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){
        console.log(elementRef, "elementRef in constructor")
    }
    ngOnInit(){
        console.log(this.elementRef.nativeElement, "elementRef")
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}