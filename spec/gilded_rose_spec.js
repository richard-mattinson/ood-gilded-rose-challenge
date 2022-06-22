/*
ITEM by Rarity
Common (subtract 1 from sellIn and quality per day)
- "+5 Dexterity Vest"
- "Elixir of the Mongoose"
Special (subtract 1 from sellIn, add 1 to quality per day)
- "Aged Brie"
- "Backstage passes to a TAFKAL80ETC concert"
Legendary (has a static sellIn and quality value)
- "Sulfuras, Hand of Ragnaros"
Conjured
- "Conjured Mana Cake"
*/

const {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("common item - should decrease quality and sellin by 1 when sellin > 0", function() {
    // setup
    const expectedSellIn = 4
    const expectedQuality = 6
    const gildedRose = new Shop([ new Item("Elixir of the Mongoose", 5, 7) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

    it("special item: Brie - should increase quality by 1 and decrease sellin by 1 when sellin > 0", function() {
    // setup
    const expectedSellIn = 1
    const expectedQuality = 1
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

    it("legendary item - should maintain both quality and sellIn", function() {
    // setup
    const expectedSellIn = 0
    const expectedQuality = 80
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

});


