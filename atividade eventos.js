var idade = 0;
var data =0;
var liParticipantes= 0;


idade = prompt ("Informe a sua idade");


if (idade >=18 ) {
   liParticipantes = prompt ("informe a quantida de pessoas que irão participar");

   if(liParticipantes <= 100) {
      data = prompt ("informe a data do evento");

      if (data.length >= 05/08/20){
        console.log("cadastro realizado com sucesso");
      }else{
        console.log("cadastro não realizado data invalida");
      }
     
   }else{
    console.log("cadastro não realizado numero de participantes insuficiente");
   }
}else{
    console.log("cadastro não realizado, pessoas com menos de 18 não são permitidas");
}