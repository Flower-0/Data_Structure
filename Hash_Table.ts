interface IElement {
    key: string;
    value: any;
}

class Hash_Table {
    storage: Array<undefined | IElement[]>
    count: number
    sum: number
    constructor() {
        this.storage = []
        this.count = 0
        this.sum = 7
    }
    hashFunction(str: string, length: number): number {
        let hashCode = 0
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        return hashCode % length
    }
    set(key: string, value: any): void {
        let index = this.hashFunction(key, this.sum), bucket = this.storage[index];
        if (bucket === undefined) {
            bucket = []
            this.storage[index] = bucket
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value
                return
            }
        }
        bucket.push({ key, value })
        this.count++
        if (this.count > this.sum * 0.75) {
            this.expansion(this.Obtain(this.sum * 2))
        }
    }
    remove(key: string): boolean {
        let index = this.hashFunction(key, this.sum), bucket = this.storage[index];
        if (bucket === undefined) return false
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1)
                this.count--
                if (this.sum > 7 && this.count < this.sum * 0.25) {
                    this.expansion(this.Obtain(Math.floor(this.sum / 2)))
                }
                return true
            }
        }
        return false
    }
    get(key: string): any {
        let index = this.hashFunction(key, this.sum), bucket = this.storage[index];
        if (bucket === undefined) return false
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value
            }
        }
        return false
    }
    expansion(size: number): void {
        const oldArray = this.storage;
        this.storage = []
        this.count = 0
        this.sum = size
        let bucket: IElement[] | undefined;
        for (let x = 0; x < oldArray.length; x++) {
            bucket = oldArray[x]
            if (bucket === undefined) continue
            for (let y = 0; y < bucket.length; y++) {
                this.set(bucket[y].key, bucket[y].value)
            }
        }
    }
    Obtain(size: number): number {
        while (!this.primeNumber(size)) {
            size++
        }
        return size
    }
    primeNumber(size: number): boolean {
        for (let x = 2; x < size; x++) {
            if (size % x === 0) {
                return false
            }
        }
        return true
    }
    isEmpty(): boolean {
        return !this.count
    }
    size(): number {
        return this.count
    }
}

const result = new Hash_Table()

result.set("cat", 123)

console.log(result.get("cat"))

result.set("cat", 666)

console.log(result.get("cat"))

result.set("Apple", 777)
result.set("Banana", 666)
result.set("Blueberry", 333)
result.set("Coconut", 222)
result.set("Dates", 111)
result.set("Haw", 465)
result.set("Guava", 231)
result.set("Loquat", 231)
result.set("Mango", 89)
result.set("Olive", 22)



result.remove("cat")

console.log(result.get("cat"))

console.log(result.isEmpty());

console.log(result.size());

console.log(result.sum,result.storage.length);

console.log(result.get("Mango"));








