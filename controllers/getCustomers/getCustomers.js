import CustomerModel from '../../models/addCustomerModels/AddCustomer.js';
//this api used for get all customers  
//http://localhost:9514/api/user/allCustomers
//this api used for get single customer
//http://localhost:9514/api/user/633d78555e065e8f15e1ed1f


//here is code of get all customers
class customer_alls{
static customer_all = async (req, res) => {
    try {
        const customers = await CustomerModel.find();
        res.json(customers);
      } catch (error) {
        res.json({ message: error });
      }
    }


//here code is the get single customer recored
static customer_one = (req, res) => {
  const id = req.params.id;
  CustomerModel.findById(id).then(data => {
      if (!data)
      res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    }).catch(err => {res.status(500).send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

//here is the code of delete single customer 
static delete_oneCustomer = (req, res) => {
  const id = req.params.id;
  CustomerModel.findByIdAndRemove(id).then(data => {
      if (!data)
      res.status(404).send({ message: "Not found Tutorial with id " + id });
      else  res.status(201).send({ "status": "success", "message": "Customer delete Successfully",});
    }).catch(err => {res.status(500).send({ message: "Error delete Tutorial with id=" + id });
    });
};
};

        export default customer_alls
    
