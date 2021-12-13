import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  @Input() message: string = '';
  @Input() title: string = '';
  @Output() closeToast = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeToast.emit('onToastClose');
  }
}
