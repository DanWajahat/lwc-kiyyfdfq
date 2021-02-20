import { LightningElement, track } from "lwc";

export default class App extends LightningElement {

 
 @track state = {
   page: { 
     number: 0
   },

  character: {
    
  }

 }

  handleNavigation = event => {
    this.changePageNumber(event.target.dataset.id)
    
  }

  changePageNumber = action => {
    switch(action) {
      case "previous":
      this.state.page.numer++;

    }
  }
 
}
