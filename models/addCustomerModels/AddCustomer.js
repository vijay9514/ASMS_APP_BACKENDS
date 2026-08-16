
import mongoose from "mongoose";

// Defining Schema
const addCustomerSchema = new mongoose.Schema({
  customerName: { type: String, required: true, trim: true },
  adharNumber: { type: String, required: true, trim: true },
  villageName: { type: String, required: true, trim: true },
  productsCompanyName:{type:String,required:true, trim:true},
  productName: { type: String, required: true,trim:true },
  productCount: { type: String, required: true,trim:true },
  productPrice: { type: String, required: true,trim:true },
  todayDate:{type:String,required:true, trim:true},
  
  
 
})

// Model
const CustomerModel = mongoose.model("Customer_table", addCustomerSchema)

export default CustomerModel