const Menu = [{
id:1,
image: "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/Bread_toast_recipe.jpg",
name: "Break Toast",
category:"breakfast",
price: "10₹",
description:"Toast is sliced bread that has been browned by radiant heat. The browning is the result of a Maillard reaction altering the flavor of the bread and making it firmer. The firm surface is easier to spread toppings on and the warmth can help butter reach its melting point.",
}, 
{
  id: 2,
    image: "https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2023/5/3/paneer-butter-masala.jpg",
    name: "butter paneer",
    category: "lunch",
    price: "50₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",  
  },
  {
    id: 3,
    image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg",
    name: "dosa",
    category: "breakfast",
    price: "30₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
     id: 4,
      image: "https://cookingwithparita.com/wp-content/uploads/2022/04/F4A6412.jpg",
      name: "samosa",
      category: "evening",
      price: "20₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 5,
    image: "https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg",
    name: "pizza",
    category: "evening",
    price: "80₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 6,
    image: "data:image/jpeg;base64,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",
    name: "Non-Veg Thali",
    category: "dinner",
    price: "180₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuza8YEcIafi_QtMerd3bRhXoEPd8fxydnNw&usqp=CAU",
    name: "Sweets",
    category: "dinner",
    price: "60₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 8,
    image: "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2019/10/Chole-Bhature-01.jpg?fit=1024%2C682&ssl=1",
    name: "chole bhature",
    category: "lunch",
    price: "60₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 9,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/poha-recipe.jpg.webp",
    name: "poha",
    category: "evening",
    price: "10₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
];


export default Menu;