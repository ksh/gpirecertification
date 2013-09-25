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

  preamble: '<br><b>GPI Rep Role, Multiple-choice Questions / Module 3</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "GPI should", // question can be plain text or arbitrary HTML
     choices: ['let Prem Rawat know where good activity is happening to help him decide where to travel', 
	      'support propagation efforts globally',
	      'provide interested people with information of what works here, what works there',
	      'provide a telephone number and website address where people can find support', 
	      'monitor the different strategies and efforts that communities are making',
	      correct('all of the above')], 
     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '3.1'},

    {questionHTML: 'You have been visiting a community for a year now. A good percentage of the people are making a lot of effort but the results of their efforts are very poor. What do you do?',
     choices: ['Ring the director of GPI for a pep talk how you can bring more inspiration to the community',
               'Work with the most active group to change the city contact',
	       correct('Discuss with them the possibility of changing their strategy, exploring other ways they could do it and giving examples of some initiatives that are working well in other places'),
	       'Tell them GPI will only be able to score them higher if they make more effort',
               'Explain very supportively, diplomatically and sensitively that it is best you don’t come back until their results are better'],
	lesson: '3.1'},

    {questionHTML: 'A community you are visiting is developing strongly. You explore with them the different initiatives that are happening. One person has even been able to get the message into a local school via some video presentations (the classes for 14 to 16 year olds). The teacher whose class is involved is very enthusiastic and is showing a personal interest in the message. They use the material as a stimulus for creative writing .  What do you do?',
     choices: ['a. Wish you had never taken on the GPI role',
               'b. Take a note to monitor the project over the coming months as it could well reach hundreds of people in the end and hopefully the teacher could receive Knowledge',
	       'c. Get some one with standing in the community to tell the person doing the initiative to stop immediately as it could have adverse PR consequences on Prem Rawat.',
	       'd. Discuss with the person doing the initiative the GPI policy with regard to working with people, who are under the legal age of the country, and the rationale behind the policy.',
               'e. Work with the person in a supportive way and see if their passion can be utilised in other projects that GPI can support',
	       correct('d. and e.')],
	lesson: '3.1'},

    {questionHTML: 'Local people were contacted by the Chair Person of a Local Education Authority, who has seen the PEP in a University Setting. The Chairperson is a Professor of Literature at the University.  The classes would be for 16 to 18 year olds. The Education Authority has full responsibility for the syllabus in the schools in their area and have the authority to introduce PEP. What do you do?',
     choices: ['Tell the local people to immediately halt discussions with the Professor as GPI policy is not to support initiatives where people hearing the message are under the legal age in the country',
	       correct('Explain to the local people that you are going to inform your Regional GPI Support Manager, who will contact GPI Director & PR to advise on next steps.'),
	       'Tell them to go ahead as its ok because it was the Education Authority who made the approach to us.',
               'Monitor how things develop, and adjust the potential score for the community upwards'],
	lesson: '3.1'},

   ],

  assessmentName: 'r3course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

