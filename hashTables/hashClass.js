// HASH TABLE
const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size
}
class HashTable {
    constructor() {
        this.size = 20
        this.buckets = Array(this.size)
        // populate each bucket with a Map()
        for (let i = 0; this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }
    insert(key, value) {
        let index = hash(key, this.size)
        this.buckets[index].set(key, value)
    }
    remove(key) {
        let index = hash(key, this.size)
        let deleted = this.buckets[index].get(key)
        this.buckets[index].delete(key)
        return deleted
    }
    search(key) {
        let index = hash(key, this.size)
        return this.buckets[index].get(key)
    }
}
const hashTable = new HashTable()
console.log(hashTable.insert('a', '1'))
console.log(hashTable.insert('b', '2'))
console.log(hashTable.insert('c', '3'))
console.log(hashTable.insert('d', '4'))
console.log(hashTable.insert('e', '5'))
console.log(hashTable.insert('f', '7 mask'))
console.log(hashTable.search('1'))
console.log(hashTable.search('2'))
console.log(hashTable.search('3'))
console.log(hashTable.remove('4'))
console.log(hashTable.remove('5'))
console.log(hashTable)