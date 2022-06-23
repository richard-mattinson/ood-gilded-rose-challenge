class Item {
  constructor(name, sellIn, quality, rarity){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.rarity = rarity;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updatedConjuredItem(items) {
    item.sellIn -= 1
    if (item.sellIn < 0) {
      item.quality -= 4
    } else {
      item.quality -= 2
    }
    if (item.quality < 0) {
      item.quality = 0
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name === "Conjured Mana Cake") {
        this.updatedConjuredItem(this.items[i])
      }
      if (
        this.items[i].name != 'Aged Brie' && 
        this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) { // RM - added an equals
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
        
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
