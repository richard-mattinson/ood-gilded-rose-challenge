const { Shop, Item } = require("../src/gilded_rose");

const items = [
  // (name, sellIn, quality) add rarity?
  new Item("+5 Dexterity Vest", 10, 20), // common
  new Item("+5 Dexterity Vest", -1, 8), // common
  new Item("Aged Brie", 2, 0), // special
  new Item("Aged Brie", -2, 6), // special
  new Item("Elixir of the Mongoose", 5, 7), // common
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), // legendary
  new Item("Sulfuras, Hand of Ragnaros", -1, 80), // legendary
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20), // special
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49), // special
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49), // special
  new Item("Conjured Mana Cake", 3, 16), // conjured
  new Item("Conjured Mana Cake", 0, 6), // conjured

];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
