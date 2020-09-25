import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    // 入力されていたらheroes配列にpush
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  ngOnInit(): void {
  }
}
