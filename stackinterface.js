// STACK INTERFACE QUESTION



class stack { //stack class
    constructor() {
        this.a = [];
        this.top = -1; //tells that the stack is empty
        // this.a.length=length;

    }
    isEmpty() { 
        if (this.top == -1) {
            return true;
        }
        else {
            return false;
        }
    }
    isFull() {
        if (this.a.length - 1 == this.top) {
            return true;
        }
        else {
            return false;
        }
    }
    push(element) {
        this.top++;
        return this.a.push(element); 
    }
    pop() {

        if (!this.isEmpty()) {
            this.top--;
            return this.a.pop();

        }
        else {
            console.log("underflow");
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.a[this.a.length - 1];

        }
        else {
            console.log("is empty");
        }
    }

    max(){
        console.log(this.a.length);
    }
   
}


const s=new stack();

// 
// s.push(2);
// s.max();
// s.pop();
// s.max();

console.log(s.max());
console.log(s.push(1));
console.log(s.push(2));
console.log(s.pop());
console.log(s.max());
