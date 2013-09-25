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

  preamble: '<br><b>Prevenci�n de Acoso, Cuestiones Selecci�n M�ltiple / M�dulo 5</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Un comentario negativo sobre la raza de una persona:", // question can be plain text or arbitrary HTML
     choices: ['Es considerado acoso ilegal y se deber�a aclarar con la persona que ha hecho el comentario.', 
	      'Est� bien si la intenci�n del comentario era hacer una broma.',
	      correct('Puede crear un ambiente h�stil en el equipo, pero solo se considerar�a acoso si se contin�a haciendo esos comentarios.'),
	      'Est� bien si el comentario se hace en privado.'], 

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '5.1'},

    {questionHTML: 'Comportamiento que <ul>no</ul> se considera acoso:',
     choices: [correct('Gritar con enfado y reiteradamente a un miembro del equipo local por no haber sido puntual.'),
               'Seguir frecuentemente a un miembro del equipo del g�nero opuesto y hacer comentarios sobre su apariencia f�sica.',
	       'Abrazar afectuosamente al final de cada reuni�n a miembros del equipo local de representantes del GPI para darles las gracias por sus esfuerzos, sin que estos lo deseen.',
	       'Enviar frecuentemente comentarios jocosos a un miembro del equipo local desde tu correo electr�nico personal, sobre el comportamiento de los participantes con discapacidad mental y f�sica.'],
	lesson: '5.2'},

    {questionHTML: '�Cu�l de las siguientes situaciones se considera acoso?',
     choices: ['Un desacuerdo entre un representante del GPI y un miembro del equipo local que dura m�s de un mes.',
               'Un miembro del equipo que a veces hace comentarios ofensivos sobre la religi�n de otro miembro del equipo.',
	       correct('Un EM que con frecuencia no permite a alguien desempe�ar ciertas funciones, debido a su g�nero, lo cual crea un ambiente de trabajo inc�modo.'),
               'Una relaci�n rom�ntica entre un representante del GPI y el t�cnico de audiovisuales de la ciudad que est�n visitando.'],
	lesson: '5.3'},

    {questionHTML: 'Comportamientos  que ayudan a prevenir el acoso en el equipo: ',
     choices: [correct('Tratar a las personas de forma que se sientan c�modas seg�n su criterio, no seg�n el tuyo.'),
	       'Las bromas inapropiadas reservalas para tus correos electr�nicos personales.',
	       'Comentar solo los casos de acoso que te afectan directamente.',
               'Comentar con los otros miembros del equipo los casos de acoso pero sin mencionar nombres.'],
	lesson: '5.4'},
   ],

  assessmentName: 'a5course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

