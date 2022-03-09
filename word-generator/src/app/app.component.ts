import { Component } from '@angular/core';
import words from 'src/utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  limit : number = 10;
  word: string = ''

  handleSliderChange= (event: Event)=>{
    this.limit = parseInt((event.target as HTMLInputElement).value)
  }

  generateWords = ()=>{
    this.word = words.slice(0, this.limit).join(' ');
  }
}
