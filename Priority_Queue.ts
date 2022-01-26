interface IObj {
    value: any;
    logo: number;
}

class Priority_Queue {
    public list: IObj[]
    constructor() {
        this.list = [];
    }
    insert(value: IObj["value"], logo: IObj["logo"]): void {
        const { length } = this.list;
        if (!length) {
            this.list.push({ value, logo })
        } else {
            for (let i = 0; i < length; i++) {
                if (logo < this.list[i].logo) {
                    this.list.splice(i, 0, { value, logo });
                    break
                } else if (logo === this.list[i].logo) {
                    this.list.splice(i + 1, 0, { value, logo });
                    break
                }
            }
        }
        if (this.list.length === length) {
            this.list.push({ value, logo });
        }
    }
}

const obj = new Priority_Queue()

obj.insert("a", 90)
obj.insert("b", 101)
obj.insert("c", 17)
obj.insert("d", 29)
obj.insert("e", 29)
obj.insert("f", 4)


console.log(obj);
