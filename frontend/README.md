# TWAMM Frontend - Next.js Trading Interface

A modern Next.js application providing an intuitive user interface for the Time-Weighted Average Market Maker (TWAMM) system. This frontend enables users to create, manage, and monitor TWAMM orders with a professional trading experience.

## 🚀 Features

### Core TWAMM Functionality
- **Order Creation**: Set up time-weighted orders with custom parameters
- **Order Management**: View, cancel, and claim active orders
- **Real-time Monitoring**: Track order execution progress and status
- **Portfolio Overview**: Monitor all your TWAMM positions in one place
- **Transaction History**: Complete audit trail of all trading activities

### User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional UI**: Clean, modern interface optimized for trading
- **Real-time Updates**: Live order status and balance tracking
- **Transaction Feedback**: Clear status updates and success confirmations
- **Multi-wallet Support**: Connect with MetaMask, WalletConnect, and other Web3 wallets

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#144489` - Trust, stability, professional trading
- **Accent Green**: `#10B981` - Success, positive returns, growth
- **Warning Orange**: `#F59E0B` - Caution, pending orders
- **Error Red**: `#EF4444` - Errors, failed transactions
- **Neutral Gray**: `#6B7280` - Secondary text, borders

### Typography
- **Headings**: Bold, blue text for hierarchy and importance
- **Body Text**: Clean, readable gray text for content
- **Interactive Elements**: Clear hover states and smooth transitions
- **Data Display**: Monospace fonts for numerical data and addresses

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3 Integration**: Wagmi v2 + Viem
- **Icons**: Lucide React
- **State Management**: React hooks + Zustand (for complex state)
- **Charts**: Recharts for order visualization

### Project Structure
```
frontend/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page with TWAMM overview
│   ├── dashboard/         # Main trading dashboard
│   ├── orders/            # Order management interface
│   ├── portfolio/         # Portfolio overview
│   └── layout.tsx         # Root layout with providers
├── components/            # Reusable components
│   ├── ui/               # Base UI components (buttons, inputs, etc.)
│   ├── trading/          # Trading-specific components
│   ├── charts/           # Data visualization components
│   └── layout/           # Layout components (header, footer, sidebar)
├── hooks/                # Custom React hooks
│   ├── useTWAMM.ts      # TWAMM contract interactions
│   ├── useOrders.ts     # Order management logic
│   └── usePortfolio.ts  # Portfolio data management
├── lib/                  # Utility functions and configurations
│   ├── contracts.ts     # Contract ABIs and addresses
│   ├── utils.ts         # Helper functions
│   └── constants.ts     # Application constants
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Web3 wallet (MetaMask, WalletConnect, etc.)
- Access to Arbitrum network

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thebabalola/TWAMM.git
   cd TWAMM/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_TWAMM_CONTRACT_ADDRESS=0x...
   NEXT_PUBLIC_ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
   NEXT_PUBLIC_CHAIN_ID=42161
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔗 Smart Contract Integration

### Contract Details
- **Network**: Arbitrum One (Chain ID: 42161)
- **Contract**: TWAMM Hook (Stylus)
- **Interface**: Custom ABI for TWAMM operations

### Key Functions
- `createOrder()`: Create new TWAMM orders
- `cancelOrder()`: Cancel active orders
- `claimOrder()`: Claim completed orders
- `getOrderStatus()`: Check order execution status
- `getUserOrders()`: Retrieve user's order history

## 💰 How to Use

### Creating a TWAMM Order
1. **Connect Wallet**: Use the header to connect your Web3 wallet
2. **Navigate to Dashboard**: Go to the main trading interface
3. **Select Trading Pair**: Choose the tokens you want to trade
4. **Set Order Parameters**:
   - Total amount to trade
   - Time duration for execution
   - Minimum output amount (slippage protection)
5. **Review and Confirm**: Check all parameters before submitting
6. **Approve and Execute**: Approve token spending and create the order

### Managing Orders
1. **View Active Orders**: See all your running TWAMM orders
2. **Monitor Progress**: Track execution progress in real-time
3. **Cancel if Needed**: Cancel orders before completion if required
4. **Claim Completed Orders**: Claim tokens when orders finish

### Portfolio Overview
1. **Total Value**: See your portfolio's total value across all positions
2. **Order History**: Review past and current orders
3. **Performance Metrics**: Track your trading performance
4. **Asset Allocation**: View your token distribution

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the frontend directory:
```env
# Contract Configuration
NEXT_PUBLIC_TWAMM_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_CHAIN_ID=42161

# RPC Configuration
NEXT_PUBLIC_ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc

# Optional: Analytics and Monitoring
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Network Configuration
The app is configured for Arbitrum One by default. To switch networks:
1. Use the network switcher in the header
2. Add Arbitrum to your wallet manually
3. Ensure you have ETH for gas fees

## 🧪 Testing

### Testnet Setup
1. Switch to Arbitrum Goerli testnet
2. Get testnet ETH from [Arbitrum faucet](https://faucet.quicknode.com/arbitrum/goerli)
3. Deploy TWAMM contract to testnet
4. Test all functionality with test tokens

### Testing Flow
1. Create test TWAMM orders with small amounts
2. Verify order creation and status updates
3. Test order cancellation functionality
4. Monitor order execution over time
5. Test claiming completed orders

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Other Platforms
- **Netlify**: Connect repository and configure build settings
- **AWS Amplify**: Import repository and configure build
- **Docker**: Use the included Dockerfile for containerized deployment

## 🎯 Key Features in Detail

### Order Creation Interface
- **Token Selection**: Easy token pair selection with search
- **Amount Input**: Clear amount input with balance display
- **Time Configuration**: Intuitive time period selection
- **Slippage Protection**: Configurable minimum output amounts
- **Gas Estimation**: Real-time gas cost estimation

### Order Management
- **Real-time Status**: Live updates on order execution
- **Progress Visualization**: Charts showing execution progress
- **Cancellation**: One-click order cancellation
- **Claiming**: Easy claiming of completed orders

### Portfolio Dashboard
- **Overview Cards**: Key metrics at a glance
- **Order History**: Complete transaction history
- **Performance Charts**: Visual performance tracking
- **Asset Breakdown**: Token allocation visualization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the TWAMM system. See the main repository for licensing information.

## 🆘 Support

- **Documentation**: Check the main project README
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join project discussions for questions

---

**TWAMM Frontend** - Professional Trading Interface for DeFi 🚀