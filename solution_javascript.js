class EventSourcer {
  constructor() {
    this.value = 0;
    this.arr = [];
    this.arr2 = [];
    this.final = [];
  }

  add(num) {
  	this.value = this.value + num;
  	this.arr.push(this.value);
  	return this.value
  }

  subtract(num) {
  	this.arr.push(this.value);
  	this.value = this.value - num;
  }

  undo() {
  	this.arr2.push(this.arr.pop());
  	if (this.arr.length !== 0) {
  	  	var length = this.arr.length;
  	  	this.value  = this.arr[length - 1];	
  		return this.value
  	} else {
  		this.value = 0;
  		return this.value 
  	}
  }
  redo() {
  	if(this.arr2.length !==0) {
  		var redoLength = this.arr2.length;
  		this.value = this.arr2[redoLength-1];
  		return this.value;
  	}else {
  		this.value = 0;
  		return this.value;
  	}
  }
  bulk_undo(num) {
  	var length = this.arr.length;
  	console.log("ARR", this.arr)
  	console.log(this.arr.splice(length - num + 1, num));
  	this.final.push(this.arr.splice(length - 1 - num, num));
  	var finalLength = this.final.length;
  	this.value = this.final[finalLength-1];
  	console.log("VALUe", this.value);
  }
  bulk_redo(num) {}
}

let sourcer = new EventSourcer();

sourcer.add(1);
sourcer.add(2);
sourcer.add(3);
sourcer.add(4);
sourcer.add(5);
sourcer.bulk_undo(3);
// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
