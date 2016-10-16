import {customElement, bindable, containerless} from 'aurelia-framework';

@customElement('grid')
@containerless()
export class Grid {
  @bindable items;
}
