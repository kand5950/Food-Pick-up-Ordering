INSERT INTO users (name, email, password, phone)
VALUES('tommy', 'tommmy123@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111'),
('robert', 'robert001@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111'),
('harry', 'harry1@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111');

INSERT INTO admins (name, email, password, phone)
VALUES('admin', 'admin@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111');

INSERT INTO items (
  name,
  description,
  price,
  estimated_time,
  thumbnail_photo_url
)
VALUES (
  'Tasty Burger',
  'A very tasty burger!',
  1000,
  10,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfWqjrhDZ-MlTKUo2unOK6fqX957IkZr8tQ&usqp=CAU'
),
(
  'Delicious Pizza',
  'An  extremely delicious pizza!',
  1000,
  10,
  'https://www.pamperedchef.ca/iceberg/com/product/100251-lg.jpg'
),
(
  'Amazing Taco',
  'A pretty amazing taco!',
  1000,
  10,
  'https://www.fairmont-mayakoba.com/wp-content/uploads/2021/09/Tacos-3.jpg'
),
(
  'Coca-Cola',
  'Cold pop',
  300,
  5,
  'https://cdn.dribbble.com/userupload/3245137/file/original-eb30a94290d96f3cf3ba96726595bbcc.png?resize=400x0'
),
(
  'Pepsi',
  'Cold pop',
  300,
  5,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIx2qoK1ki85wSkf7r56b00z9hd3TV5CWww&usqp=CAU'
),
(
  'Root Beer',
  'Cold Pop',
  300,
  5,
  'https://i.pinimg.com/originals/b7/b0/0f/b7b00f40039bd1a711ab49edeaf451a7.jpg'
),
(
  'Fries',
  'Small cut thin potatoes fried',
  400,
  7,
  'https://t3.ftcdn.net/jpg/01/70/27/56/360_F_170275666_53KCP4IuiCQEZazFAdexaRmsl7BEMQwI.jpg'
),
(
  'Wedges',
  'Potatoes cut and fried',
  600,
  8,
  'https://bakeplaysmile.com/wp-content/uploads/2022/02/Crispy-Potato-Wedges-2.jpg'
),
(
  'Poutine',
  'Fries with gravy',
  700,
  9,
  'https://heatz.ca/wp-content/uploads/2021/01/Shawarma-poutine.jpg'
);



