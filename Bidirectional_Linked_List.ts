class NodeObj2 {
    public next: any
    public pre: any
    constructor(public data: any) {
        this.data = data
        this.pre = null
        this.next = null
    }
}

class Bll {
    public head: any
    public tail: any
    public length: number
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(data: any): void {
        const obj = new NodeObj2(data)
        if (!this.length) {
            this.head = obj
            this.tail = obj
        } else {
            obj.pre = this.tail
            this.tail.next = obj
            this.tail = obj
        }
        this.length++
    }
    forward(): string {
        let result = "", node = this.head
        while (node) {
            result += node.data
            node = node.next
        }
        return result
    }
    backward(): string {
        let result = "", node = this.tail
        while (node) {
            result += node.data
            node = node.pre
        }
        return result
    }
    insert(data: any, position: number): boolean {
        if (position < 0 || position > this.length) return false
        const obj = new NodeObj2(data)
        if (!this.length) {
            this.head = obj
            this.tail = obj
        } else {
            if (position === 0) {
                this.head.pre = obj
                obj.next = this.head
                this.head = obj
            } else if (position === this.length) {
                obj.pre = this.tail
                this.tail.next = obj
                this.tail = obj
            } else {
                let {index,node} = position > this.length/2 ? {index:this.length-1, node:this.tail} : {index:0, node:this.head}
                if (index === this.length-1) {
                    console.log("我是从尾到头");
                    
                    while(position++ < index) { 
                        node = node.pre
                    }
                } else {
                    console.log("我是从头到尾");

                    while(index++ < position) {
                        node = node.next
                    }
                }
                obj.next = node
                obj.pre = node.pre
                node.pre.next = obj
                node.pre = obj
            }
        }
        return !!(this.length++)
    }
    get(position: number): boolean | any{
        if (position < 0 || position >= this.length) return false
        let {index,node} = position > this.length/2 ? {index:this.length-1, node:this.tail} : {index:0, node:this.head}
        if (index === this.length-1) {
            console.log("我是从尾到头");
            while(position++ < index) { 
              
                node = node.pre
            }
        } else {
            console.log("我是从头到尾");
            while(index++ < position) {
                node = node.next
            }
        }
        return node.data
    }
    indexOf(data: any): number {
        let index = 0,node = this.head
        while(node) {
            if (node.data === data) return index
            node= node.next
            index++
        }
        return -1
    }
    update(newData: any,position: number): boolean{
      if (position < 0 || position >= this.length) return false
      let {index,node} = position > this.length/2 ? {index:this.length-1, node:this.tail} : {index:0, node:this.head}
      if (index === this.length-1) {
          console.log("我是从尾到头");
          while(position++ < index) { 
              node = node.pre
          }
      } else {
          console.log("我是从头到尾");
          while(index++ < position) {
              node = node.next
          }
      }
      node.data = newData
      return true
    }
    isEmpty(): boolean {
        return !!this.length
    }
    size(): number {
        return this.length
    }
    getHead(): any{
        return this.head.data
    }
    getTail(): any {
        return this.tail.data
    }
}

const obj = new Bll()
obj.append("0")
obj.append("1")
obj.append("2")
obj.append("3")
obj.append("4")
obj.append("5")
obj.append("6")
obj.append("7")
obj.append("8")

// console.log(obj.insert("666",6));

// console.log(obj.forward());
// console.log(obj.length);

// console.log(obj.get(2));

// console.log(obj.indexOf("3"));

console.log(obj.forward())




