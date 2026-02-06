function submitPay() {
  const amount = document.getElementById('amount').value;

  if (!amount) {
    alert('请输入支付金额');
    return;
  }

  alert('支付已提交，金额：' + amount + ' USDT\n等待人工确认');
}
