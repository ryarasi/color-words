import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputWord = '';
  images: any[] = [];
  loading = false;
  lastSearchedWord = '';
  showImages = false;
  notSatisfied = false;
  currentYear = new Date().getFullYear(); // Calculating current year for the footer
  github = 'https://github.com/ryarasi/color-words';

  constructor(
    private http: HttpClient,
    private clipboard: Clipboard,
    private toastService: HotToastService
  ) {}

  //  Method that checks if hte user hit the enter key while focused in the input bar. If yes, calls the search method
  inputEnter = (event: any) => {
    if (event.key == 'Enter') {
      this.searchWord();
    }
  };

  // Checks whether it is the starting point or not
  isStartingPoint() {
    return (
      !this.loading && !this.images.length && !this.lastSearchedWord.length
    );
  }

  //  Checks whether to show the template for when the search is complete
  isSearchComplete() {
    return !this.loading && this.images.length;
  }

  //  Checks whether to show the no results template
  noResultsFound() {
    return !this.loading && !this.images.length && this.lastSearchedWord;
  }

  // The method that gets the index of the colors for the image of the index passed in
  colorIndex(index: number) {
    const colorsLength = this.images[index]['colors']?.length;
    if (this.notSatisfied) {
      return colorsLength > 0 ? 1 : 0;
    } else {
      return 0;
    }
  }

  // When the user clicks the "Not Satisfied?" button
  toggleNotSatisfied() {
    this.showImages = false;
    this.notSatisfied = !this.notSatisfied;
  }

  // The main method that makes the requests to the API with the search query
  searchWord() {
    this.lastSearchedWord = this.inputWord;
    this.loading = true;
    const url = `${environment.apiBaseUrl}/images?query=${this.inputWord}`;
    this.http.get<any>(url).subscribe((data) => {
      this.loading = false;
      this.images = data;
      console.log('Search Results => ', { images: this.images });
    });
  }

  // Shows/hides images
  toggleShowImages() {
    this.showImages = !this.showImages;
  }

  //  Copies the color code of the image of the index to the clipboard
  copyColorCode(index: number) {
    const code = this.images[index]['colors'][this.colorIndex(index)];
    this.clipboard.copy(code);
    this.toastService.success(`Copied ${code} to your clipboard!`);
  }

  // Resets everything back to initial state
  resetSearch() {
    this.inputWord = '';
    this.lastSearchedWord = '';
    this.images = [];
  }
}
