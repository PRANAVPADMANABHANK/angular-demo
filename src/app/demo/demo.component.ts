import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {

  title: string = "Demo Component";
  @Input() message!: String; // message is an input property, so it should assign from the parent component.

  constructor() {
    // console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) { //ngOnchanges() takes a parameter called 'changes'. 
    // console.log('ngOnChanges Hook Called');
    // console.log(this.message);
    // console.log(changes);
    
  }

  // ngOnInit(){
  //   console.log('ngOnInit Hook called')
  // }

  // ngDoCheck(){
  //   console.log('ngDoCheck Hook called');
    
  // }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit Hook called');
    
  // }

  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked Hook called');
    
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit Hook called');
    
  // }

  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked Hook called');
    
  // }

  // ngOnDestroy(){
  //   console.log('ngDestroy Hook called');
    
  // }
}
