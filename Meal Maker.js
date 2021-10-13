const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    set appetizers(appetizersIn){
      this.courses.appetizers = appetizersIn;
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    set mains(mainsIn){
      this.courses.mains = mainsIn;
    },
    get mains(){
      return this._courses.mains;
    },
    set desserts(dessertsIn){
      this.courses.desserts = dessertsIn;
    },
    get desserts(){
      return this._courses.desserts
    },
    // Getter method for _courses
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
  
    // Adding a method to the menu object
    addDishToCourse(courseName,dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      // to be reviewed  
      return this._courses[courseName].push(dish);
  
    },
  
    // Adding getRandomDishFromCourse
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
  
    // Adding generateRandomMeal
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
  
    const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name}, and  ${dessert.name} and the total price is ${totalPrice}`
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
  menu.addDishToCourse('appetizers', 'Coconot', 2.0)
  menu.addDishToCourse('appetizers', 'Chocolate', 3.0)
  
  menu.addDishToCourse('mains', 'Fufu', 20.0)
  menu.addDishToCourse('mains', 'Ampesi', 15.0)
  menu.addDishToCourse('mains', 'Banku', 12.0)
  
  menu.addDishToCourse('dessert', 'Ice Cream', 2.57)
  menu.addDishToCourse('dessert', 'Coca Cola', 4.00)
  menu.addDishToCourse('dessert', 'Fruits', 3.50)
  
  let meal = menu.generateRandomMeal();
  console.log(meal)
  
  