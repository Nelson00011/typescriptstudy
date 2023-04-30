//DECORATORS in Typescript
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

function authorize(target:any, property:string, descriptor: PropertyDescriptor){
    const wrapped = descriptor.value
    
    descriptor.value = function () {
        if(!currentUser.isAuthenticated() ){
            throw Error ("User is not authenticated");
        }
        try {
            return wrapped.apply(this.arguments);
        } catch (error){
            //TODO
            throw error;
        }
    }
}

@log
class ContactRepository {
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