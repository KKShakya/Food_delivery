# Food_delivery
This is a Food delivery App backend to manage restaurant selection and orders from Client.


# Authentication Collection

**Description:** This collection is for Authentication purposes only.

**Postman Collection Link:** [Authentication Collection](https://restless-comet-657983.postman.co/workspace/8bdb383d-e532-4bb8-8c86-845e0f597e18/collection/19000646-bc1174f4-db06-4708-a23e-2c93524a62d9?action=share&creator=19000646&source=collection_link)

## Requests

| Name | Method | URL | Description |
|------|--------|-----|-------------|
| register | POST | http://localhost:8080/api/register | A request to register a new user in the Database |
| login | POST | http://localhost:8080/api/login | To allow user to login to the System with Cookies generation |
| root to check API working | GET | http://localhost:8080 | To check the working of API. Demo test |
| resetPassword | POST | http://localhost:8080/api/user/647c262bec59224ed0526e58/reset | Allows users to reset their password by providing the current password and new password in the request body. |

</br>
</br>

### register

- Method: POST
- URL: http://localhost:8080/api/register
- Description: A request to register a new user in the Database
- Body:
  ```json
  {
      "name": "kumar",
      "email": "jumbo@gmail.com",
      "password": "12345"
  }

### login

- Method: POST
- URL: http://localhost:8080/api/login
- Description: To allow user to login to the System with Cookies generation
- Body:
  ```json
    {
        "email": "jumbo@gmail.com",
        "password": "123456"
    }

### root to check API working

- Method: GET
- URL: http://localhost:8080
- Description: To check the working of API. Demo test

</br>

### resetPassword

- Method: POST
- URL: http://localhost:8080/api/user/647c262bec59224ed0526e58/reset
- Description: Allows users to reset their password by providing the current password and new password in the request body.
- Body:
  ```json
  {
      "currentPassword": "",
      "newPassword": ""
  }

</br>
</br>


# Restaurants Collection

**Description:** This collection is for managing restaurant-related operations.

**Postman Collection Link:** [Restaurants Collection](https://restless-comet-657983.postman.co/workspace/Food_delivery-app~8bdb383d-e532-4bb8-8c86-845e0f597e18/collection/19000646-2296d5ba-924c-4a29-a96e-d2f921d82a94?action=share&creator=19000646&source=collection_link)

</br>
</br>



## Requests

| Name | Method | URL | Description |
|------|--------|-----|-------------|
| delete a menu item | DELETE | http://localhost:8080/api/restaurants/647c3f2d4c4ebcbb300c4784/menu/647c89c65d544d9d3098c09c | Allows the user to delete a particular menu item identified by its ID from a specific restaurant. |
| add a menu item | POST | http://localhost:8080/api/restaurants/647c3f2d4c4ebcbb300c4784/menu | Allows the user to add a new item to a specific restaurant's menu identified by its ID. |
| Specific restaurant details | GET | http://localhost:8080/api/restaurants/647c3f2d4c4ebcbb300c4784 | Returns the details of a specific restaurant identified by its ID. |
| get a specific restaurant menu | GET | http://localhost:8080/api/restaurants/647c40364c4ebcbb300c4788/menu | Returns the menu of a specific restaurant identified by its ID. |
| get all restaurants | GET | http://localhost:8080/api/restaurants | Returns a list of all available restaurants. |


</br>
</br>

### delete a menu item

- Method: DELETE
- URL: http://localhost:8080/api/restaurants/647c3f2d4c4ebcbb300c4784/menu/647c89c65d544d9d3098c09c
- Description: Allows the user to delete a particular menu item identified by its ID from a specific restaurant.
- Body:
  ```json
  {
      "name": "Paneer tikka Malai",
      "description": "Freshly prepared and slow roasted paneer",
      "price": 90,
      "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food_400.jpg"
  }


</br>

### add a menu item

- Method: POST
- URL: http://localhost:8080/api/restaurants/647c3f2d4c4ebcbb300c4784/menu
- Description: Allows the user to add a new item to a specific restaurant's menu identified by its ID.
- Body:
  ```json
  {
      "name": "Paneer malai kofta",
      "description": "Freshly prepared and slow roasted paneer",
      "price": 120,
      "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food_400.jpg"
  }
  
</br>

### Specific restaurant details

- Method: GET
- URL: http://localhost:8080/api/restaurants/647c3f2d4c4ebcbb300c4784
- Description: Returns the details of a specific restaurant identified by its ID.


</br>

### get a specific restaurant menu

- Method: GET
- URL: http://localhost:8080/api/restaurants/647c40364c4ebcbb300c4788/menu
- Description: Returns the menu of a specific restaurant identified by its ID.

</br>

### get all restaurants
- Method: GET
- URL: http://localhost:8080/api/restaurants
- Description: Returns a list of all available restaurants.

</br>
</br>

# Orders Collection

**Description:** This collection is for managing order-related operations.

**Postman Collection Link:** [Orders Collection](https://restless-comet-657983.postman.co/workspace/Food_delivery-app~8bdb383d-e532-4bb8-8c86-845e0f597e18/collection/19000646-d2316c03-0c4a-4f38-afee-ab0a586b1997?action=share&creator=19000646&source=collection_link)

## Requests

| Name | Method | URL | Description |
|------|--------|-----|-------------|
| Create an Order | POST | http://localhost:8080/api/orders/ | Allows the user to place an order. |
| Update the Status | PATCH | http://localhost:8080/api/orders/647c967cf692847deac0e8f3 | Allows users to update the status of a specific order identified by its ID. |
| Get Specific Order | GET | http://localhost:8080/api/orders/647c967cf692847deac0e8f3 | Returns the details of a specific order identified by its ID. |

</br>
</br>

### Create an Order

- Method: POST
- URL: http://localhost:8080/api/orders/
- Description: Allows the user to place an order.
- Body:
  ```json
  {
    "user": "647c262bec59224ed0526e58",
    "restaurant": "647c3f2d4c4ebcbb300c4784",
    "items": [
      { "name": "Item 1", "price": 100, "quantity": 2 },
      { "name": "Item 2", "price": 150, "quantity": 1 },
      { "name": "Item 2", "price": 150, "quantity": 1 }
    ],
    "deliveryAddress": {
      "street": "MOdi street",
      "city": "Shivpuri",
      "state": "Madhy Pradesh",
      "country": "India",
      "ZIP": "473551"
    },
    "status": "placed"
  }

</br>

### Update the Status

- Method: PATCH
- URL: http://localhost:8080/api/orders/647c967cf692847deac0e8f3
- Description: Allows users to update the status of a specific order identified by its ID.
- Body:
  ```json
  {
      "status": "on the way"
  }

</br>

###  Get Specific Order

- Method: GET
- URL: http://localhost:8080/api/orders/647c967cf692847deac0e8f3
- Description: Returns the details of a specific order identified by its ID.



# Libraries and Tools Used

The following libraries and tools were used in the development of this project:

## Libraries

- [bcrypt](https://www.npmjs.com/package/bcrypt): Version 5.1.0. Used for password hashing and encryption.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Version 1.4.6. Used for parsing cookies in Express.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Version 16.1.3. Used for loading environment variables from a .env file.
- [express](https://www.npmjs.com/package/express): Version 4.18.2. A fast and minimalist web application framework for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Version 9.0.0. Used for generating and verifying JSON web tokens (JWT).
- [mongoose](https://www.npmjs.com/package/mongoose): Version 7.2.2. An Object Data Modeling (ODM) library for MongoDB and Node.js.
- [nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.22. A utility that automatically restarts the Node.js application when file changes are detected.

## Tools

- [VScode](https://code.visualstudio.com/): A popular code editor with great features and extensions for JavaScript development.
- [Postman](https://www.postman.com/): A powerful API testing and documentation platform used for testing RESTful APIs.
- [MongoDB Compass](https://www.mongodb.com/products/compass): A graphical user interface (GUI) tool for MongoDB that allows you to explore and interact with your MongoDB data.

Please refer to the respective links for more information about each library and tool.
