import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to tic-tac-toe game';

  winMessage: string = '';
  isCross: boolean = false;
  itemArr = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) {}

  clickHandler(itemNum: number) {
    if (this.winMessage) {
      return this.toastr.success(this.winMessage);
    }
    if (this.itemArr[itemNum] !== 'empty') {
      return this.toastr.warning('Already taken');
    }

    this.itemArr[itemNum] = this.isCross ? 'cross' : 'circle';
    this.isCross = !this.isCross;

    this.checkIsWinner();
    return;
  }

  checkIsWinner = () => {
    //TODO make it modular
    if (
      this.itemArr[0] === this.itemArr[1] &&
      this.itemArr[0] === this.itemArr[2] &&
      this.itemArr[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArr[0]} won`;
    } else if (
      this.itemArr[3] !== 'empty' &&
      this.itemArr[3] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[5]
    ) {
      this.winMessage = `${this.itemArr[3]} won`;
    } else if (
      this.itemArr[6] !== 'empty' &&
      this.itemArr[6] === this.itemArr[7] &&
      this.itemArr[7] === this.itemArr[8]
    ) {
      this.winMessage = `${this.itemArr[6]} won`;
    } else if (
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[3] &&
      this.itemArr[3] === this.itemArr[6]
    ) {
      this.winMessage = `${this.itemArr[0]} won`;
    } else if (
      this.itemArr[1] !== 'empty' &&
      this.itemArr[1] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[7]
    ) {
      this.winMessage = `${this.itemArr[1]} won`;
    } else if (
      this.itemArr[2] !== 'empty' &&
      this.itemArr[2] === this.itemArr[5] &&
      this.itemArr[5] === this.itemArr[8]
    ) {
      this.winMessage = `${this.itemArr[2]} won`;
    } else if (
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[8]
    ) {
      this.winMessage = `${this.itemArr[0]} won`;
    } else if (
      this.itemArr[2] !== 'empty' &&
      this.itemArr[2] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[6]
    ) {
      this.winMessage = `${this.itemArr[2]} won`;
    }
  };

  reloadGame(): void {
    this.winMessage = '';
    this.isCross = false;
    this.itemArr = new Array(9).fill('empty');
  }
}
