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

  preamble: '<br><b>Presentation skills, Open Questions / Module 5</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: 'Share a few interesting ways you could add some spice, texture, variation to your presentation that would make it more effective for your audience??', // question can be plain text or arbitrary HTML
     choices: ['Creative \; with no notes.', 
	      'Open \; with notes.',
	      correct('With no notes \; solely using a script.'),
	      'Solely using a script \; preaching'], 
     },

    {questionHTML: 'How many ways were discussed to making your presentation most engaging and effective for your audiences?',
     choices: ['8',
	       '3',
	       correct('6'),
	       '2'],

     },

   ],

  assessmentName: 'a5course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

