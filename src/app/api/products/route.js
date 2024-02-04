// Make Connection with mongoDB Database:

import { connectionStr } from '@/lib/db';
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  let data = [];
  let success;
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
    success = true
  } catch (error) {
    data = { result: "error" }
    success = false
  }
  return NextResponse.json({ result: data, success: success });
}

// export async function POST() {
//   await mongoose.connect(connectionStr);
//   let product = new Product({
//     name: "One Plus",
//     price: "25000",
//     color: "white",
//     company: "Oneplus",
//     category: "mobile"
//   });
//   const result = await product.save();

//   return NextResponse.json({ result, success: true })
// }

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let product = new Product(payload);
  const result = await product.save();

  return NextResponse.json({ result, success: true })
}