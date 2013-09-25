// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see 
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page

  preamble: '<br><b>Codigo de Conducta, Cuestiones Selecci�n M�ltiple / M�dulo 4</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Est�s visitando una ciudad y has hecho dos reuniones con gran �xito. Los premies est�n agradecidos por tu esfuerzo, y saben que has venido de muy lejos. Cuando vas a irte te dan una botella de vino  en se�al de agradecimiento (porque se han enterado que te gusta el buen vino). �Qu� deber�as hacer?", // question can be plain text or arbitrary HTML
     choices: ['Aceptas porque te espera un largo viaje de vuelta a casa en tren y te vendr� bien beber el vino con la comida para tener un relajado viaje de vuelta.', 
	      'En esta ocasi�n aceptas porque has hecho tu  tarea y en la cultura de la ciudad que est� visitando sabes que no es de buena educaci�n rechazar un regalo.',
	      correct('Lo rechazas cort�smente explicando que tu funci�n de representante del GPI requiere que no aceptes regalos o favores personales.'),
	      'Despu�s de rechazarlo por dos veces, finalmente lo aceptas para no ofender a los premies que insisten en que lo aceptes,  y t� quieres mantener un atm�sfera positiva para tu pr�xima visita.'], 

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '4.2'},

    {questionHTML: 'Te han invitado a una cena organizada por la comunidad despu�s de haber terminado las actividades en la ciudad. Se sirven bebidas alcoh�licas antes y durante la comida. Deber�as:',
     choices: ['a. Beber un poco',
               'b. No beber nada',
	       'c. Beber tanto como los dem�s, aunque suponga emborracharte un poco.',
	       correct('a. o b.')],
	lesson: '4.2'},

    {questionHTML: 'Si un representante de GPI tiene una relaci�n �ntima con otro miembro del equipo de GPI en una de las ciudades que �l / ella est� a punto de visitar y evaluar:',
     choices: ['a) Pueden seguir con su relaci�n, siempre y cuando nadie m�s del equipo sepa de su relaci�n.',
               'b) Han de comunic�rselo al gerente regional  y luego dimitir inmediatamente; no hay excepciones para el c�digo de conducta.',
	       'c) Deben informar de su relaci�n a su jefe de �rea. Y pueden continuar con la relaci�n, si acuerdan no trabajar en estrecha colaboraci�n en la visita a la ciudad y si no afecta al equipo de GPI.',
	        correct('d) Un enfoque profesional a la situaci�n implicar�a: Que el gerente regional sepa que existe esa relaci�n. Asegurarse de que las dos personas involucradas no trabajen en estrecha colaboraci�n en los mismos proyectos. Asegurarse de que su relaci�n no afecta a otros miembros del equipo o al desempe�o de su funci�n. Prestar especial atenci�n a preservar la objetividad en la evaluaci�n de la comunidad'),
	       'e) c & b'],
	lesson: '4.2'},

    {questionHTML: 'Como representante de GPI est�s visitando una ciudad en la que despu�s de la reuni�n alguien de la comunidad te invita a salir y tener un encuentro personal. �C�mo act�as?',
     choices: [correct('Rechazas cort�smente la invitaci�n.'),
	       'La aceptas si te apetece, porque este tipo de situaciones pertenece a tu �mbito personal.',
	       'Pides permiso al gerente regional de apoyo.',
               'Aceptas, si te apetece porque la comunidad es peque�a y est� bastante "muerta" en t�rminos de actividad por lo que no es improbable que tenga repercusi�n alguna.'],
	lesson: '4.2'},

    {questionHTML: 'Ya han finalizado las reuniones en una ciudad y es hora de volver a casa. La comunidad ha organizado que alguien te lleve en coche al aeropuerto, lo cual ser� de gran ayuda para ti.�Qu� deber�as hacer?',
     choices: ['Contactas con tu gerente regional y con otros representantes del GPI para preguntarles qu� hacer.',
	       'Debes rechazarlo cort�smente ya que los representantes del GPI no aceptan favores personales.',
	       correct('Aceptas con agradecimiento ya que no es un favor personal sino un ofrecimiento casual.'),
               'No hay ofrecimientos casuales que valgan porque alguien en la comunidad podr�a verlo como un favor personal.'],
	lesson: '4.2'},


   ],

  assessmentName: 'r4course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

