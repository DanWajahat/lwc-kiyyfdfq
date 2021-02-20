import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Footer extends LightningElement {
  @api navigationClick;

  handleNavigation = event => {
    this.navigationClick(event);
  }
}
