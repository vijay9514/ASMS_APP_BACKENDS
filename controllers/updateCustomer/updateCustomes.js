import CustomerModel from '../../models/addCustomerModels/AddCustomer.js';
//update customers
//this is the updated api =>http://localhost:9514/api/user/:updateCustomer/63347a39968469367a8d3bd8
class updateone{
// static updateCustomer=async(req,res)=>{

//     try{
//         const updateCust={
//             _id:req.body._id,
//             customerName:req.body.customerName,
//             adharNumber: req.body.adharNumber,
//             villageName:req.body.villageName,
//             productsCompanyName:req.body.productsCompanyName,
//             productName: req.body.productName,
//             productCount: req.body.productCount,
//             productPrice: req.body.productPrice,
          
          
//         };
      
//      const updateCustomers=await CustomerModel.findByIdAndUpdate(updateCust);
//         // { _id:req.params.updateCustomer},
 
//         updateCustomers.updateOne()
//         // res.json(updateCustomers)
//         res.status(201).send({ "status": "success", "message": "Customer Updated Successfully",});
//         // res.send({ "status": "success", "message": "Customer Updated Successfully",});
//     }catch(error){
//         res.json({message:error});
//         res.send({ "status": "failed", "message": "Server side error" })
//     }
    
// }
static updateCustomer = async (req, res) => {
    try {
        const updateCust = {
            customerName:req.body.customerName,
            adharNumber: req.body.adharNumber,
            villageName:req.body.villageName,
            productsCompanyName:req.body.productsCompanyName,
            productName: req.body.productName,
            productCount: req.body.productCount,
            productPrice: req.body.productPrice,
      
        };
    
        const updatedcustomers = await CustomerModel.findByIdAndUpdate(
          { _id: req.params.id},
          updateCust
        );
        res.json(updatedcustomers);
      } catch (error) {
        res.json({ message: error });
      }
};
};

export default updateone