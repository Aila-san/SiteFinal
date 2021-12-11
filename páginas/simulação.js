let Simulador = alert('Olá novamente! Que tal simular a compra de algum de nossos produtos com a versão teste do nosso Simulador Suclar? Vamos testá-lo com a compra de 1 Mini Chocotone Trufado (R$17,00), o pedido mais requisitado pelos clientes atualmente!');

let saldoTotal = prompt('Digite aqui o saldo máximo que deseja investir em algum dos nossos doces:');
let valorCompra = 17;

if (valorCompra <= saldoTotal){
    let saldoFinal = saldoTotal - valorCompra;
    
    alert ('A compra do Mini Chocotone Trufado teria ocorrido corretamente! Seu saldo final seria de R$' + saldoFinal + '. Veja a seguir no nosso cardápio oficial de Natal outras opções de produtos disponíveis!');
}

else {
    alert ('Saldo seria insuficiente para realizar a compra :( Mas você poderia garantir outros produtos, como os que verá agora no nosso cardápio oficial de Natal!');
}
