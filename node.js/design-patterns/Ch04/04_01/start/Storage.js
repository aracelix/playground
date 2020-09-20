class Storage {
  constructor(name, inventory=[], deliveryTime=0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;

    this.next = null;
  }

  lookInLocalInventory(itemName) {
    var index = this.inventory.map(item => item.name).indexOf(itemName);
    
    //will return undefined if not found
    return this.inventory[index];
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    var found = this.lookInLocalInventory(itemName);

    if(found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this.name,
        deliveryTime: (this.deliveryTime === 0) ? 'now' : `${this.deliveryTime} day(s)`
      }
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return "We don't carry this item.";
    }
  }
}

module.exports = Storage;