#![no_std]

mod types;
mod errors;
mod utils;
mod state;
mod orders;
mod hooks;

use stylus_sdk::{ prelude::*, storage::StorageStruct };
use primitive_types::{ U256, H160, H256 };

// Import the state struct
use state::TWAMMState;

// Define the contract
#[entrypoint]
fn twamm_hook(mut init: InitializeConfig) -> Result<(), Vec<u8>> {
    // Get or create the contract state
    let mut state = TWAMMState::new();

    // Initialize the contract state
    state.initialize();

    Ok(())
}

// External methods exposed by the contract
#[external]
impl TWAMMHook {
    /// Add an authorized operator
    pub fn add_authorized_operator(operator: H160) -> Result<(), TWAMMError> {
        let mut state = TWAMMState::new();
        state.add_authorized_operator(operator)
    }

    /// Remove an authorized operator
    pub fn remove_authorized_operator(operator: H160) -> Result<(), TWAMMError> {
        let mut state = TWAMMState::new();
        state.remove_authorized_operator(operator)
    }

    /// Create a new TWAMM order
    pub fn create_order(
        pool_id: H256,
        zero_for_one: bool,
        amount_total: U256,
        duration: U256,
        start_time: Option<U256>,
        min_amount_out: U256
    ) -> Result<U256, TWAMMError> {
        let mut state = TWAMMState::new();
        state.create_order(
            pool_id,
            zero_for_one,
            amount_total,
            duration,
            start_time,
            min_amount_out
        )
    }

    /// Cancel an existing order
    pub fn cancel_order(pool_id: H256, order_id: U256) -> Result<U256, TWAMMError> {
        let mut state = TWAMMState::new();
        state.cancel_order(pool_id, order_id)
    }

    /// Claim proceeds from an order
    pub fn claim_proceeds(pool_id: H256, order_id: U256) -> Result<U256, TWAMMError> {
        let mut state = TWAMMState::new();
        state.claim_proceeds(pool_id, order_id)
    }

    /// Execute virtual orders for a pool
    pub fn execute_virtual_orders(pool_id: H256) -> Result<bool, TWAMMError> {
        let mut state = TWAMMState::new();
        state.execute_virtual_orders_for_pool(pool_id)
    }

    /// Get pool state
    pub fn get_pool_state(pool_id: H256) -> Result<PoolState, TWAMMError> {
        let state = TWAMMState::new();
        Ok(state.pool_states.get(&pool_id).unwrap_or_default())
    }

    /// Get order
    pub fn get_order(pool_id: H256, order_id: U256) -> Result<Order, TWAMMError> {
        let state = TWAMMState::new();
        let pool_orders = state.orders.get(&pool_id).ok_or(TWAMMError::InvalidOrder)?;

        if order_id.as_usize() >= pool_orders.len() {
            Err(TWAMMError::InvalidOrder)
        } else {
            Ok(pool_orders[order_id.as_usize()].clone())
        }
    }
}
