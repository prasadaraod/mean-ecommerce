# MEAN E-commerce Application

This is a full-stack e-commerce application built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The application provides functionalities for product management, user management, shopping cart, checkout process, order management, and an admin panel.

## Features

- **Product Management**: Admins can add, update, and delete products.
- **User Management**: Users can register, log in, and manage their profiles.
- **Shopping Cart**: Users can add products to their cart and view their cart contents.
- **Checkout Process**: Users can proceed to checkout and place orders.
- **Order Management**: Users can view their order history and details.
- **Admin Panel**: Admins have access to a dedicated panel for managing products and orders.

## Project Structure

```
mean-ecommerce-app
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   ├── adminController.js
│   │   │   ├── orderController.js
│   │   │   ├── productController.js
│   │   │   └── userController.js
│   │   ├── models
│   │   │   ├── order.js
│   │   │   ├── product.js
│   │   │   └── user.js
│   │   ├── routes
│   │   │   ├── adminRoutes.js
│   │   │   ├── orderRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   └── userRoutes.js
│   │   └── middleware
│   │       └── auth.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── admin
│   │   │   │   ├── admin-panel.component.ts
│   │   │   │   └── admin-panel.component.html
│   │   │   ├── cart
│   │   │   │   ├── cart.component.ts
│   │   │   │   └── cart.component.html
│   │   │   ├── checkout
│   │   │   │   ├── checkout.component.ts
│   │   │   │   └── checkout.component.html
│   │   │   ├── orders
│   │   │   │   ├── orders.component.ts
│   │   │   │   └── orders.component.html
│   │   │   ├── products
│   │   │   │   ├── product-list.component.ts
│   │   │   │   ├── product-list.component.html
│   │   │   │   ├── product-detail.component.ts
│   │   │   │   └── product-detail.component.html
│   │   │   ├── users
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── register.component.ts
│   │   │   │   └── register.component.html
│   │   │   ├── shared
│   │   │   │   └── header.component.ts
│   │   │   └── app.module.ts
│   │   ├── assets
│   │   ├── environments
│   │   │   ├── environment.ts
│   │   │   └── environment.prod.ts
│   │   └── test.ts
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node src/app.js
   ```

2. Start the frontend application:
   ```
   cd frontend
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`.

## Testing

Unit tests for the Angular application can be run using:
```
ng test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.