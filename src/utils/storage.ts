const prefix = '';

interface Storage<T> {
  key: string;
  defaultValue: T;
}

export class LocalStorage<T> implements Storage<T> {
  key: string;
  defaultValue: T;

  constructor(key: string, defaultValue: T) {
    this.key = prefix + key;
    this.defaultValue = defaultValue;
  }

  setItem(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  getItem(): T {
    const value = localStorage[this.key] && localStorage.getItem(this.key);
    if (value === undefined) return this.defaultValue;
    try {
      return value && value !== 'null' && value !== 'undefined'
        ? (JSON.parse(value) as T)
        : this.defaultValue;
    } catch (error) {
      return value && value !== 'null' && value !== 'undefined'
        ? (value as unknown as T)
        : this.defaultValue;
    }
  }

  removeItem() {
    localStorage.removeItem(this.key);
  }
}
