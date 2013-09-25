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

  preamble: '<br><b>Codigo de Conducta, Cuestiones Selección Múltiple / Módulo 4</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Estás visitando una ciudad y has hecho dos reuniones con gran éxito. Los premies están agradecidos por tu esfuerzo, y saben que has venido de muy lejos. Cuando vas a irte te dan una botella de vino  en señal de agradecimiento (porque se han enterado que te gusta el buen vino). ¿Qué deberías hacer?", // question can be plain text or arbitrary HTML
     choices: ['Aceptas porque te espera un largo viaje de vuelta a casa en tren y te vendrá bien beber el vino con la comida para tener un relajado viaje de vuelta.', 
	      'En esta ocasión aceptas porque has hecho tu  tarea y en la cultura de la ciudad que está visitando sabes que no es de buena educación rechazar un regalo.',
	      correct('Lo rechazas cortésmente explicando que tu función de representante del GPI requiere que no aceptes regalos o favores personales.'),
	      'Después de rechazarlo por dos veces, finalmente lo aceptas para no ofender a los premies que insisten en que lo aceptes,  y tú quieres mantener un atmósfera positiva para tu próxima visita.'], 

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '4.2'},

    {questionHTML: 'Te han invitado a una cena organizada por la comunidad después de haber terminado las actividades en la ciudad. Se sirven bebidas alcohólicas antes y durante la comida. Deberías:',
     choices: ['a. Beber un poco',
               'b. No beber nada',
	       'c. Beber tanto como los demás, aunque suponga emborracharte un poco.',
	       correct('a. o b.')],
	lesson: '4.2'},

    {questionHTML: 'Si un representante de GPI tiene una relación íntima con otro miembro del equipo de GPI en una de las ciudades que él / ella está a punto de visitar y evaluar:',
     choices: ['a) Pueden seguir con su relación, siempre y cuando nadie más del equipo sepa de su relación.',
               'b) Han de comunicárselo al gerente regional  y luego dimitir inmediatamente; no hay excepciones para el código de conducta.',
	       'c) Deben informar de su relación a su jefe de área. Y pueden continuar con la relación, si acuerdan no trabajar en estrecha colaboración en la visita a la ciudad y si no afecta al equipo de GPI.',
	        correct('d) Un enfoque profesional a la situación implicaría: Que el gerente regional sepa que existe esa relación. Asegurarse de que las dos personas involucradas no trabajen en estrecha colaboración en los mismos proyectos. Asegurarse de que su relación no afecta a otros miembros del equipo o al desempeño de su función. Prestar especial atención a preservar la objetividad en la evaluación de la comunidad'),
	       'e) c & b'],
	lesson: '4.2'},

    {questionHTML: 'Como representante de GPI estás visitando una ciudad en la que después de la reunión alguien de la comunidad te invita a salir y tener un encuentro personal. ¿Cómo actúas?',
     choices: [correct('Rechazas cortésmente la invitación.'),
	       'La aceptas si te apetece, porque este tipo de situaciones pertenece a tu ámbito personal.',
	       'Pides permiso al gerente regional de apoyo.',
               'Aceptas, si te apetece porque la comunidad es pequeña y está bastante "muerta" en términos de actividad por lo que no es improbable que tenga repercusión alguna.'],
	lesson: '4.2'},

    {questionHTML: 'Ya han finalizado las reuniones en una ciudad y es hora de volver a casa. La comunidad ha organizado que alguien te lleve en coche al aeropuerto, lo cual será de gran ayuda para ti.¿Qué deberías hacer?',
     choices: ['Contactas con tu gerente regional y con otros representantes del GPI para preguntarles qué hacer.',
	       'Debes rechazarlo cortésmente ya que los representantes del GPI no aceptan favores personales.',
	       correct('Aceptas con agradecimiento ya que no es un favor personal sino un ofrecimiento casual.'),
               'No hay ofrecimientos casuales que valgan porque alguien en la comunidad podría verlo como un favor personal.'],
	lesson: '4.2'},


   ],

  assessmentName: 'r4course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

