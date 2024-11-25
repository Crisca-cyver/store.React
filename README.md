# TiendaPro - Modern E-commerce Platform

A modern, responsive e-commerce platform built with React, TypeScript, and Tailwind CSS.

![TiendaPro Screenshot](https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

## Features

- 🛍️ Product catalog with dynamic filtering
- 🛒 Shopping cart functionality with real-time updates
- 💳 Secure checkout process
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔍 Type-safe development with TypeScript
- 🏪 State management with Zustand

## Tech Stack

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Code Quality:** ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Products.tsx
│   └── Cart.tsx
├── store/              # State management
│   └── useCart.ts
├── types/              # TypeScript definitions
│   └── index.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Components

### Navbar
The main navigation component featuring:
- Logo and brand name
- Navigation links
- Shopping cart icon with item counter

### ProductCard
Reusable product display component with:
- Product image
- Title and description
- Price
- Add to cart functionality

### Cart
Shopping cart page with:
- Item list
- Quantity controls
- Remove item functionality
- Total calculation

## State Management

The application uses Zustand for state management, particularly for the shopping cart functionality:

```typescript
interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Lucide Icons](https://lucide.dev/)
