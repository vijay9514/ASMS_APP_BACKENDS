// import CustomerModel from '../models/addCustomerModels/AddCustomer.js'
import CustomerModel from '../../models/addCustomerModels/AddCustomer.js';

class addCustomer{
    static customerSave = async (req, res) => {
        const { customerName, adharNumber, villageName, productsCompanyName, productName,productCount,productPrice,todayDate } = req.body;
        if (customerName && adharNumber && villageName && productsCompanyName && productName && productCount &&productPrice,todayDate){
            try {
               
                const doc = new CustomerModel({
                    customerName: customerName,
                    adharNumber: adharNumber,
                    villageName: villageName,
                    productsCompanyName:productsCompanyName,
                    productName: productName,
                    productCount:productCount,
                    productPrice:productPrice,
                    todayDate:todayDate,

                })
                await doc.save()
                res.status(201).send({ "status": "success", "message": "Customer Added Successfully",});
              } catch (error) {
                console.log(error)
                res.send({ "status": "failed", "message": "Server side error" })
              }
             
            } else {
                res.send({ "status": "failed", "message": "All fields are required" })
              } 
          } 
        }

        export default addCustomer
    

