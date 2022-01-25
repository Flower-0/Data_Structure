class Stack<T> {
    public list: T[]
    constructor() {
        this.list = [];
    }
    push(params: T): void {
        this.list.push(params);
    }
    pop(): T | undefined {
        return this.list.pop()
    }
    peek(): T | undefined {
        return this.list[this.list.length - 1]
    }
    isEmpty(): boolean {
        return !this.list.length
    }
    size(): number {
        return this.list.length
    }
    toString(): string {
        return this.list.join("")
    }
}

function convert(params: number): string {
    const stack = new Stack<number>();
    while (params > 0) {
        stack.push(params % 2)
        params = Math.floor(params / 2)
    }
    return stack.list.reverse().join("")
}

console.log(convert(100));

console.log(convert(63));

console.log(convert(78));



