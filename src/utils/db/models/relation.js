import Products from "./products.js";
import Review from "./reviews.js";
import Categories from "./category.js"
import Users from "./user.js"
import productCategory from "./productCategory.js"
import Cart from "./Cart.js"

Products.hasMany(Review, { onDelete: "CASCADE"  });
Review.belongsTo(Products,  { onDelete: "CASCADE"  });

// **************** Relationship between Product and Cart ************
Products.hasMany(Cart); 
Cart.belongsTo(Products); 
// **************** Relationship between User and Review **************
Users.hasMany(Review, { onDelete: "CASCADE"  });
Review.belongsTo(Users,  { onDelete: "CASCADE"  })
// **************** Relationship between User and Products **************
Products.belongsToMany(Users, {
    through: { model: Cart, unique: false },
  });
  Users.belongsToMany(Products, {
    through: { model: Cart, unique: false },
  });

// **************** Relationship between User and Cart **************
Users.hasMany(Cart, { onDelete: "CASCADE" } )
Cart.belongsTo(Users, { onDelete: "CASCADE" })
// many-to-many between product  and category
Products.belongsToMany(Categories, {
    through: productCategory,
    onDelete: "CASCADE",  }); 
Categories.belongsToMany(Products, {
        through: productCategory,
        onDelete: "CASCADE",  }); 
   

export {Products, Review, Users, Categories, productCategory, Cart }