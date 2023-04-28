class Todo { 
    //must define properties ahead of time. 
    id: string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;