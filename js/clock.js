(function(){

   var actualizarHora = function(){
       var fecha = new Date(),
       hours = fecha.getHours(),
       ampm,
       minutes = fecha.getMinutes(),
       seconds = fecha.getSeconds(),
       diaSemana = fecha.getDay(),
       dia = fecha.getDate(),
       mes = fecha.getMonth(),
       year = fecha.getFullYear();

   var pHours = document.getElementById('hours'),
       pAMPM = document.getElementById('ampm'),
       pMinutes = document.getElementById('minutes'),
       pSeconds = document.getElementById('seconds'),
       pDiaSemana = document.getElementById('diaSemana'),
       pDia = document.getElementById('dia'),
       pMes = document.getElementById('mes'),
       pYear = document.getElementById('year');

   var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
   pDiaSemana.textContent = semana[diaSemana];

   pDia.textContent = dia;

   var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
   pMes.textContent = meses[mes];

   pYear.textContent = year;


   if (hours >= 12) {
       hours = hours - 12;
       ampm = 'PM';
   } else {
       ampm ='AM';
   }

   if (hours == 0) {
       hours = 12;
   }

   if (hours < 10) { hours = '0' + hours };

   pHours.textContent = hours;
   pAMPM.textContent = ampm;

   if (minutes < 10) { minutes = '0' + minutes };

   pMinutes.textContent = minutes;

   if (seconds < 10) { seconds = '0' + seconds };

   pSeconds.textContent = seconds;

   };

   actualizarHora();
   var intervalo = setInterval(actualizarHora, 1000);

}())
