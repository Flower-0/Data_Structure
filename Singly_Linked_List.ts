class NodeObj {
    public next: any
    constructor(public data: any) {
        this.data = data
        this.next = null
    }
}

class Sll {
    public head: any
    public length: number
    constructor() {
        this.head = null
        this.length = 0
    }
    append(data: any): void {
        const obj = new NodeObj(data)
        if (!this.length) {
            this.head = obj
        } else {
            let node = this.head
            while (node.next) {
                node = node.next
            }
            node.next = obj
        }
        ++this.length
    }
    toString(): string {
        if (!this.length) {
            return ""
        } else {
            let node = this.head, result = ""
            while (node) {
                result += node.data
                node = node.next
            }
            return result
        }
    }
    insert(data: any, i: number): boolean {
        if (i < 0 || i > this.length) return false
        const obj = new NodeObj(data)
        if (i === 0) {
            obj.next = this.head
            this.head = obj
        } else {
            let index = 0, node = this.head
            while (index++ < i - 1) {
                node = node.next
            }
            obj.next = node.next
            node.next = obj
        }
        ++this.length
        return true
    }
    get(position: number): any {
        if (position < 0 || position >= this.length) return false
        let index = 0, node = this.head
        while (index++ < position) {
            node = node.next
        }
        return node.data
    }
    indexOf(data: any): number {
        let index = 0, node = this.head
        while (node) {
            if (data === node.data) return index
            node = node.next
            ++index
        }
        return -1
    }
    update(data: any, position: number): boolean {
        if (position < 0 || position >= this.length) return false
        let index = 0, node = this.head
        while (index++ < position) {
            node = node.next
        }
        node.data = data
        return true
    }
    removeAt(position: number): boolean {
        if (position < 0 || position >= this.length) return false
        let node = this.head
        if (position === 0) {
            this.head = node.next
        } else {
            let index = 0
            while (index++ < position - 1) {
                node = node.next
            }
            node.next = node.next.next
        }
        this.length--
        return true
    }
    remove(data: any): boolean {
        let position = this.indexOf(data)
        if (position === -1) return false
        return this.removeAt(position)
    }
}
