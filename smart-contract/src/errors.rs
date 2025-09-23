use thiserror::Error;

#[derive(Error, Debug)]
pub enum TWAMMError {
    #[error("Unauthorized operation")]
    Unauthorized,

    #[error("Invalid duration")]
    InvalidDuration,

    #[error("Invalid amount")]
    InvalidAmount,

    #[error("Invalid order")]
    InvalidOrder,

    #[error("Order not active")]
    OrderNotActive,

    #[error("Maximum orders reached")]
    MaxOrdersReached,

    #[error("Slippage exceeded")]
    SlippageExceeded,

    #[error("No fees to collect")]
    NoFeesToCollect,

    #[error("Transfer failed")]
    TransferFailed,

    #[error("Order already claimed")]
    OrderAlreadyClaimed,

    #[error("Nothing to claim")]
    NothingToClaim,

    #[error("Division by zero")]
    DivisionByZero,

    #[error("SafeMath error")]
    SafeMathError,
}
