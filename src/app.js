import { LightningElement } from "lwc";

export default class App extends LightningElement {

  

  handleDestroy = event => {
    
   let field = this.template.querySelector(`[data-id="input"]`).value = '';
  }
 
}
