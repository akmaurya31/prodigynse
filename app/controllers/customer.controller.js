const Customer = require("../models/customer.model.js");
const substrings = require("../../node_modules/substrings");

// var substring = require("../../node_modules/substring");
//var curl = require("../../node_modules/models/curl");
// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};

exports.findOne1users = (req, res) => {
  Customer.findByIdusers(req.params.emailId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.emailId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.emailId
        });
      }
    } else {   
             
     
//       {"id":1,"name":"ajay","user_id":"","email":"akmaurya31@gmail.com","pin":0,"phone":"9616118873","email_verified_at":null,"password":"$2y$10$PRNuNEtQfJoCnJ.yoM9y/uYHft5YfIUGKalyF3UqBUGBcpb6JvZDy","role":2,"profile_pic":null,"address":"Lucknow","locallity":"bfc","pincode":226010,"country":101,"state":"Utter paradesh","city":"Lucknow","date_of_birrth":"1995-03-03T00:00:00.000Z","father_name":"MrLalji Mauray","mother_name":"N","gender":"2","material_status":1,"birth_palce":"lucknow","occupation":3,"income_range":1,"resident_status":"1","othertaxpayer":null,"exposedPolitically":null,"taxIdentificationNo":"12346097653","taxcountry":null,"identificationType":"commercial","signature":"public/uploads/signature/159860911077579.jpg","remember_token":"rnAc63UZGO","created_at":"2020-07-30T06:28:32.000Z","updated_at":"2020-09-17T20:48:46.000Z","otp":0,"status":1,"pan_card":"dtyrrt","social_id":"","address_proof":null,"iin":"","ID_NUMBER":""}
   
const text = "some text BEFORE substring1 AFTER " +"some text BEFORE substring2 AFTER some text";
 var sse2= substrings.getAll("BEFORE ", " AFTER", text);
      console.log(sse2);
      
var names = 'Harry,John,Clark,Peter,Rohn,Alice';
var nameArr = names.split(',');
console.log(nameArr);
      
      var dated=data.date_of_birrth;
      //var datxx=trim(data.date_of_birrth);
      var nw_date = dated.toString();
      console.log("------>>>>" + nw_date);
      
      var ssvv=moment().format('MMM D, YYYY')
      console.log("------>>>><<<<<<<" + ssvv);
      
      
      var datx="1998-09-16";
var datxArr = datx.split('-');
console.log(datxArr);
      
      
      
      
      
      
//       var datx=data.date_of_birrth;
//       var sse2cc= substrings.getAll("-", datx);
//        console.log(sse2cc);
      
      
     // var sse=substrings.getAll("-", data.date_of_birrth);
   //   console.log(sse);
      
  //   var ss = data.date_of_birrth.slice(10);
    
   //   var ss="fffsdf 111 111 Ravi";
    //  console.log(ss);
//let str= data.date_of_birrth.split(' ')[0];
//let res1 = data.date_of_birrth.substring(0,10);      
// const date = res;
// const [year, month, day] = date.split('-');
// const dateObj = {month, day, year};
// const cdateObj=day+'/'+month+'/'+year;
// const frmt_dob1={'frmt_dob':cdateObj};
//console.log("-------ss--------------------"+res1);
// const assign_dob_in_data = Object.assign(data, frmt_dob1);    
//       console.log(assign_dob_in_data);
const textc = { 'message' : 'Successfully Found', 'status' : '200', 'data':data };   
        res.send(textc);    
    }
  });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Customer.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.customerId
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};


exports.getusers = (req, res) => {
  
  Customer.getAllusers((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};



// Retrieve all Customers from the database.
exports.bankdata = (req, res) => {
  var url="https://uat.nsenmf.com/NMFIIService/NMFService/Bank?BrokerCode=ARN-21399&Appln_Id=MFS21399&Password=Account@2121";
  //curl.get(url, options, function(err, response, body) {});

  // curl(url, function(err) {
  //   console.info(this.status);
  //   console.info('-----');
  //   console.info(this.body);
  //   console.info('-----');
  //   console.info(this.info('SIZE_DOWNLOAD'));
  // });

  var data2={mse:"Teskdsl",nseurl:url};
  // data['url']=url;
  // data['body']='body';
  // data['response']='response';

  res.send(data2);


};
