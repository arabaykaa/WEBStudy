"use strick";

let obj = {
  name: "Kale",
  age: 112,
  job: "Bos",
  [Symbol.iterator]() {
    return {
      current: this.name,
      last: this.job,
      next() {
        if (this.current <= this.last) {
          return {
            done: this.current,
            value: this.current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};
