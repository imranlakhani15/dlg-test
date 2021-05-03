import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  _isCollapsed = true;
  @Input() headTitle: string;
  @Input() questionNumber: string;
  @Output() accordionClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  isCollapsed(): boolean {
    return this._isCollapsed;
  }

  collapse() {
    // this._isCollapsed = !this._isCollapsed;
    this.accordionClick.emit(true);
  }
}
