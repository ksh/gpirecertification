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

  preamble: '<br><b>Harassment Prevention, Multiple-choice Questions / Module 5</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "1.	A negative comment made about a person’s racial background:", // question can be plain text or arbitrary HTML
     choices: ['Is considered illegal harassment and the person making the comment should be addressed.', 
	      'Is ok if the comment was only meant to be a joke.',
	      correct('Can lead to a hostile team environment, but only becomes harassment if the comments continue.'),
	      'Is ok if the comment is made in private.'], 

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '5.1'},

    {questionHTML: 'Behavior that is <ul>not</ul> considered a form of harassment is:',
     choices: [correct('Repeatedly yelling angrily at a local team member for not coming to the venue on time.'),
               'Frequently following a team member of the opposite gender and making remarks about their physical appearance.',
	       'Warmly hugging reluctant local team members at the end of each GPI Rep community meeting to thank them for their efforts.',
	       'Frequently sending casual jokes using your personal email to a local team member about the behavior of mentally and physically disabled attendees.'],
	lesson: '5.2'},

    {questionHTML: 'Which of the following is a harassment situation?',
     choices: ['A disagreement between a GPI Rep and a local team member that continues for more than 1 month.',
               'A team member who occasionally makes offensive comments regarding another team member’s religion.',
	       correct('An EM who frequently does not allow a person to perform certain actions due to their gender, therefore creating an uncomfortable working environment.'),
               'A romantic relationship between a GPI Rep and the AV technician of the city they are visiting.'],
	lesson: '5.3'},

    {questionHTML: 'Behavior that helps to prevent harassment in a team is: ',
     choices: [correct('To treat people according to their comfort level, not yours.'),
	       'To keep improper jokes only within your personal emails.',
	       'To only report cases of harassment that are directly related to you personally.',
               'To tell other team members about a harassment issue but not mention any names.'],
	lesson: '5.4'},
   ],

  assessmentName: 'a5course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

