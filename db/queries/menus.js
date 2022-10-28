const db = require('../connection');

const getItems = () => {
    return db.query("SELECT * FROM items")
      .then(items => {
        return items.rows;
      })
  }

const getItem = (id) => {
    return db.query("SELECT * FROM items where id = $1", [id])
    .then(items => {
        return items.rows[0];
    })
}

  module.exports = { getItems, getItem };