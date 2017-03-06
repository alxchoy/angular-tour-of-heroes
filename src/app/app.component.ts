import { Component } from '@angular/core';

export class Hero {
  id:number;
  name:string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
})

// el ngModel me sirve para actualizar data en lugares distintos y relacionados, haciendo que un valor
// se actualice para todos los que lo están utilizando.

export class AppComponent  {
  title: string = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
