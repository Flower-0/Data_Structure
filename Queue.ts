class Queue<T> {
    public list: T[]
    constructor() {
        this.list = [];
    }
    enqueue(...args:any[]):void {
        this.list.push(...args);
    }
    dequeue(): T | undefined {
        return this.list.shift();
    }
    front(): T | undefined {
        return this.list[0]
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

function PassFlowers(arr:string[],target:number): string | undefined {
    const queue = new Queue<string>();
    queue.enqueue(...arr);
    while (queue.size() > 1) {
        for (let i = 0;i<target - 1;i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }     
    return queue.dequeue()
}

const list = ["Apple","banana","pear","tanneries","cucumber"]

console.log(PassFlowers(list,5));

