module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);

  // Retrieve all Customers
  app.get("/Bank", customers.bankdata);

    // Retrieve all Customers
    app.get("/getUsers", customers.getusers);
    app.get("/customersp/:customerId", customers.findOne);
    app.get("/users/:emailId", customers.findOne1users);
  
   app.get("/getNSEBank", customers.getnsebank);

};
