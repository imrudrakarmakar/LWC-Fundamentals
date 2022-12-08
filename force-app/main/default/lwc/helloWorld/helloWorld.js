import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    /*------------------ Basics ----------------------*/
    name // undefined
    age = 22 // value initialized
    fullName1 = "Salesforce" // String
    showData = true // boolean
    // Object
    details = {
        name: "dummy name",
        place: "kolkata"
    }
    // Array
    userList1 = ["A", "B", "C"];

    /*---------------------- Data Binding ---------------*/
    // data binding
    fullName = "Salesforce Club"

    // two way data binding
    content = "content"
    changeHandler(event) {
        this.content = event.target.value;
    }

    /*-------------------- @track ------------------------*/
    
    // @track Properties
    @track address = {          // We are wrapping address with @track
        city: 'NYC',            // to tell JS engine that all the property
        postcode: 100016,       // has been tracked
        country: 'USA'
    }

    trackHandler(event) {
        // It's directly update the object
        this.address.city = event.target.value
    }

    /*
    // Without using @track
    address = { 
        city: 'NYC', 
        postcode: 100016,
        country: 'USA'
    }
    
    trackHandler(event) {
        // Best Practice: Generate a new copy
        // It's called split property
        this.address = {...this.address, "city": event.target.value}
    }
    */

    /*-------------- Getter Demo -------------------- */
    users = ["Jhon", "Sam", "Jack"]
    num1 = 10
    num2 = 20

    get firstUser() {
        return this.users[0]
    }

    get multiply() {
        return (this.num1 * this.num2)
    }
}