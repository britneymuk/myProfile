import { Component, OnInit,HostListener } from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  top:any;
  left:any;
  expand=false;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: false
    });
  }
  
  toContact(){
    document.getElementById('contact')!.scrollIntoView({behavior:"smooth"});
  }
  
  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; }) {
    this.top=($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
 }
  
}
