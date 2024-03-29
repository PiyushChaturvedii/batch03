const { ObjectId } = require('mongodb');

const getDb = require('../util/database').getDb;


class User{
  constructor(username, email, cart, id){
    this.name = username;
    this.email = email;
    this.cart = cart;  //{items:[product,1]}
    this._id = id;
  }

save(){
  const db = getDb();
  return db.collection('users').insertOne(this);
}

  static findById(userId) {
    const db = getDb();
    // db.collection('users').find({ _id: new ObjectId(userId) }).next();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) }).then(user => {
        return user;
      }).catch(err=>{console.log(err)});
   }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    })
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items] 

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      })
    }
    
    const updateCart = {
      items:updatedCartItems
    }
    const db = getDb();
    db.collection('users')
      .updateOne(
      { _id: new ObjectId(this._id) },
      {$set: {cart: updateCart}}
    )
    
}

}

module.exports = User;

