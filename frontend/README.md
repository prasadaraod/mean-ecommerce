# Frontend eCommerce Application

This is the frontend part of the MEAN stack eCommerce application. It is built using Angular and provides functionalities for product management, user management, shopping cart, checkout process, and order management.

## Features

- **Product Management**: View product lists and details.
- **User Management**: User registration and login functionalities.
- **Shopping Cart**: Add and remove products from the cart.
- **Checkout Process**: Complete the purchase of products.
- **Order Management**: View and manage orders.

## Project Structure

The frontend application is structured as follows:

```
frontend
├── src
│   ├── app
│   │   ├── admin
│   │   ├── cart
│   │   ├── checkout
│   │   ├── orders
│   │   ├── products
│   │   ├── users
│   │   └── shared
│   ├── assets
│   ├── environments
│   └── test.ts
├── angular.json
├── package.json
└── tsconfig.json
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd mean-ecommerce-app/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   ng serve
   ```

4. **Open your browser** and navigate to `http://localhost:4200`.

## Unit Testing

The application includes unit tests for components and services. To run the tests, use the following command:

```
ng test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.