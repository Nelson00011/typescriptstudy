//Further Defining Types
type ContactName = string;
type ContactStatus = 'active' | 'inactive' | 'new'
type ContactBirthDate = Date | number | string
type Awesome = Contact['id']

interface Address {
    street: string;
    province: string;
    postalcode: string;
}

interface ContactEvent {
    contactId: Contact['id'];
}

interface ContactDeleteEvent extends ContactEvent {
//TODO
}

interface ContactStatusChangeEvent extends ContactEvent {
    oldStatus: Contact['status'];
    newStatus: Contact['status'];
}

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    email?: string;
}

interface ContactEvents {
    deleted: ContactDeleteEvent;
    statusChanged: ContactStatusChangeEvent;
    //etc..
}
let primaryContact: Contact = {
    id: 12345,
    name: "John Doe",
    status: 'active'
}

//Keyof Operatoe

type ContactFields = keyof Contact 

function getValue<T, U extends keyof T>(source: T, propertyName: U){
    return source[propertyName];
}

const value = getValue({ min: 1, max: 200}, "")

function toContact(nameOfContact: string | Contact): Contact {
if (typeof nameOfContact === "object"){
    return {
        id: nameOfContact.id,
        name: nameOfContact.name,
        status: nameOfContact.status
    }
}
    else {
        return {
            id: 0, 
            name: nameOfContact,
            status: "active"
        }
    }

}

const myType = { min: 1, max: 200}
function save(source: typeof myType) {}

// Example Status Editors
function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void
        ) {
        if (eventName === "statusChanged"){
            handler({contactId: 1, oldStatus: 'active', newStatus: 'inactive'})
        }
    }
    
handleEvent("statusChanged", event => event)

