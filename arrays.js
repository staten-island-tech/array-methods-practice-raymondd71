const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

students.forEach((student) => console.log(student.name, student.grade));

students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));

students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log(student.name));

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

products.forEach((product) =>
  console.log(product.name, Math.round(product.price * 1.1))
);

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const highlyrated = products.filter((product) => product.rating >= 4.5);
console.log("Highly Rated Products:", highlyrated);

HeighlyRated = products
  .filter((product) => product.rating >= 4.5)
  .forEach((product) => console.log(product.name));

affordableelectronics = products
  .filter((product) => product.category === "Electronics")
  .filter((product) => product.price < 1000)
  .forEach((product) => console.log("Affordable Electronics:", product));
