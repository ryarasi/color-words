import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputWord = '';
  images = [];
  loading = false;
  lastSearchedWord = '';

  constructor(private http: HttpClient) {}

  inputEnter = (event: any) => {
    if (event.key == 'Enter') {
      this.searchWord();
    }
  };
  searchWord() {
    this.lastSearchedWord = this.inputWord;
    this.loading = true;
    console.log('The word is ', this.inputWord);
    const url = `${environment.apiBaseUrl}/images?query=${this.inputWord}`;
    this.http.get<any>(url).subscribe((data) => {
      this.loading = false;
      this.images = data;
      console.log('images ', { images: this.images });
    });
  }
}
