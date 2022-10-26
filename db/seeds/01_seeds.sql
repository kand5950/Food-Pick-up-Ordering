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
  'https://media.istockphoto.com/photos/closeup-of-a-veggie-burger-with-copy-space-picture-id1331109186'
),
(
  'Delicious Pizza',
  'An  extremely delicious pizza!',
  1000,
  10,
  'https://media.istockphoto.com/photos/freshly-baked-pizza-with-arugula-tomato-red-onion-and-mozzarella-picture-id1279000076'
),
(
  'Amazing Taco',
  'A pretty amazing taco!',
  1000,
  10,
  'https://media.istockphoto.com/photos/barbecue-taco-picture-id1269723824'
),
(
  'Cola-Coco',
  'Cold pop',
  300,
  5,
  'https://media.istockphoto.com/photos/isolated-chilled-coca-cola-picture-id458120031?s=612x612'
),
(
  'Pepsi',
  'Cold pop',
  300,
  5,
  'https://media.istockphoto.com/photos/pepsi-can-with-water-droplets-picture-id459396911'
),
(
  'Root Beer',
  'Cold Pop',
  300,
  5,
  'https://media.istockphoto.com/photos/frozen-dark-stout-beer-float-picture-id537639977?s=612x612'
),
(
  'Fries',
  'Small cut thin potatoes fried',
  400,
  7,
  'https://media.istockphoto.com/photos/french-fries-picture-id852412726?s=612x612'
),
(
  'Wedges',
  'Potatoes cut and fried',
  600,
  8,
  'https://media.istockphoto.com/photos/potato-wedges-baked-with-rosemary-fast-food-picture-id1182303795'
),
(
  'Poutine',
  'Fries with gravy',
  700,
  9,
  'https://media.istockphoto.com/photos/classic-french-canadian-poutine-picture-id154959976'
);



INSERT INTO orders (user_id, created_at, total_price)
VALUES('1', '2022-10-28T08:00:00.000Z', 1000),
('2', '2022-10-28T08:00:00.000Z', 1000),
('3', '2022-10-28T08:00:00.000Z', 1000),
('1', '2022-10-22T05:21:00.000Z', 1000);
