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

  preamble: '<br><b>Proposito de las Recertificaciones, Cuestiones Selección Múltiple / Módulo 2</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Recertificaciones", // question can be plain text or arbitrary HTML
     choices: ['Crean una atmósfera de confianza para favorecer la comprensión y posiblemente aprender algo nuevo.', 
	      'Dan indicaciones sobre otras posibilidades para desempeñar mejor el rol.',
	      'Recuerdan a los participantes los objetivos y el comportamiento que se espera de un representante del equipo del GPI.',
	      'Es un buen momento para revisar si las circunstancias personales siguen siendo las adecuadas para llevar a cabo la función.', 
	      correct('Todo lo antedicho.')], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.1'},

    {questionHTML: 'Las circunstancias personales de un representante del GPI han cambiado recientemente. Tiene un nuevo trabajo y tendrá que viajar mucho por un cierto período de tiempo, probablemente 4 o 5 meses. Se ha dado cuenta de que en realidad no tendrá  tiempo para desarrollar su función durante ese período de tiempo. Pero no quiere renunciar al rol. ¿Qué se debe hacer?',
     choices: ['a. Comunicar a las comunidades a las que viaja  que no estará disponible durante  4 o 5 meses.',
               'b. Informar de su cambio de circunstancias a su mánager regional, asesor o entrenador.',
	       'c. Si  ha visto que no tiene tiempo, ha de tomar un descanso durante esos meses y luego regresar cuando tenga tiempo suficiente.',
	       'd. Llegar a un acuerdo con otro representante del GPI para que le sustituya en sus comunidades.',
               correct('b. & c.')],
	lesson: '3.1'},

   ],

  assessmentName: 'r2course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

