import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotToastService } from '@ngneat/hot-toast';

const sampleImages = [
  {
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2018/08/mango-fee0d79.jpg?quality=90&resize=556,505',
    colors: ['#eba933', '#646723'],
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
    colors: ['#e6a61d', '#fde4ae'],
  },
  {
    image:
      'https://post.healthline.com/wp-content/uploads/2021/11/mango-mangos-732x549-thumbnail-732x549.jpg',
    colors: ['#353512', '#b0ab24', '#f9c1b9'],
  },
  {
    image:
      'https://www.saveur.com/uploads/2021/07/09/Mangoes-Its-Mango-Time-Vaughn-Stafford-Gray-Belle-Morizio.jpg?auto=webp',
    colors: ['#e5bb14', '#c5662d', '#e52b24'],
  },
  {
    image:
      'https://aseasyasapplepie.com/wp-content/uploads/frozen-mango-margarita.jpg',
    colors: ['#de9223', '#c6c7a5', '#5e8231'],
  },
  {
    image: 'https://solidstarts.com/wp-content/uploads/Mango_edited-scaled.jpg',
    colors: ['#cfa522', '#934b11', '#a0a742'],
  },
  {
    image:
      'https://think.kera.org/wp-content/uploads/2021/09/shutterstock_195715883.jpg',
    colors: ['#e89a33', '#fcdba8'],
  },
  {
    image: 'https://images.heb.com/is/image/HEBGrocery/001668455',
    colors: ['#d2802d', '#f0b64e', '#be4528'],
  },
  {
    image:
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/11/mango-mangos-1296x728-header.jpg?w=1155&h=1528',
    colors: ['#afab21', '#353308', '#f8c8bb'],
  },
  {
    image: 'https://images.heb.com/is/image/HEBGrocery/000321109',
    colors: ['#dca93c', '#c93e39', '#dd745a'],
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputWord = '';
  images: any[] = sampleImages;
  loading = false;
  lastSearchedWord = '';
  showImages = false;
  notSatisfied = false;
  currentYear = new Date().getFullYear();
  github = 'https://github.com/ryarasi/color-words';
  linkedin = 'https://www.linkedin.com/in/ryarasi/';
  constructor(
    private http: HttpClient,
    private clipboard: Clipboard,
    private toastService: HotToastService
  ) {}

  inputEnter = (event: any) => {
    if (event.key == 'Enter') {
      this.searchWord();
    }
  };

  isStartingPoint() {
    return (
      !this.loading && !this.images.length && !this.lastSearchedWord.length
    );
  }

  isSearchComplete() {
    return !this.loading && this.images.length;
  }

  noResultsFound() {
    return !this.loading && !this.images.length && this.lastSearchedWord;
  }

  colorIndex(index: number) {
    const colorsLength = this.images[index]['colors']?.length;
    if (this.notSatisfied) {
      return colorsLength > 0 ? 1 : 0;
    } else {
      return 0;
    }
  }

  toggleNotSatisfied() {
    this.showImages = false;
    this.notSatisfied = !this.notSatisfied;
  }

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

  toggleShowImages() {
    this.showImages = !this.showImages;
  }

  copyColorCode(index: number) {
    const code = this.images[index]['colors'][this.colorIndex(index)];
    this.clipboard.copy(code);
    this.toastService.success(`Copied ${code} to your clipboard!`);
  }

  resetSearch() {
    this.inputWord = '';
    this.lastSearchedWord = '';
    this.images = [];
  }
}
