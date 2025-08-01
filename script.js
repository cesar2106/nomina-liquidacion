function calcular() {
  let salario = parseFloat(document.getElementById("salario").value);
  let dias = parseInt(document.getElementById("dias").value);
  let horasDiurnas = parseInt(document.getElementById("diurnas").value);
  let horasNoctExtra = parseInt(document.getElementById("extraNocturnas").value);
  let horasNocturnas = parseInt(document.getElementById("nocturnas").value);
  let horasDom = parseInt(document.getElementById("dominicales").value);

  let valorDia = salario / 30;
  let valorHora = salario / 240;
  let pagoExtraDiurna = horasDiurnas * valorHora * 1.25;
  let pagoExtraNocturna = horasNoctExtra * valorHora * 1.75;
  let pagoNocturno = horasNocturnas * valorHora * 1.35;
  let pagoDominical = horasDom * valorHora * 2;

  let cesantias = (salario * dias) / 360;
  let intereses = cesantias * 0.12;
  let prima = cesantias;
  let vacaciones = (salario * dias) / 720;

  let bruto = valorDia * dias + pagoExtraDiurna + pagoExtraNocturna + pagoNocturno + pagoDominical + cesantias + intereses + prima + vacaciones;

  // Aportes seguridad social
  let salud = salario * 0.04;
  let pension = salario * 0.04;

  let neto = bruto - salud - pension;

  // Formatear todos los valores
  function f(num) {
    return num.toLocaleString('es-CO', {minimumFractionDigits: 2});
  }

  document.getElementById('resultado').innerHTML = 
    `<b>Total neto aproximado:</b> $${f(neto)}<br><br>
    <b>Desglose:</b><br>
    Salario base: $${f(valorDia * dias)}<br>
    Horas extra diurnas: $${f(pagoExtraDiurna)}<br>
    Horas extra nocturnas: $${f(pagoExtraNocturna)}<br>
    Recargo nocturno ordinario: $${f(pagoNocturno)}<br>
    Horas dominicales: $${f(pagoDominical)}<br>
    Cesantías: $${f(cesantias)}<br>
    Intereses cesantías: $${f(intereses)}<br>
    Prima: $${f(prima)}<br>
    Vacaciones: $${f(vacaciones)}<br>
    <br>
    Salud (4%): -$${f(salud)}<br>
    Pensión (4%): -$${f(pension)}<br>
    <br>
    <b>Total bruto:</b> $${f(bruto)}`;
}