let participantesli = [ "Luiz", "Ana", "Carlos" , "Tiago"]
let idparticipantes = 0;
let Npalestrante= "Tiago";

let hoje = new Date();
let diaEvento = prompt("Informe o dia do evento (dd)");
let mesEvento = prompt ("Informe o mês do evento (mm)");
let anoEvento = prompt( "Informe o ano do evento (aaaa)");
let dataEvento = new Date(anoEvento, mesEvento - 1, diaEvento);


if (dataEvento <= hoje) {
  console.log("Essa data não pode ser agendada");

}else {
  console.log("Data de Evento permitada");

}

if (participantesli.length <100 ){
  console.log("Quantidade de participantes menor que 100, cadastro permitido");
  idparticipantes = prompt("Informe a idade do participante");
  if (idparticipantes >= 18){
    console.log("Maior que 18 anos, pode continuar");
    participantesli.push(prompt("Informe o seu nome"));

  }else{
    console.log("Idade não permitida");
  }
}else{
  console.log("Não é permitodo o cadastro a lista esta cheia");

}

console.log("Palestrante", Npalestrante);
console.log("Lista de participantes ", participantesli.length, "participantes:")
for (let i = 0; i < participantesli.length; i++){
  console.log(participantesli[i]);
}
