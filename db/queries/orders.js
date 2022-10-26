const db = require('../connection');

const getOrders = () => {
    return db.query("SELECT * FROM orders")
      .then(orders => {
        return orders.rows;
      })
  }

const getOrder = (id) => {
    return db.query("SELECT * FROM orders where id = $1", [id])
    .then(orders => {
        return orders.rows[0];
    })
}




const addOrder = 

  module.exports = { getOrders, getOrder };