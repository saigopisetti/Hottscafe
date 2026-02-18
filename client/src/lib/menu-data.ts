export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  comboPrice?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
  note?: string;
};

export const menuData: MenuCategory[] = [
  {
    title: "Breakfast",
    note: "Served Mon-Fri 5:00am - 2:30pm",
    items: [
      { name: "Big Breaky", price: "$22.90", description: "2 slices of toast, hash brown, bbq sausage, bacon, eggs, tomato & mushroom" },
      { name: "Eggs on Toast", price: "$12.90", description: "Fried, Poached or Scrambled eggs on 2 slices of toast" },
      { name: "Bacon & Eggs", price: "$16.90", description: "Eggs cooked to your liking with bacon on 2 slices of toast" },
      { name: "French Toast", price: "$22.90", description: "3 pieces of fresh bread coated in egg caramelized in butter topped with bacon and maple syrup" },
      { name: "Eggs Benedict", price: "$20.90", description: "2 Poached eggs on top of toasted muffin, ham with hollandaise sauce" },
      { name: "Eggs Florentine", price: "$20.90", description: "2 Poached eggs on top of a toasted muffin, filled spinach topped with hollandaise sauce" },
      { name: "Omelette of Your Choice", price: "$22.90", description: "Choose from: Bacon, Tomato, Mushroom, Onion, Spinach OR Ham, Cheese, Tomato OR Capsicums, Sundried Tomatoes, Spinach, Pumpkin & Fetta" },
      { name: "Hotts Kransky Roll", price: "$12.90", description: "Sliced Kransky, Bacon, Onion, Cheese" },
      { name: "Breaky Roll", price: "$10.00", description: "BBQ sausage, egg, bacon & cheese roll" },
      { name: "Egg & Bacon Roll/Sandwich", price: "$8.00" },
      { name: "Breaky Wrap", price: "$10.00" },
      { name: "Egg, Bacon & Cheese Muffin", price: "$8.00" },
      { name: "BLT Toasted Sandwich", price: "$6.50" },
      { name: "Baked Beans on Toast", price: "$8.00" },
      { name: "Ham, Cheese, Tomato Croissant", price: "$8.50" },
    ]
  },
  {
    title: "Breakfast Extras",
    items: [
      { name: "Bacon", price: "$3.00" },
      { name: "Sausage", price: "$2.00" },
      { name: "Mushrooms", price: "$3.00" },
      { name: "Tomato", price: "$2.00" },
      { name: "Spinach", price: "$3.00" },
      { name: "Hash Brown", price: "$2.50" },
      { name: "Baked Beans", price: "$4.00" },
      { name: "Hollandaise Sauce", price: "$4.00" },
    ]
  },
  {
    title: "Coffees & Shakes",
    note: "Small: $4.30 | Medium: $4.80 | Large: $5.50",
    items: [
      { name: "Coffee", price: "from $4.30", description: "Latte, Cappuccino, Flat White, Long Black, Short Black, Macchiato, Hot Chocolate. Double Shot/Mocha/Syrup/Chai/Soy +50c" },
      { name: "Tea (Pot)", price: "$5.00" },
      { name: "Iced Coffee or Choc", price: "$9.90" },
      { name: "Milk Shake", price: "$7.90", description: "Chocolate, Vanilla, Blue Heaven, Caramel, Banana, Strawberry" },
      { name: "Thick Shake", price: "$9.90" },
    ]
  },
  {
    title: "Combos",
    items: [
      { name: "Schnitzel & Mushroom Sauce", price: "$24.90", description: "Chicken Breast Schnitzel with Chips, Salad & Mushroom Sauce, Can of Soft Drink" },
      { name: "Tenders Combo", price: "$16.90", description: "3 x Moroccan tenders, Chips & Can of Soft Drink" },
      { name: "Chicken Schnitzel Pack", price: "$19.90", description: "Chicken Schnitzel, Chips & Gravy, Can of Soft Drink" },
      { name: "Roast Pack", price: "$19.90", description: "Roast of the Day with Chips and Gravy, Can of Soft Drink" },
      { name: "Flake Pack", price: "$19.90", description: "Battered Fish, Chips & Salad, Can of Soft Drink" },
      { name: "Hotts Snack Pack (HSP)", price: "$18.90", description: "Chips Topped with Crispy Chicken Pieces, Finished with Smokey BBQ Sauce, Garlic Sauce and Hot Chilli Sauce, Can of Soft Drink" },
    ]
  },
  {
    title: "Chicken Parmas",
    note: "Served with Chips, Salad & Can of Soft Drink",
    items: [
      { name: "Original", price: "$19.90", description: "Napoli, Ham & Cheese" },
      { name: "Mexican", price: "$22.90", description: "Napoli, Salami, Peppers, Onion, Cheese" },
      { name: "Aussie", price: "$22.90", description: "Bacon, Egg, Napoli, Cheese" },
      { name: "Meat Lovers", price: "$23.90", description: "Ham, Bacon, Salami, Napoli, Cheese" },
      { name: "Hawaiian", price: "$22.90", description: "Ham, Cheese, Pineapple, Napoli" },
      { name: "Mediterranean", price: "$23.90", description: "Salami, Napoli, Cheese, Sundried Tomatoes, Olives, Onion" },
    ]
  },
  {
    title: "Burgers",
    items: [
      { name: "Plain Burger", price: "$8.50", comboPrice: "$16.50", description: "Beef Pattie, Lettuce, Tomato Sauce" },
      { name: "Beef Burger w' The Lot", price: "$15.50", comboPrice: "$23.50", description: "Beef Pattie, Egg, Bacon, Onion, Lettuce, Cheese, Tomato, Tomato Sauce" },
      { name: "Cheese Burger", price: "$9.50", comboPrice: "$17.50", description: "Beef Pattie, Cheese, Lettuce, Tomato Sauce" },
      { name: "Double Beef/Cheese Burger", price: "$15.50", comboPrice: "$23.50", description: "2 Beef Patties, 2 Slices Cheese, Lettuce, Tomato Sauce" },
      { name: "BBQ Bacon-Bacon Burger", price: "$15.50", comboPrice: "$23.50", description: "Beef Pattie, Double Bacon, Cheese, Lettuce, Tomato, Onion, BBQ Sauce" },
    ]
  },
  {
    title: "Chicken Burgers & Wraps",
    items: [
      { name: "Original Chicken Breast", price: "$13.50", comboPrice: "$21.50", description: "Lettuce, Cheese, Tomato" },
      { name: "BBQ Chicken Thigh", price: "$13.50", comboPrice: "$21.50", description: "Lettuce, Cheese, Tomato" },
      { name: "Schnitzel", price: "$13.50", comboPrice: "$21.50", description: "Lettuce, Cheese, Tomato" },
      { name: "Seared Chicken Avocado", price: "$16.00", comboPrice: "$24.00", description: "Spinach, Tomato, Onion, Cheese, Avocado, Herb Mayo" },
      { name: "Seared Mediterranean Chicken", price: "$16.00", comboPrice: "$24.00", description: "Spinach, Tomato, Onion, Cheese, Roasted Capsicum, Pesto, Aioli" },
      { name: "Seared Peri Peri Chicken", price: "$16.00", comboPrice: "$24.00", description: "Spinach, Tomato, Onion, Cheese, Peri Peri Sauce" },
      { name: "Sriracha Chicken", price: "$16.00", comboPrice: "$24.00", description: "Coleslaw, Bacon, Tomato, Cheese, Sriracha Sauce" },
      { name: "Sweet Chilli Chicken", price: "$14.00", comboPrice: "$22.00", description: "Spinach, Tomato, Onion, Cheese, Sweet Chilli Mayo" },
    ]
  },
  {
    title: "Vegetarian",
    items: [
      { name: "Veggie Burger", price: "$14.90", comboPrice: "$22.90", description: "Veggie Pattie, Spinach, Tomato, Onion, Cheese, Tomato Relish, Aioli" },
    ]
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Plain Steak Sandwich", price: "$9.90", comboPrice: "$17.90", description: "Scotch Fillet Steak, Lettuce, Sauce" },
      { name: "Steak Sandwich w' The Lot", price: "$18.90", comboPrice: "$26.90", description: "Scotch Fillet Steak, Egg, Bacon, Onion, Lettuce, Cheese, Tomato, Tomato Sauce" },
      { name: "Club Sandwich", price: "$15.90", comboPrice: "$23.90", description: "3 Slices of Toast Layered with Chicken, Bacon, Cheese, Egg, Lettuce, Aioli, Tomato, Tomato Relish" },
    ]
  },
  {
    title: "Tender Chicken Subs",
    items: [
      { name: "B.L.T. Sub", price: "$12.90", comboPrice: "$20.90", description: "Bacon, Lettuce, Tomato, Cheese, Aioli Mayo, Smokey BBQ Sauce" },
      { name: "Peri Peri Sub", price: "$10.90", comboPrice: "$18.90", description: "Lettuce, Cheese, Tomato, Peri Peri Sauce" },
      { name: "Sweet Chilli Sub", price: "$9.90", comboPrice: "$17.90", description: "Lettuce, Cheese, Tomato, Sweet Chilli Mayo" },
    ]
  },
  {
    title: "Hot Food Bar",
    items: [
      { name: "Daily Hot Meals", price: "Sm $13.50 | Lrg $15.50" },
      { name: "Moroccan Tender", price: "$3.20" },
      { name: "Original Fillet", price: "$8.50" },
      { name: "BBQ Thigh", price: "$8.50" },
      { name: "Crumbed Schnitzel", price: "$8.50" },
      { name: "Souvlaki - Lamb or Chicken", price: "$16.90" },
      { name: "Chicken Parmigiana Roll", price: "$14.90" },
      { name: "Roast Roll", price: "$14.90" },
      { name: "Kransky Roll (Cheese or Spicy)", price: "$9.00" },
      { name: "Spring or Chiko Roll", price: "$4.50" },
      { name: "Hot Dog", price: "$6.00" },
      { name: "Hot Dog in Batter", price: "$4.50" },
      { name: "Seafood Stick", price: "$3.00" },
      { name: "Dim Sims (Steamed or Fried)", price: "$2.00" },
      { name: "South Melbourne Dim Sims", price: "$3.00" },
      { name: "Potato Cakes", price: "$2.00" },
      { name: "Hot Chips", price: "Sml $5.90 | Lrg $9.90" },
      { name: "Chips & Gravy", price: "Sml $7.50 | Lrg $11.50" },
      { name: "Cheesy Chips", price: "$13.90", description: "Cheese, Bacon, BBQ Sauce" },
      { name: "Wedges", price: "$12.50", description: "with Sour Cream & Sweet Chilli" },
      { name: "Flake (Battered)", price: "$10.50" },
    ]
  },
  {
    title: "Gourmet Sandwich Bar",
    items: [
      { name: "Ham, Salami or Egg", price: "$6.00" },
      { name: "Tuna", price: "$7.00" },
      { name: "Chicken", price: "$7.00" },
      { name: "Salad", price: "$7.00" },
      { name: "Cheese, Vegemite or Peanut Butter", price: "$5.00" },
      { name: "Schnitzel", price: "$9.00" },
    ]
  },
  {
    title: "Extras",
    items: [
      { name: "Standard Extras", price: "$1.00", description: "Tomato, Carrot, Onion, Lettuce, Beetroot, Cucumber" },
      { name: "Premium Extras", price: "$2.00", description: "Coleslaw, Jalapeno, Pineapple, Eggplant, Sun-dried Tomato, Roasted Capsicum" },
      { name: "Deluxe Extras", price: "$2.00", description: "Egg, Roll, Cold Meat, Wraps, Cheese, Spinach, Avocado" },
    ]
  },
  {
    title: "Salads",
    items: [
      { name: "Small Salad", price: "$12.50" },
      { name: "Large Salad", price: "$16.50" },
    ]
  }
];
