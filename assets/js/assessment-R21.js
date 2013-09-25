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

  preamble: '<br><b>Purpose of Recertification, Multiple-choice Questions / Module 1</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "Recertifications", // question can be plain text or arbitrary HTML
     choices: ['Provide a safe environment to refresh understanding & possibly learn something new', 
	      'Provide the possibility of a few more hints on how to best perform the role',
	      'Remind participants of the goals and standards of the GPI Representative Team',
	      'Are a good time to review whether personal circumstances are still suited to performing the role', 
	      correct('All of the above')], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.1'},

    {questionHTML: 'A GPI Rep’s personal circumstances have recently changed. They have a new job and will need to travel extensively for a limited period of time, probably 4 or 5 months. They have evaluated they don’t really have the time to perform the role over the next period of time. But they don’t want to give up the role. What should they do?',
     choices: ['a. Tell the communities they travel to that they are not available for  4 or 5  number of months',
               'b. Inform their regional manager, assessor or coach of their change of circumstancese',
	       'c. If they have evaluated they don’t have the time they should take a break for 6 months and then return when they then have enough time',
	       'd. Negotiate with another GPI Rep to cover their communities',
               correct('2 & 3')],
	lesson: '3.1'},

   ],

  assessmentName: 'r2course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

