const { Shop, Common, SpecialCheese, SpecialPass, Legendary, Conjured } = require("../src/gilded_rose");

const items = [
  // (name, sellIn, quality) add rarity?
  new Common("+5 Dexterity Vest", 10, 20), // common
  new Common("+5 Dexterity Vest", -1, 8), // common
  new SpecialCheese("Aged Brie", 2, 0), // special
  new SpecialCheese("Aged Brie", -2, 6), // special
  new Common("Elixir of the Mongoose", 5, 7), // common
  new Legendary("Sulfuras, Hand of Ragnaros", 0, 80, 'legendary'), // legendary
  new Legendary("Sulfuras, Hand of Ragnaros", -1, 80), // legendary
  new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 15, 20), // special
  new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 10, 49), // special
  new SpecialPass("Backstage passes to a TAFKAL80ETC concert", 5, 49), // special
  new Conjured("Conjured Mana Cake", 3, 16), // conjured
  new Conjured("Conjured Mana Cake", 0, 6), // conjured
  new Legendary("Boots of Blinding Speed", -44, 80), // legendary
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("Gilded Rose - Daily Report");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
