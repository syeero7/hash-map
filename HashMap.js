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

  set(key, value) {
    if (this.#capacity * this.#loadFactor < this.length()) this.#capacity *= 2;

    const index = this.#hash(key);
    const buckets = this.#buckets;

    this.#tryAccess(index);
    if (!buckets[index]) {
      buckets[index] = [[key, value]];
      return;
    }
    let valueUpdate = false;
    for (const bucket in buckets[index]) {
      if (buckets[index][bucket][0] === key) {
        buckets[index][bucket][1] = value;
        valueUpdate = true;
        break;
      }
    }
    if (!valueUpdate) buckets[index].push([key, value]);
  }

  get(key) {
    const index = this.#hash(key);
    const buckets = this.#buckets;

    this.#tryAccess(index);
    for (const bucket in buckets[index]) {
      if (buckets[index][bucket][0] === key) return buckets[index][bucket];
    }
    return null;
  }

  has(key) {
    const index = this.#hash(key);
    const buckets = this.#buckets;

    this.#tryAccess(index);
    for (const bucket in buckets[index]) {
      if (buckets[index][bucket][0] === key) return true;
    }
    return false;
  }

  remove(key) {
    const index = this.#hash(key);
    const buckets = this.#buckets;

    this.#tryAccess(index);
    for (const bucket in buckets[index]) {
      if (buckets[index][bucket][0] === key) {
        buckets[index].splice(bucket, 1);
        if (!buckets[index].length) buckets.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  length() {
    return this.#buckets.flat().length;
  }

  clear() {
    this.#buckets = [];
  }

  keys() {
    return this.#buckets.flat().map((bucket) => bucket[0]);
  }

  values() {
    return this.#buckets.flat().map((bucket) => bucket[1]);
  }

  entries() {
    return this.#buckets.flat();
  }
}
