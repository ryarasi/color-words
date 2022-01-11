import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputWord = '';

  inputEnter = (event: any) => {
    if (event.key == 'Enter') {
      this.searchWord();
    }
  };
  searchWord() {
    console.log('The word is ', this.inputWord);
  }
}
