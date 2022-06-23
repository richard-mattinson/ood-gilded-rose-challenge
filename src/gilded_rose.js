class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  // default behavior could be here? (sellIn -1, quality -1)
  defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn <= 0) {
      this.quality -= 2
    } else {
      this.quality -= 1
    }
    if (this.quality <= 0) {
      this.quality = 0
    }
  }    
}

// Common returns default behavior unchanged
class Common extends Item {}

// Special needs to be forked for Brie and Pass?
class SpecialCheese extends Item {
    defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn <= 0) {
      this.quality -= 2
    } else {
      this.quality -= 1
    }
    if (this.quality <= 0) {
      this.quality = 0
    }
  }   
}

class SpecialPass extends Item {
    defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn <= 0) {
      this.quality -= 2
    } else {
      this.quality -= 1
    }
    if (this.quality <= 0) {
      this.quality = 0
    }
  }   
}

// Legendary returns items unchanged (skip default behavior)
class Legendary extends Item {
  defaultBehavior() {
  }
}

// Conjured doubles both quality decline
class Conjured extends Item {
    defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn <= 0) {
      this.quality -= 4
    } else {
      this.quality -= 2
    }
    if (this.quality <= 0) {
      this.quality = 0
    }
  }   
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].defaultBehavior()
    }
        return this.items;
  }
}

//   updatedConjuredItem(item) {
//     item.sellIn -= 1
//     if (item.sellIn < 0) {
//       item.quality -= 4
//     } else {
//       item.quality -= 2
//     }
//     if (item.quality < 0) {
//       item.quality = 0
//     }
//   }

//   updateQuality() {
//     for (let i = 0; i < this.items.length; i++) {
//       this.item[i]defaultBehavior()
//     }
//         return this.items;
//   }
// }
// }

//       if (this.items[i].name === "Conjured Mana Cake") {
//         this.updatedConjuredItem(this.items[i])
//       }
//       if (
//         this.items[i].name != 'Aged Brie' && 
//         this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) { // RM - added an equals
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
        
//           }
//         }
//       }
//     }
//     return this.items;
//   }
// }
// }

module.exports = {
  Item,
  Common,
  SpecialCheese,
  SpecialPass,
  Legendary,
  Conjured,
  Shop
}
