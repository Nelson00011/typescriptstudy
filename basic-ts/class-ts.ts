//Classes: every class is also an interface. 
interface Customer {
    /** saves the customer somewhere */
    save (): void
}

class Customer {};

const customer = new Customer{};
customer.save = function (){};

