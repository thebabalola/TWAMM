#![allow(dead_code)]
use stylus_sdk::alloy_primitives::U256;

#[derive(Debug, Clone)]
pub struct Order {
    pub id: U256,
    pub pool_id: PoolId,
    pub owner: [u8; 20],
    pub zero_for_one: bool,
    pub amount_total: U256,
    pub amount_executed: U256,
    pub amount_claimed: U256,
    pub start_time: U256,
    pub end_time: U256,
    pub last_execution_time: U256,
    pub execution_interval: U256,
    pub min_amount_out: U256,
    pub active: bool,
}

impl Default for Order {
    fn default() -> Self {
        Self {
            id: U256::ZERO,
            pool_id: [0u8; 32],
            owner: [0u8; 20],
            zero_for_one: false,
            amount_total: U256::ZERO,
            amount_executed: U256::ZERO,
            amount_claimed: U256::ZERO,
            start_time: U256::ZERO,
            end_time: U256::ZERO,
            last_execution_time: U256::ZERO,
            execution_interval: U256::ZERO,
            min_amount_out: U256::ZERO,
            active: false,
        }
    }
}

#[derive(Debug, Clone)]
pub struct PoolState {
    pub last_virtual_order_execution_time: U256,
    pub token0_virtual_balance: U256,
    pub token1_virtual_balance: U256,
    pub token0_rate: U256,
    pub token1_rate: U256,
    pub protocol_fees_token0: U256,
    pub protocol_fees_token1: U256,
    pub total_orders_created: U256,
    pub total_orders_executed: U256,
    pub total_orders_cancelled: U256,
}

impl Default for PoolState {
    fn default() -> Self {
        Self {
            last_virtual_order_execution_time: U256::ZERO,
            token0_virtual_balance: U256::ZERO,
            token1_virtual_balance: U256::ZERO,
            token0_rate: U256::ZERO,
            token1_rate: U256::ZERO,
            protocol_fees_token0: U256::ZERO,
            protocol_fees_token1: U256::ZERO,
            total_orders_created: U256::ZERO,
            total_orders_executed: U256::ZERO,
            total_orders_cancelled: U256::ZERO,
        }
    }
}

#[derive(Debug, Clone)]
pub struct PoolAnalytics {
    pub total_volume_token0: U256,
    pub total_volume_token1: U256,
    pub total_fees_collected: U256,
    pub average_order_size: U256,
    pub average_order_duration: U256,
    pub last_update_timestamp: U256,
}

impl Default for PoolAnalytics {
    fn default() -> Self {
        Self {
            total_volume_token0: U256::ZERO,
            total_volume_token1: U256::ZERO,
            total_fees_collected: U256::ZERO,
            average_order_size: U256::ZERO,
            average_order_duration: U256::ZERO,
            last_update_timestamp: U256::ZERO,
        }
    }
}

pub type PoolId = [u8; 32];
