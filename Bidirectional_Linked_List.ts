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
                let { index, node } = position > (this.length - 1) / 2 ? { index: this.length - 1, node: this.tail } : { index: 0, node: this.head }
                if (index === this.length - 1) {
                    while (position++ < index) {
                        node = node.pre
                    }
                } else {
                    while (index++ < position) {
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
    get(position: number): boolean | any {
        if (position < 0 || position >= this.length) return false
        let { index, node } = position > (this.length - 1) / 2 ? { index: this.length - 1, node: this.tail } : { index: 0, node: this.head }
        if (index === this.length - 1) {
            while (position++ < index) {
                node = node.pre
            }
        } else {
            while (index++ < position) {
                node = node.next
            }
        }
        return node.data
    }
    indexOf(data: any): number {
        let index = 0, node = this.head
        while (node) {
            if (node.data === data) return index
            node = node.next
            index++
        }
        return -1
    }
    update(newData: any, position: number): boolean {
        if (position < 0 || position >= this.length) return false
        let { index, node } = position > (this.length - 1) / 2 ? { index: this.length - 1, node: this.tail } : { index: 0, node: this.head }
        if (index === this.length - 1) {
            while (position++ < index) {
                node = node.pre
            }
        } else {
            while (index++ < position) {
                node = node.next
            }
        }
        node.data = newData
        return true
    }
    removeAt(position: number): boolean {
        if (position < 0 || position >= this.length) return false
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            if (position === 0) {
                this.head.next.pre = null
                this.head = this.head.next
            } else if (position === this.length - 1) {
                this.tail.pre.next = null
                this.tail = this.tail.pre
            } else {
                let { index, node } = position > (this.length - 1) / 2 ? { index: this.length - 1, node: this.tail } : { index: 0, node: this.head }
                if (index === this.length - 1) {
                    while (position++ < index) {
                        node = node.pre
                    }
                } else {
                    while (index++ < position) {
                        node = node.next
                    }
                }
                node.pre.next = node.next
                node.next.pre = node.pre
            }
        }
        this.length--
        return true
    }
    remove(data: any): boolean {
        return this.removeAt(this.indexOf(data))
    }
    isEmpty(): boolean {
        return this.length ? false : true
    }
    size(): number {
        return this.length
    }
    getHead(): any {
        return this.head.data
    }
    getTail(): any {
        return this.tail.data
    }
}








