const db = require('../connection');

const getOrders = () => {
    return db.query("SELECT * FROM orders")
      .then(order => {
        return order.rows;
      })
  }

const getOrder = (id) => {
    return db.query("SELECT * FROM orders where id = $1", [id])
    .then(items => {
        return items.rows[0];
    })
}

  module.exports = { getOrders, getOrder };