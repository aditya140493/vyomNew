import { LightningElement,track,wire,api } from 'lwc';


    import fetchAccount from '@salesforce/apex/ContactListObj.fetchAccount';
    import fetchContact from '@salesforce/apex/ContactListObj.getContacts';
   
    
    const columns = [{
        label: 'First Name',
        fieldName: 'FirstName'
    },
    {
        label: 'Last Name',
        fieldName: 'LastName'
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'email'
    },
    {
        label: 'Phone',
        fieldName: 'phone',
        type: 'phone'
    }
    
    ];
    
    const columnsOpp = [{
        label: 'Name',
        fieldName: 'Name'
    
    }
    
    ];
     
    
    export default class ContactList extends LightningElement {
       
    @track acc;
    @track con;
    message;
    msg;
    
    connectedCallback(){
    fetchAccount()
    .then(result => {
    this.acc = result;
    
    console.log(JSON.stringify(result));
    console.log("result",this.acc);
    })
    
    }
    
    
    contactFetch(event){
    this.message = event.target.value;
    console.log('Contact Id-->'+this.message);
    fetchContact({accountId : this.message})
    
    .then(result => {
    this.con = result;
    
    console.log(JSON.stringify(result));
    console.log("result1",this.con);
    })
    .catch(error =>{
    this.error = error;
    
    })
    this.msg = event.target.value;
    
    }
}