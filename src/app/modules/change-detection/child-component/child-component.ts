import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data!: string[];
}