# TWAMM Smart Contract - Arbitrum Stylus Implementation

A high-performance Rust implementation of a Time-Weighted Average Market Maker (TWAMM) hook for Arbitrum Stylus. This contract provides the core functionality for executing large trades gradually over time, reducing slippage and preventing MEV exploitation.

## 🏗️ Architecture Overview

This TWAMM implementation uses a modular architecture optimized for Arbitrum Stylus:

- **Virtual Order System**: Orders are executed incrementally across multiple blocks
- **Gas-Optimized Execution**: Rust implementation for maximum efficiency
- **Modular Design**: Clean separation of concerns for maintainability
- **MEV Protection**: Time-distributed execution prevents front-running

## 📁 Project Structure

```
smart-contract/
├── src/
│   ├── lib.rs              # Main contract entrypoint and public interface
│   ├── types.rs            # Type definitions for orders, pool state, etc.
│   ├── errors.rs           # Custom error definitions with detailed codes
│   ├── utils.rs            # Utility functions (safe math, validation)
│   ├── state.rs            # Global contract state management
│   ├── orders.rs           # Order lifecycle management
│   └── hooks.rs            # Virtual order execution engine
├── Cargo.toml              # Rust dependencies and metadata
├── Cargo.lock              # Dependency lock file
└── rust-toolchain.toml     # Rust toolchain configuration
```

## 🔧 Technical Features

### Core Functionality
- **Time-weighted order execution**: Automatically distributes large trades over specified time periods
- **Partial order filling**: Orders can be partially filled and resumed across multiple blocks
- **Protocol fee collection**: Small fees collected on each swap to incentivize liquidity providers
- **Order cancellation and claiming**: Users can cancel active orders or claim completed trades
- **Advanced virtual order management**: Efficient handling of multiple concurrent orders
- **Slippage protection**: Minimum output amount specifications to protect against unfavorable execution

### Performance Optimizations
- **Gas-optimized execution**: Built specifically for Arbitrum Stylus with efficient Rust implementation
- **Batch processing**: Multiple orders processed in single transaction when possible
- **Storage optimization**: Minimal storage footprint with efficient data structures
- **Memory management**: Careful memory allocation for WASM environment

## 🚀 Getting Started

### Prerequisites
- Rust nightly toolchain (specified in `rust-toolchain.toml`)
- Arbitrum Stylus SDK
- Cargo package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thebabalola/TWAMM.git
   cd TWAMM/smart-contract
   ```

2. **Install Rust toolchain**
   ```bash
   rustup toolchain install nightly
   rustup target add wasm32-unknown-unknown
   ```

3. **Install Stylus CLI**
   ```bash
   npm install -g @arbitrum/stylus-cli
   ```

### Building

```bash
# Build the contract
cargo build --target wasm32-unknown-unknown --release

# Build with optimizations for deployment
cargo stylus build --release
```

### Testing

```bash
# Run all tests
cargo test

# Run tests with output
cargo test -- --nocapture

# Run specific test
cargo test test_order_creation
```

## 📖 API Reference

### Core Functions

#### Order Management
```rust
// Create a new TWAMM order
pub fn create_order(
    &mut self,
    token_in: Address,
    token_out: Address,
    amount_in: U256,
    duration: U256,
    min_amount_out: U256,
) -> Result<U256, TwammError>

// Cancel an active order
pub fn cancel_order(&mut self, order_id: U256) -> Result<(), TwammError>

// Claim a completed order
pub fn claim_order(&mut self, order_id: U256) -> Result<(), TwammError>
```

#### Order Queries
```rust
// Get order details
pub fn get_order(&self, order_id: U256) -> Result<Order, TwammError>

// Get user's orders
pub fn get_user_orders(&self, user: Address) -> Vec<U256>

// Get order status
pub fn get_order_status(&self, order_id: U256) -> Result<OrderStatus, TwammError>
```

#### Pool Management
```rust
// Execute virtual orders for a pool
pub fn execute_virtual_orders(&mut self, pool_id: U256) -> Result<(), TwammError>

// Get pool state
pub fn get_pool_state(&self, pool_id: U256) -> Result<PoolState, TwammError>
```

### Data Structures

#### Order
```rust
pub struct Order {
    pub id: U256,
    pub user: Address,
    pub token_in: Address,
    pub token_out: Address,
    pub amount_in: U256,
    pub amount_out: U256,
    pub start_time: U256,
    pub end_time: U256,
    pub min_amount_out: U256,
    pub status: OrderStatus,
    pub filled_amount: U256,
}
```

#### PoolState
```rust
pub struct PoolState {
    pub token_a: Address,
    pub token_b: Address,
    pub reserve_a: U256,
    pub reserve_b: U256,
    pub total_orders: U256,
    pub last_execution: U256,
}
```

## 🔒 Security Considerations

### Access Control
- **Owner-only functions**: Critical functions restricted to contract owner
- **User isolation**: Users can only interact with their own orders
- **Input validation**: All inputs validated for safety and correctness

### Economic Security
- **Slippage protection**: Minimum output amounts prevent unfavorable execution
- **Fee mechanisms**: Protocol fees prevent spam and incentivize liquidity
- **Order limits**: Maximum order sizes prevent market manipulation

### Technical Security
- **Safe math operations**: All arithmetic operations use safe math libraries
- **Reentrancy protection**: Guards against reentrancy attacks
- **Integer overflow protection**: Comprehensive overflow/underflow checks

## 🧪 Testing Strategy

### Unit Tests
- **Order creation**: Test order creation with various parameters
- **Order execution**: Test virtual order execution logic
- **Order cancellation**: Test order cancellation scenarios
- **Error handling**: Test all error conditions and edge cases

### Integration Tests
- **End-to-end flows**: Complete order lifecycle testing
- **Multi-user scenarios**: Test concurrent order execution
- **Gas optimization**: Verify gas usage within acceptable limits

### Test Commands
```bash
# Run all tests
cargo test

# Run with gas profiling
cargo test --features gas-profiling

# Run integration tests
cargo test --test integration_tests
```

## 🚀 Deployment

### Local Development
```bash
# Deploy to local Stylus node
stylus deploy --private-key $PRIVATE_KEY target/wasm32-unknown-unknown/release/twamm.wasm
```

### Testnet Deployment
```bash
# Deploy to Arbitrum Goerli
stylus deploy --private-key $PRIVATE_KEY --rpc-url $GOERLI_RPC target/wasm32-unknown-unknown/release/twamm.wasm
```

### Mainnet Deployment
```bash
# Deploy to Arbitrum One
stylus deploy --private-key $PRIVATE_KEY --rpc-url $MAINNET_RPC target/wasm32-unknown-unknown/release/twamm.wasm
```

## 📊 Gas Optimization

### Optimization Techniques
- **Batch operations**: Process multiple orders in single transaction
- **Storage packing**: Efficient storage layout to minimize gas costs
- **Function inlining**: Inline small functions to reduce call overhead
- **Loop unrolling**: Unroll small loops for better performance

### Gas Usage Estimates
- **Order creation**: ~150,000 gas
- **Order execution**: ~50,000 gas per order
- **Order cancellation**: ~30,000 gas
- **Order claiming**: ~40,000 gas

## 🔧 Configuration

### Environment Variables
```bash
# Required for deployment
PRIVATE_KEY=your_private_key
RPC_URL=your_rpc_url
CONTRACT_ADDRESS=deployed_contract_address

# Optional configuration
PROTOCOL_FEE_BPS=30  # 0.3% protocol fee
MAX_ORDER_DURATION=604800  # 7 days in seconds
MIN_ORDER_AMOUNT=1000000000000000000  # 1 token minimum
```

## 🐛 Error Handling

### Error Types
```rust
pub enum TwammError {
    OrderNotFound,
    OrderAlreadyCompleted,
    OrderNotCancellable,
    InsufficientBalance,
    InvalidAmount,
    InvalidDuration,
    SlippageExceeded,
    Unauthorized,
    ContractPaused,
}
```

### Error Recovery
- **Graceful degradation**: Contract continues operating even with individual order failures
- **User notifications**: Clear error messages for user actions
- **Admin recovery**: Admin functions for emergency situations

## 📈 Monitoring and Analytics

### Key Metrics
- **Order volume**: Total value of orders created
- **Execution efficiency**: Average slippage vs. immediate execution
- **Gas usage**: Gas consumption per operation
- **User adoption**: Number of active users and orders

### Logging
- **Order events**: Creation, execution, cancellation, claiming
- **Error events**: Failed operations with detailed error codes
- **Performance metrics**: Gas usage and execution times

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

### Code Standards
- **Rust formatting**: Use `cargo fmt`
- **Linting**: Use `cargo clippy`
- **Documentation**: Document all public functions
- **Testing**: Maintain >90% test coverage

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code documentation
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join project discussions for questions

---

**TWAMM Smart Contract** - High-Performance DeFi Trading Engine 🚀