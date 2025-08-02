export enum PaymentType {
  CASH = 'DINHEIRO',
  CREDIT_CARD = 'CARTÃO DE CRÉDITO',
  DEBIT_CARD = 'CARTÃO DE DÉBITO',
  PIX = 'PIX',
  OTHER = 'OUTROS',
}

export enum OrderStatus {
  PENDING = 'PENDENTE', // venda registrada mas ainda não finalizada
  COMPLETED = 'COMPLETADO', // pagamento confirmado e venda concluída
  CANCELED = 'CANCELADO', // venda cancelada
  REFUNDED = 'ESTORNADO', // venda estornada / devolvida
}
