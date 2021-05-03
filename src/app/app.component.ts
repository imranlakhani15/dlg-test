import { Component, OnInit } from '@angular/core';
import { Faq } from './model/faq';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  faqs: Faq[] = [];
  openIndex: number;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getFaqsData().subscribe((data) => {
      this.faqs = data;
    });
  }

  toggle(index) {
    if (this.openIndex === index) {
      return false;
    }
    this.closeAllAccordion();
    setTimeout(() => {
      const allContainers = document.querySelectorAll('.accordion');
      allContainers[index].classList.remove('collapsed');
      this.openIndex = index;
    }, 50);
  }

  closeAllAccordion(): void {
    const collapsibleDiv = document.querySelectorAll('.accordion');
    collapsibleDiv.forEach((el) => el.classList.add('collapsed'));
  }
}
