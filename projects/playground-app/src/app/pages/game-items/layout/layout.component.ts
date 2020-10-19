import { Component, AfterViewInit } from '@angular/core';
import { BlockComponent } from '@admin-panel/core';

@Component({
  selector: 'game-items-table-layout',
  template: `
  <div block>
    <ng-content></ng-content>
  </div>`
})
export class GameItemsTableLayout extends BlockComponent {

}