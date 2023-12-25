import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',

})
export class ParentComponent {
  aquaticCreatures = ['shark', 'dolphin', 'octopus'];

  constructor(){}

  addAquaticCreature(newAquaticCreature : any) {
    // Normal change detection
    this.aquaticCreatures.push(newAquaticCreature);

    // Change detection strategy on push
    // this.aquaticCreatures = [...this.aquaticCreatures, newAquaticCreature]
  }

  foo(){
    
  }
}

/**
  By default, Angular 2+ performs change detection on all components (from top to bottom) every time something changes in your app. 
  A change can occur from a user event or data received from a network request.
  
  Change detection is very performant, but as an app gets more complex and the amount of components grows, 
  change detection will have to perform more and more work.

  One solution is to use the OnPush change detection strategy for specific components. 
  This will instruct Angular to run change detection on these components and their sub-tree only 
  when new references are passed to them versus when data is mutated.
*/