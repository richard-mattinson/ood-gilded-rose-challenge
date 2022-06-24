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

const {Shop, Common, SpecialCheese, SpecialPass, Legendary, Conjured} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

// -------- COMMON ITEM TESTS --------
  it("common item | -1 sellin, -1 quality when day > 0", function() {
    // setup
    const expectedSellIn = 4
    const expectedQuality = 6
    const gildedRose = new Shop([ new Common("Elixir of the Mongoose", 5, 7) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("common item | -1 sellin, -2 quality when day < 0", function() {
    // setup
    const expectedSellIn = -1
    const expectedQuality = 8
    const gildedRose = new Shop([ new Common("+5 Dexterity Vest", 0, 10) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

// -------- SPECIAL ITEM TESTS --------

// ---- AGED BRIE TESTS ----
  it("special item | does not exceed 50 quality", function() {
    // setup
    const expectedSellIn = -25
    const expectedQuality = 50
    const gildedRose = new Shop([ new SpecialCheese("Aged Brie", -24, 50) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("special item: Brie | -1 sellIn, +1 quality when day > 0", function() {
    // setup
    const expectedSellIn = 1
    const expectedQuality = 1
    const gildedRose = new Shop([ new SpecialCheese("Aged Brie", 2, 0) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("special item: Brie | -1 sellIn, +2 quality when sellin < 0", function() {
    // setup
    const expectedSellIn = -2
    const expectedQuality = 6
    const gildedRose = new Shop([ new SpecialCheese("Aged Brie", -1, 4) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

// ---- BACKSTAGE TESTS ----
  it("special item: Backstage Pass | -1 sellIn, +1 quality when sellin > 10", function() {
    // setup
    const expectedSellIn = 14
    const expectedQuality = 21
    const gildedRose = new Shop([ new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("special item: Backstage Pass | -1 sellIn, +2 quality when sellin <= 10 & > 5", function() {
    // setup
    const expectedSellIn = 9
    const expectedQuality = 27
    const gildedRose = new Shop([ new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 10, 25) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("special item: Backstage Pass | -1 sellIn, +3 quality when sellin <= 5 & > 0", function() {
    // setup
    const expectedSellIn = 4
    const expectedQuality = 38
    const gildedRose = new Shop([ new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 5, 35) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("special item: Backstage Pass | -1 sellIn, 0 quality when sellin <= 0", function() {
    // setup
    const expectedSellIn = -1
    const expectedQuality = 0
    const gildedRose = new Shop([ new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 0, 50) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

// -------- LEGENDARY ITEM TESTS --------
  it("legendary item - maintain both sellIn and quality", function() {
    // setup
    const expectedSellIn = 0
    const expectedQuality = 80
    const gildedRose = new Shop([ new Legendary("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

// --------- CONJURED ITEM TESTS --------

  it("conjured item | -1 sellin, -2 quality when day > 0", function() {
    // setup
    const expectedSellIn = 2
    const expectedQuality = 14
    const gildedRose = new Shop([ new Conjured("Conjured Mana Cake", 3, 16) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

  it("conjured item | -1 sellin, -4 quality when day < 0", function() {
    // setup
    const expectedSellIn = -1
    const expectedQuality = 2
    const gildedRose = new Shop([ new Conjured("Conjured Mana Cake", 0, 6) ]);
    // verify
    const items = gildedRose.updateQuality();
    // execute
    expect(items[0].quality).toEqual(expectedQuality);
    expect(items[0].sellIn).toEqual(expectedSellIn);
  });

});


