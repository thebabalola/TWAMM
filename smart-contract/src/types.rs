use primitive_types::U256;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Order {
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

#[derive(Debug, Clone, Serialize, Deserialize)]
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

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PoolAnalytics {
    pub total_volume_token0: U256,
    pub total_volume_token1: U256,
    pub total_fees_collected: U256,
    pub average_order_size: U256,
    pub average_order_duration: U256,
    pub last_update_timestamp: U256,
}

pub type PoolId = [u8; 32];
pub type Orders = HashMap<PoolId, Vec<Order>>;
pub type PoolStates = HashMap<PoolId, PoolState>;
pub type PoolAnalyticsMap = HashMap<PoolId, PoolAnalytics>;
