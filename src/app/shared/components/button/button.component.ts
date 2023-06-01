import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'DEFAULT';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Output() click = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }
  emitEvent() {
    this.click.emit('Custom event emitted from child component');
  }

}
