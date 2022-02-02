class gather {
    item: any
    constructor() {
        this.item = {}
    }
    add(value: any): boolean {
        if (this.has(value)) return false
        this.item[value] = value
        return true
    }
    has(value: any): boolean {
        return this.item.hasOwnProperty(value)
    }
    remove(value: any): boolean {
        if (!this.has(value)) return false
        delete this.item[value]
        return true
    }
    clear(): void {
        this.item = {}
    }
    size(): number {
        return Object.keys(this.item).length
    }
    values(): string[] | [] {
        return Object.keys(this.item)
    }
    union(obj: any): object {
        const result = new gather(), arr = this.values(), arr2 = obj.values();
        for (let i = 0; i < arr.length; i++) {
            result.add(arr[i])
        }
        for (let i = 0; i < arr2.length; i++) {
            result.add(arr2[i])
        }
        return result
    }
    intersection(obj: any): object {
        const result = new gather(), arr = this.values()
        for (let i = 0; i < arr.length; i++) {
            if (obj.has(arr[i])) result.add(arr[i])
        }
        return result
    }
    difference(obj: any): object {
        const result = new gather(), arr = this.values()
        for (let i = 0; i < arr.length; i++) {
            if (!obj.has(arr[i])) {
                result.add(arr[i])
            }
        }
        return result
    }
    Subset(obj: any): boolean {
        const arr = this.values()
        for (let i = 0; i < arr.length; i++) {
            if (!obj.has(arr[i])) return false
        }
        return true
    }
}

const obj5 = new gather()
obj5.add("1")
obj5.add("2")
obj5.add("3")
obj5.add("4")
obj5.add("5")

const obj6 = new gather()
obj6.add("1")
obj6.add("2")
obj6.add("45")
obj6.add(89)


console.log(obj5.Subset(obj6));



