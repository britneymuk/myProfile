import { Component, OnInit } from '@angular/core';
// @ts-ignore
import AOS from 'aos';

import {NgbToast} from '@ng-bootstrap/ng-bootstrap';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  
  constructor() { }
  show1 = false;
  show2 = false;
  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: false
    });
    
  }
  downloadResume(){
    const pdfUrl = './assets/Resume.pdf';
    const pdfName = 'Resume';
    FileSaver.saveAs(pdfUrl, pdfName);
    this.showSuccess1();
  }
  downloadCV(){
    const pdfUrl = './assets/CV.pdf';
    const pdfName = 'CV';
    FileSaver.saveAs(pdfUrl, pdfName);
    this.showSuccess2();
  }
  showSuccess1(){
    this.show1 = true;
  }
  showSuccess2(){
    this.show2 = true;
  }
  
}
