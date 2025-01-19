class SLL {
    // constructor, other methods, removed for brevity
    addFront(value) {
        var newNode = new SLLNODE(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;

    }
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);

console.log(SLL);

// -==========================================================================


class SLL {
    // constructor, other methods, removed for brevity
    removeFront() {
        if (this.head == null) {
            return this.head;
    }
    var removeNode = this.head;
    this.head = removeNode.next;
    removeNode.next = null;
    return this.head;
}
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
console.log(mySLL);
mySLL.removeFront(0);

console.log(mySLL);


// ===========================================================================










class SLL {
    // constructor, other methods, removed for brevity
    front() {
        if(this.head == null){
            return null;
        else{
            
            return this.head.value;
        }
        }


    }
}

var mySLL = new SLL();
console.log(mySLL.font());
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);

// ====================================================================

class SLL{
    display(){
        var listStr = " ";
        if (this.head == null) {
            return "Empty List";
    }
        listStr += this.head.value;
        var runner = this.head.next;
        while(runner!= null){
            listStr += "," + runner.value;
            runner = runner.next;
        }

        return listStr;
            }

        }

var mySLL = new SLL();

mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
console.log(mySLL.display());


