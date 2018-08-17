import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
declare var UIkit: any;
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() header: string = "Confirm";
  @Input() detail: string = "Are you confirm?";
  @Input() confirm: string = "Confirm";
  @Input() cancel: string = "Cancel";
  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickConfirm(){
    this.onClick.emit(true);
    UIkit.modal("#confirm-modal").hide();
  }

  clickCancel(){
    this.onClick.emit(false);
  }
}
