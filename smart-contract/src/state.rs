
use stylus_sdk::storage::{StorageMap, StorageStruct};
use primitive_types::{U256, H160, H256};
use crate::types::{Order, PoolState, PoolAnalytics};

/// Global contract state
#[derive(StorageStruct)]
pub struct TWAMMState {
    /// Mapping of authorized operators
    pub authorized_operators: StorageMap<H160, bool>,
    
    /// Mapping of pool states
    pub pool_states: StorageMap<H256, PoolState>,
    
    /// Mapping of orders per pool
    pub orders: StorageMap<H256, Vec<Order>>,
    
    /// Mapping of pool analytics
    pub pool_analytics: StorageMap<H256, PoolAnalytics>,
    
    /// Mapping of user order indexes per pool
    pub user_order_indexes: StorageMap<(H160, H256), Vec<U256>>,
    
    /// Constants
    pub min_duration: U256,
    pub max_duration: U256,
    pub execution_interval: U256,
    pub protocol_fee_bps: U256,
    pub bps_denominator: U256,
    pub min_order_amount: U256,
    pub max_orders_per_user: U256,
    pub max_slippage_bps: U256,
}

impl TWAMMState {
    /// Initialize the contract state with default constants
    pub fn initialize(&mut self) {
        // Set default constants
        self.min_duration = U256::from(10 * 60); // 10 minutes
        self.max_duration = U256::from(30 * 24 * 60 * 60); // 30 days
        self.execution_interval = U256::from(5 * 60); // 5 minutes
        self.protocol_fee_bps = U256::from(10); // 0.1%
        self.bps_denominator = U256::from(10_000);
        self.min_order_amount = U256::from(10_000_000_000_000_000); // 0.01 ETH
        self.max_orders_per_user = U256::from(10);
        self.max_slippage_bps = U256::from(500); // 5%
        
        // Set contract deployer as initial authorized operator
        let deployer = stylus_sdk::msg::sender();
        self.authorized_operators.insert(deployer, true);
    }

    /// Check if an operator is authorized
    pub fn is_authorized(&self, operator: H160) -> bool {
        self.authorized_operators.get(&operator).unwrap_or(false)
    }

    /// Add an authorized operator
    pub fn add_authorized_operator(&mut self, operator: H160) -> Result<(), crate::errors::TWAMMError> {
        let sender = stylus_sdk::msg::sender();
        if !self.is_authorized(sender) {
            return Err(crate::errors::TWAMMError::Unauthorized);
        }
        self.authorized_operators.insert(operator, true);
        Ok(())
    }

    /// Remove an authorized operator
    pub fn remove_authorized_operator(&mut self, operator: H160) -> Result<(), crate::errors::TWAMMError> {
        let sender = stylus_sdk::msg::sender();
        if !self.is_authorized(sender) {
            return Err(crate::errors::TWAMMError::Unauthorized);
        }
        self.authorized_operators.insert(operator, false);
        Ok(())
    }
}