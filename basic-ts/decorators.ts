//DECORATORS in Typescript
//Method, Class, Property Decorator
//tsconfig.json must have experimentalDecorators: true,
// emitDecoratorsMetadata: true, & install corresponding package in .json

interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

function authorize(role:string){
    return function(target:any, property:string, descriptor: PropertyDescriptor){
    const wrapped = descriptor.value
    
    descriptor.value = function () {
        if(!currentUser.isAuthenticated()){
            throw Error ("User is not authenticated");
        }
        if (!currentUser.isInRole(role)){
            throw Error(`User not in role ${role}`);
        }
        try {
        return wrapped.apply(this,arguments);
    }
}

function freeze(constructor:Function){
Object.freeze(constructor)
Object.freeze(constructor.prototype)

}

function singleton(constructor: any){
    return class Singleton extends constructor{
        static_instance = null;

        constructor(...args){
            super(...args);
            if(Singleton._instance){
                throw Error("Duplicate Instance")
            }
            Singleton._instance = this
        }
    }
}
//constructor function is passed as a decorator:

function auditable(target: object, key: string | symbol) {
    // get the initial value, before the decorator is applied
    let val = target[key];

    // then overwrite the property with a custom getter and setter
    Object.defineProperty(target, key, {
        get: () => val,
        set: (newVal) => {
            console.log(`${key.toString()} changed: `, newVal);
            val = newVal;
        },
        enumerable: true,
        configurable: true
    })
}



// @log
@freeze
@singleton
class ContactRepository {
    @autiable
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        console.trace(`ContactRepository.getContactById: BEGIN`);

        const contact = this.contacts.find(x => x.id === id);

        return contact;
    }

    @authorize("ContactEditor")
    save(contact: Contact): void {
        console.trace(`ContactRepository.save: BEGIN`);

        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }

        console.debug(`ContactRepository.save: END`);
    }
}