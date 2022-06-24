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
class Common extends Item {
  // deliberately blank
}

// Special needs to be forked for Brie and Pass?
class SpecialCheese extends Item {
    defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn <= 0) {
      this.quality += 2 // appreciation instead of depreciation
    } else {
      this.quality += 1 // appreciation instead of depreciation
    }
    if (this.quality <= 0) {
      this.quality = 0
    }
    if (this.quality >= 50) { // caps quality at 50
      this.quality = 50
    }   
  }
}

class SpecialPass extends Item {
    defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn > 10) {
      this.quality += 1 // appreciation by 1 above 10 days
    } 
    if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2 //appreciation by 2 below 10 days
    }
    if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3 //appreciation by 3 below 5 days}
    }
    if (this.sellIn <= 0) {
      this.quality = 0 //depreciation to 0 on day of gig
    }
    if (this.quality >= 50) {
      this.quality = 50 // cap at 50 
    }   
  }
}

// Legendary returns items unchanged (skip default behavior)
class Legendary extends Item {
// method mesy be called to return 'blank' or the default behavior will take effect
  defaultBehavior() { 
  }
}

// Conjured doubles quality decline (before and after sellIn)
class Conjured extends Item {
    defaultBehavior(){
      this.sellIn -= 1
    if (this.sellIn <= 0) {
      this.quality -= 4 // depreciation doubled from default behavior
    } else {
      this.quality -= 2 // depreciation doubled from default behavior
    }
    if (this.quality <= 0) {
      this.quality = 0
    }
  }   
}

module.exports = {
  Item,
  Common,
  SpecialCheese,
  SpecialPass,
  Legendary,
  Conjured,
  Shop
}
