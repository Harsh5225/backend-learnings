import Product from "../models/Product.js";

export const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];

    const result = await Product.insertMany(sampleProducts);
    res.status(200).json({
      success: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

export const getProductsInfo = async (req, res) => {
  try {
    //  first
    const data = await Product.aggregate([
      {
        $match: {
          inStock: true,
          price: {
            $gte: 10,
          },
        },
      },
      // stage 2 grouping
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          // avg:"$price",
          count: {
            $sum: 1,
          },
        },
      },

      
    ]);

    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};


export const getProductanalysis=async (req,res)=>{
  try {
    const result= await Product.aggregate([
      {
        $match:{
          category:"Electronics"
        }
      },
      {
        $group:{
          _id:null,
          totalRevenue:{
            $sum:"$price"
          },
          avgPrice:{
             $avg:"$price"
          },
          maxProductPrice:{
             $max:"$price"
          },
          minProductPrice:{
             $min:"$price"
          },
        }
      },
      {
        $project:{
           _id:0,
           totalRevenue:1,
           avgPrice:1,
           maxProductPrice:1,
           minProductPrice:1,
           priceRange:{
            $subtract: ["$maxProductPrice", "$minProductPrice"] 
           },
        }
      }
    ])

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
}


//  Full Function with $avg, $sum, $min, $max, $group
// This function computes:

// Average Price → $avg
// Total Count → $sum
// Minimum Price → $min
// Maximum Price → $max