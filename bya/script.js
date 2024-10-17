document.getElementById('reservarBtn').addEventListener('click', function() {
    let quantidadeDisponivel = parseInt(document.getElementById('quantidade').textContent);
    let quantidadeReserva = parseInt(document.getElementById('quantidadeReserva').value);
    
    if (quantidadeReserva <= quantidadeDisponivel) {
        quantidadeDisponivel -= quantidadeReserva;
        document.getElementById('quantidade').textContent = quantidadeDisponivel;
        document.getElementById('status').textContent = `Reservado com sucesso! Restam ${quantidadeDisponivel} unidades.`;
        document.getElementById('status').style.color = 'green';
    } else {
        document.getElementById('status').textContent = 'Quantidade indisponível para reserva.';
        document.getElementById('status').style.color = 'red';
    }

    if (quantidadeDisponivel === 0) {
        document.getElementById('status').textContent += ' Todas as unidades foram reservadas.';
        document.getElementById('reservarBtn').disabled = true;
    }
});
