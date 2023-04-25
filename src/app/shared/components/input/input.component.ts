import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => InputComponent),
          multi: true
        }
      ]
})
export class InputComponent implements ControlValueAccessor, OnInit {
    
    
    ngOnInit(): void {
       console.log(this.iconName, 'ICONNAMEEE')
    }
    
    @Input() placeholder: string | null = '';
    @Input() value: string | null = '';
    @Input() iconName: string | null = '';

    onChange: any = () => {}
    onTouch: any = () => {}
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouch = fn;
    }
  
    writeValue(input: string) {
    }

}