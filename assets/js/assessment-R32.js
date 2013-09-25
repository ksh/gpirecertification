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

  preamble: '<br><b>El Rol de GPI,  Cuestiones Selecci�n M�ltiple / M�dulo 3</b><br><br>Por favor contesta <b>todas</b> las cuestiones abajo:<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "El GPI debe", // question can be plain text or arbitrary HTML
     choices: ['comunicar a Prem Rawat  d�nde est� creciendo la difusi�n para ayudarle a decidir d�nde viajar', 
	      'apoyar a los esfuerzos de propagaci�n a nivel mundial',
	      'proporcionar a las personas interesadas en la difusi�n informaci�n sobre lo que funciona.',
	      'proporcionar un n�mero de tel�fono y la direcci�n del sitio web donde la gente puede encontrar apoyo', 
	      'supervisar las diferentes estrategias y esfuerzos que se est�n llevando a cabo en las comunidades',
	      correct('hacer todo lo antedicho.')], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.2'},

    {questionHTML: 'Has estado visitando una comunidad desde hace un a�o. Un buen n�mero de personas  est�n haciendo un gran esfuerzo, pero los resultados son muy pobres.�Qu� hacer?',
     choices: ['Llamas al director de GPI para tener una charla motivacional sobre c�mo puedes aportar m�s inspiraci�n a la comunidad',
               'Trabajas con el grupo m�s activo para cambiar al contacto de la ciudad',
	       correct('Les comentas la posibilidad de cambiar de estrategia,  explorando  otras formas de actuar citando ejemplos de algunas iniciativas que est�n funcionando bien en otros lugares'),
	       'Tell them GPI will only be able to score them higher if they make more effort',
               'Les dices que el GPI s�lo podr� darles una mayor puntuaci�n si hacen un mayor'],
	lesson: '3.2'},

    {questionHTML: 'La comunidad que est�s visitando est� creciendo notablemente. Les planteas las diferentes iniciativas que se est�n llevando a cabo. Una persona ha conseguido llevar el mensaje a una escuela local a trav�s de presentaciones en video (las clases son de alumnos de 14 a 16 a�os). Y tiene una buena acogida por parte del profesor de la clase que est� mostrando un inter�s personal en el mensaje. Utilizan el material como un est�mulo para la escritura creativa. �C�mo act�as?',
     choices: ['a. Te arrepientes de haber asumido la responsabilidad del GPI',
               'b. Te escribes una nota recordatoria de hacer seguimiento del proyecto durante los pr�ximos meses, ya que al final podr�a llegar a cientos de personas e incluso el profesor podr�a recibir el Conocimiento',
	       'c. Procuras que alguien de prestigio en la comunidad le diga a la persona que est� llevando la iniciativa que la detenga de inmediato, ya que podr�a tener consecuencias adversas para la imagen p�blica de Prem Rawat.',
	       'd. Hablas con la persona responsable de la iniciativa sobre las directrices del GPI con respecto a c�mo trabajar con menores de edad,  explic�ndole el por qu�.',
               'e. Colaboras con la persona apoy�ndola, tratando de encausar su pasi�n hacia otros proyectos que s� respalda el GPI.',
	       correct('d. and e.')],
	lesson: '3.2'},

    {questionHTML: 'El Director del Programa de Educaci�n de cierta localidad, que ha visto el PEP en el �mbito universitario, se pone en contacto interes�ndose. El Director es catedr�tico de literatura en la universidad, y las clases ser�an para alumnos de 16 a 18 a�os de edad. La Administraci�n educativa es totalmente responsable  del plan de estudios en los colegios de su zona y tienen autoridad para introducir el PEP. �C�mo act�as?',
     choices: ['Recomiendas a los contactados que pongan fin de inmediato a las conversaciones con el catedr�tico ya que seg�n las directrices del GPI no se han de apoyar iniciativas para oyentes menores de la edad legal del pa�s.',
	       correct('Le explicas a las personas implicadas que  vas a informar a tu gerente regional de apoyo del GPI, qui�n se pondr� en contacto con el director del GPI y de RP para recibir asesoramiento sobre los pr�ximos pasos a seguir.'),
	       'Les dices que adelante, que est� bien que lo hagan porque fue la autoridad educativa la  que nos lo solicit�.',
               'Supervisas c�mo se desarrolla la iniciativa, y aumentas la puntuaci�n del potencial de la comunidad.'],
	lesson: '3.2'},

   ],

  assessmentName: 'r3course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

