//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {

  constructor(val) {
    this.val = val;
    this.pointerVal = null;
  }

  get value() {
    return this.val;
  }

  get next() {
    return this.pointerVal;
  }

  set next(pointerVal) {
    this.pointerVal = pointerVal;
  }
}

export class List {
  constructor(data) {
    this.hd = null;
    this.size = 0;

    if(data) {
        let arr = data.map((node) => {
          let element = new Element(node);
          this.add(element);
      });
      return this;
    }
  }

  add(ele) {
    this.size++;

    if(this.hd == null){
        this.hd = ele;
    } else {
      let current = this.hd;
      this.hd = ele; 
      this.hd.next = current;
    }  
  }

  get length() {
    return this.size;
  }

  get head() {
    return this.hd;
  }

  toArray() {
    let arr = new Array();
    let current = this.head;
    arr.push(current.value);
    while(current.next) {
      arr.push(current.next.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let prev = null;
    let current = this.hd;
    let next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.hd = prev;
    return this;
  }
}
