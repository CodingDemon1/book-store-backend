# Food Store

## About :-

- A backend for Food Store.

## Deployed Link

- [Cyclic Link](https://awful-fly-cummerbund.cyclic.app/)

## Presentation Video Link

- [Presentation Video](https://drive.google.com/file/d/16O71Og9L-GcFEWX6_GffxsJLf-hpjkUf/view?usp=sharing)

## Routes :-

## For Users

### User Registration

- Method - POST
- Endpoint - "/api/register"
- Description - This endpoint will allow users to register. Hash the password on store.
- Required Body - {
  name: String,
  email: String,
  password: String,
  address: {
  street: String,
  city: String,
  state: String,
  country: String,
  zip: String
  }
  }

### User Login

- Method - POST
- Endpoint - "/api/login"
- Description - This endpoint will allow users to login. Return JWT token on login.
- Required Body - {
  email: String,
  password: String,
  }

### Password Reset

- Method - PATCH
- Endpoint - "/api/user/:id/reset"
- Description - This endpoint will allow users to reset the password identified by user id, providing the current password and new password in the body.
- Required Params - User Id
- Required Body - {
  password: String,
  }

## For Resturents

### Get All Resturents

- Method - GET
- Endpoint - "/api/restaurants"
- Description - This endpoint will return a list of all available restaurants.

### Get Resturent by Id

- Method - GET
- Endpoint - "/api/restaurants/:id"
- Description - This endpoint will return a list of all available restaurants.
- Required Params : ID of the Resturent

### Get The Menues of the specific Resturent

- Method - GET
- Endpoint - "/api/restaurants/:id/menu"
- Description - This endpoint will return the menu of a specific restaurant identified by its ID.
- Required Params : ID of the Resturent

### Add new menu for specific Resturent

- Method - POST
- Endpoint - "/api/restaurants/:id/menu"
- Description - This endpoint will allow the user to add a new item to a specific restaurants menu identified by its ID.
- Required Params : ID of the Resturent
- Required Body : { name: String,
  description: String,
  price: Number,
  image: String}

### Delete a menu from specific Resturent

- Method - DELETE
- Endpoint - "/api/restaurants/:id/menu/:id"
- Description - This endpoint will allow the user to delete a particular menu item identified by its id from a specific restaurant.
- Required Params : ID of the Resturent ans ID of the menu

## For Orders

### For Place the Order

- Method - POST
- Endpoint - "/api/orders"
- Description - This endpoint will allow the user to place an order.
- Required Body - {
  user : { type: ObjectId, ref: 'User' },
  restaurant : { type: ObjectId, ref: 'Restaurant' },
  items: [{
  name: String,
  price: Number,
  quantity: Number
  }],
  totalPrice: Number,
  deliveryAddress: {
  street: String,
  city: String,
  state: String,
  country: String,
  zip: String
  },
  status: String
  }

### Getting the details of a specific Order

- Method - GET
- Endpoint - "/api/orders/:id"
- Description - This endpoint will return the details of a specific order identified by its ID. (Populate all the details
- Required Params : ID of Order

### Update the details of a specific Order

- Method - PATCH
- Endpoint - "/api/orders/:id"
- Description - This endpoint will allow users to update the status of a specific order identified by its ID.
- Required Body - {
  user : { type: ObjectId, ref: 'User' },
  restaurant : { type: ObjectId, ref: 'Restaurant' },
  items: [{
  name: String,
  price: Number,
  quantity: Number
  }],
  totalPrice: Number,
  deliveryAddress: {
  street: String,
  city: String,
  state: String,
  country: String,
  zip: String
  },
  status: String
  }
- Required Params : ID of Order
