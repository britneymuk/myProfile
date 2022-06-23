import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target1 = document.querySelector('.tw1');
    const target2 = document.querySelector('.tw2');

    const writer1 = new Typewriter(target1, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 100,
      typeColor: 'white',
      cursorColor: 'white'
  
    })
    writer1
      .type('HI DEAR')
      .rest(500)
      .remove(7)
      .type('I AM BRITNEY')
      .rest(500)
      .remove(7)
      .type('A PROGRAMMER')
      .rest(500)
      .remove(15)
      .type('HAVE NO LIFE')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(15)
      .changeTypeColor('#ddc09a')
      .type('JUST KIDDING')
      .rest(500)
      .changeOps({ deleteSpeed: 100 })
      .remove(12)
      .changeTypeColor('white')
      .type('WELCOME TO MY PAGE')
      .rest(1500)
      .clear()
      .start()


  }

}
