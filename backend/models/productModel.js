import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
       // _id:{type:String},
        category: {type:String, },
        productOrder: {type:Number,   },
        name: {type:String, required:true, },
        slug: {type:String, required:true},
        image: {type:String, required:true},
        imageBig: {type:String, required:true},
        price: {type:Number, required:true},
        offerPrice: {type:Number, required:true},
        pColor: {type:String},
        color: [{
            colorName:{type:String},
            colorImg:{type:String},
            gallery:{type:String},
        }],
        Specification:{
            Capacity:{type:String},
            BatteCapacityry:{type:String},
            'USB output port':{type:Number},
            Material :{type:String},
            Dimension :{type:String},
            'Net weight' :{type:String},
            'Packing Contain' :{type:String},
            'Bluetooth Version' :{type:String},
            Output :{type:String},
            Size :{type:String},
            Weight :{type:String},
            color: {type:String},
            'Net Weight': {type:String},
        }
    },
    {
        timestamps:true
    }
);

const Product = mongoose.model('product', productSchema);
export default Product;