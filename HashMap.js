export default class HashMap {
  #buckets;
  #capacity;
  #loadFactor;
  constructor(capacity, loadFactor) {
    this.#buckets = [];
    this.#capacity = capacity;
    this.#loadFactor = loadFactor;
  }

  #hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) %
        (this.#capacity * this.#loadFactor);
    }
    return hashCode;
  }

  #tryAccess(index) {
    if (index < 0 || index >= this.#capacity)
      throw new Error("Trying to access index out of bound");
  }
}
