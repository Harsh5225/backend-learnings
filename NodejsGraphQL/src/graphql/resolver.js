// how we fetch the data

import products from "../data/products.js";

// !GraphQL resolvers me _ (underscore) ek convention hai, jo parent/root argument ko represent karta hai.
// 1️⃣ Parent (root) argument → Jo pehle se available hota hai (GraphQL schema ke base par).
// 2️⃣ Args (arguments) → Jo mutation ya query ke input ke taur par pass kiye jaate hain.

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((item) => item.id === id),
  },

  Mutation: {
    createProduct: (_, { title, category, price, inStock }) => {
      const newproducts = {
        id: String(products.length + 1),
        title,
        category,
        price,
        inStock,
      };

      products.push(newproducts);
      return newproducts;
    },

    deleteProduct: (_, { id }) => {
      const index = products.findIndex((product) => product.id === id);
      if (index === -1) return false;

      products.splice(index, 1);
      return true;
    },

    updateProduct:(_,{id,...updates})=>{
      
      const index=products.findIndex(product=> product.id===id);
      if(index===-1) return null;
       const updateProduct={
        ...products[index],
        ...updates
       }
      //  const obj={...updates}
      //   console.log(obj)
       products[index]=updateProduct;
       return updateProduct;
    }
  },
};

export default resolvers;
