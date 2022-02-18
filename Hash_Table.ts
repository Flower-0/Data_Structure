interface IElement {
    key:string;
    value:any;
}

class Hash_Table {
    storage:Array<undefined | IElement[]>
    count:number
    sum:number
    constructor() {
        this.storage = []
        this.count = 0 
        this.sum = 7
    }
    hashFunction(str:string,length:number): number {
        let hashCode = 0
        for(let i = 0;i<str.length;i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        return hashCode % length
    }
    set(key:string,value:any): void{
        let index = this.hashFunction(key,this.sum),bucket = this.storage[index];
        if ( bucket === undefined) {
            bucket = []
            this.storage[index] = bucket
        }
        for(let i = 0 ; i<bucket.length ; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value
                return
            }
        }
        bucket.push({key,value})
        this.count ++
    }
    remove(key: string): boolean {
        let index = this.hashFunction(key,this.sum),bucket = this.storage[index];
        if ( bucket === undefined) return false
        for(let i = 0 ; i<bucket.length ; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1)
                this.count --
                return true
            }
        }
        return false
    }
    get(key: string): any {
        let index = this.hashFunction(key,this.sum),bucket = this.storage[index];
        if ( bucket === undefined) return false
        for(let i = 0 ; i<bucket.length ; i++) {
            if (bucket[i].key === key) {
              return bucket[i].value
            }
        }
        return false
    }
    isEmpty(): boolean {
        return !!this.count
    }
    size(): number {
        return this.count
    }
}





