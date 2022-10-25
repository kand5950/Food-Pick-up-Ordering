const db = require('../connection');

const getItems = () => {
    return db.query('SELECT * FROM items;')
      .then(data => {
        return data.rows;
      });
  };

const getItem = () => {
    return db.query("SELECT * FROM items where id = $1", [id])
    .then(data => {
        return data.rows[0];
    });
};
  module.exports = { getItems, getItem };