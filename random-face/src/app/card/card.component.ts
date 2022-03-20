import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user: any;
  @Output() refreshRequest = new EventEmitter<any>();


  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  constructor() {}

  onRefresh() {
    this.refreshRequest.emit();
  }

  ngOnInit(): void {}
}
