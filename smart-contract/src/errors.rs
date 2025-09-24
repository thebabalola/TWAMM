#![allow(dead_code)]

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TWAMMError {
    Unauthorized,
    InvalidDuration,
    InvalidAmount,
    InvalidOrder,
    OrderNotActive,
    MaxOrdersReached,
    SlippageExceeded,
    NoFeesToCollect,
    TransferFailed,
    OrderAlreadyClaimed,
    NothingToClaim,
    DivisionByZero,
    SafeMathError,
}
