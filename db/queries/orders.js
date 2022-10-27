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

const createOrder = (order) => {
  const queryParams = [order.user_id, order.order_food, order.created_at, order.total_price, order.estimated_time];
  return db.query(`INSERT INTO orders (user_id, order_food, created_at, total_price, estimated_time)
  VALUES ($1, $2, $3, $4, $5) RETURNING *`, queryParams)
  .then(res => {
    return res.rows[0];
  })
};

const updateOrder = (order) => {
  const queryParams = [order.estimated_time];
  return db.query(`UPDATE orders SET estimated_time = $1 RETURNING *`, queryParams)
  .then(res => {
    return res.rows[0];
  })
};


  module.exports = { getOrders, getOrder, createOrder };