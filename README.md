# Currency Converter

A modern React application that provides real-time currency conversion using live exchange rates. Built with React, Vite, and styled with Tailwind CSS.

## Features

- 💱 Real-time currency conversion
- 🔄 Live exchange rates from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- 🔄 Swap currencies with one click
- 📱 Responsive design with a sleek UI
- 🎨 Beautiful backdrop with glass-morphism effects
- ⚡ Fast and lightweight

## Tech Stack

- React
- Vite
- Tailwind CSS
- [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/raj-goud830/currencyConverter.git
cd currencyConverter
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Usage

1. Enter the amount you want to convert in the "From" input field
2. Select the source currency from the dropdown
3. Select the target currency from the second dropdown
4. Click "Convert" to see the result
5. Use the "swap" button to quickly switch between currencies

## Project Structure

```
src/
├── components/
│   └── InputBox.jsx     # Reusable currency input component
├── hooks/
│   └── useCurrencyInfo.js  # Custom hook for fetching exchange rates
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Features in Detail

- **Live Exchange Rates**: Uses the @fawazahmed0/currency-api to fetch current exchange rates
- **Swap Functionality**: Easily swap between source and target currencies
- **Input Validation**: Handles numeric inputs with proper state management
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Glass-morphism UI**: Modern UI with backdrop blur effects

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Background image from [Pexels](https://www.pexels.com/)
- Currency rates provided by [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
