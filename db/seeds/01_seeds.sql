INSERT INTO users (name, email, password, phone)
VALUES('tommy', 'tommmy123@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111'),
('robert', 'robert001@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111'),
('harry', 'harry1@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '967-1111');


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
  'placeholder img'
),
(
  'Delicious Pizza',
  'An  extremely delicious pizza!',
  1000,
  10,
  'placeholder img'
),
(
  'Amazing Taco',
  'A pretty amazing taco!',
  1000,
  10,
  'placeholder img'
),
(
  'Sublime Shawarma wrap',
  'This wrap is simply sublime!',
  1000,
  10,
  'placeholder img'
),
(
  'Cola-Coco',
  'Cold pop',
  300,
  5,
  'url'
),
(
  'Pepsi',
  'Cold pop',
  300,
  5,
  'url'
),
(
  'Root Beer',
  'Cold Pop',
  300,
  5,
  'url'
),
(
  'Coffee',
  'Hot beverage',
  500,
  7,
  'url'
),
(
  'Fries',
  'Small cut thin potatoes fried',
  400,
  7,
  'url'
),
(
  'Wedges',
  'Potatoes cut and fried',
  600,
  8,
  'url'
),
(
  'Chips',
  'Snack',
  200,
  2,
  'url'
),
(
  'Poutine',
  'Fries with gravy',
  700,
  9,
  'url'
);



INSERT INTO orders (user_id, created_at, total_price)
VALUES('1', '2022-10-28T08:00:00.000Z', 1000),
('2', '2022-10-28T08:00:00.000Z', 1000),
('3', '2022-10-28T08:00:00.000Z', 1000),
('1', '2022-10-22T05:21:00.000Z', 1000);
