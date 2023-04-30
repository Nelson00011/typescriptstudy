//Modules:
//GLOBAL DECLARE BELOW
declare global {
    function formatDate(date: Date): string
}

export {}
//New file below:
const formattedDate = formateDate(new Date());

////MODULE EXAMPLE
class Customer {}

const customer = new Customer();
customer.save = function () {};

const myVar = window.MY_VAR;

//example of interface export
declare global {
    interface Window {
        MY_VAR: string; 
    }
}
export {}
