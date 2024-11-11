export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => {
      try {
        this.add(character);
      } catch {
        return;
      }
    });
  } 
    
  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let index = 0;
    return {
      next() {
        if (index < members.length) {
          return {
            done: false,
            value: members[index++]
          }
        }
        
        return {
          done: true
        }
      }
    }
  }
}
