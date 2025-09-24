use stylus_sdk::alloy_primitives::U256;
use crate::errors::TWAMMError;

pub fn safe_add(a: U256, b: U256) -> Result<U256, TWAMMError> {
    a.checked_add(b).ok_or(TWAMMError::SafeMathError)
}

pub fn safe_sub(a: U256, b: U256) -> Result<U256, TWAMMError> {
    a.checked_sub(b).ok_or(TWAMMError::SafeMathError)
}

pub fn safe_mul(a: U256, b: U256) -> Result<U256, TWAMMError> {
    a.checked_mul(b).ok_or(TWAMMError::SafeMathError)
}

pub fn safe_div(a: U256, b: U256) -> Result<U256, TWAMMError> {
    if b.is_zero() {
        Err(TWAMMError::DivisionByZero)
    } else {
        Ok(a / b)
    }
}