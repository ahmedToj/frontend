import { Component,OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit {
  @Input()
  type :  'button' | 'submit'  = 'submit';
  @Input()
  text :string = 'Submit';
  @Input()
  bgColor!:"#e72929";
  @Input()
  color!:"white";
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem=12;
  @Output()
  OnClick=new EventEmitter();

  
    constructor() { }
  
    ngOnInit(): void {
    }

}
