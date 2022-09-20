const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function tempo(){

let hoje = new Date()
let hr = hoje.getHours()
let min = hoje.getMinutes()
let sec = hoje.getSeconds()

horas.textContent = hr
minutos.textContent = min
segundos.textContent = sec
})

data = new Date()
diasemana = data.getDay()
dia = data.getDate()
mes = data.getMonth()
ano = data.getFullYear()

meses = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',)

dias = new Array('Domingo','Segunda','Terça','Quarta','Quinta-Feira','Sexta','Sabado')

document.getElementById('data').innerHTML = dias[diasemana] + ', ' + dia + ' de  ' + meses [mes] + ' de  ' + ano