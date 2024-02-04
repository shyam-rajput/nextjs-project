import mongoose from 'mongoose';

const productModel = new mongoose.Schema({
  name: String,
  price: String,
  company: String,
  color: String,
});

export const Product =
  mongoose.models.products || mongoose.model('products', productModel);

// yaha par "products" hamare collection ka name hai jo hamne mongoDB me banaya hai and 'productModel' hamare schema ka name hai and hamne yaha se Product Schema ko export kiya hai.

// 'mongoose.models.products' isse ham yeh dek rahe hai ki agar 'products' model agar pehle se he bana hua hai to teek hai agar nahi hai to 'mongoose.model('products') se new model create ho jaayega hamare schema me means mongoDB ke ander products name se.
