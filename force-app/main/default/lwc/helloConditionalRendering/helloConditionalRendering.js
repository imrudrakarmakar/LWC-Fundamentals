import { LightningElement, track } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    
    isVisible = false
    showLabel = 'Show Data'
    handleClick(event) {
        const label = event.target.label;
        if(label === 'Show Data') {
            this.showLabel = 'Hide Data'
            this.isVisible = true
        } else if(label === 'Hide Data') {
            this.showLabel = 'Show Data'
            this.isVisible = false
        }
    }
    
    name
    changeHandler(event) {
        this.name = event.target.value
    }

    get isShow() {
        return this.name == 'hello'
    }

    // falsy values in JS
    // x = 0, false, undefined, null, ""
}