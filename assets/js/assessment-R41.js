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

  preamble: '<br><b>code of Conduct, Multiple-choice Questions / Module 4</b><br><br>Please answer <b>all</b> questions below<br><br>',

  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
    {questionHTML: "You are visiting a city and the two meetings you have conducted have been very successful. The premies are grateful for your efforts - they know you have travelled a long way and they give you a bottle of wine when you leave as a sign of their appreciation (they have heard on the grapevine that you like good wine). What should you do?", // question can be plain text or arbitrary HTML
     choices: ['You accept because it’s a long train journey back to your home and drinking the wine with a meal on the train will help you relax on your return journey', 
	      'On this occasion you accept because you have done your homework and in the culture of the city you are visiting you know it is not polite to refuse a gift',
	      correct('You politely decline explaining that in your role as GPI Rep your are asked not to accept gifts or personal favours'),
	      'You decline twice but finally accept as you don’t want to offend the premies - they are insisting you accept it and you want to maintain a positive atmosphere for your next visit'], 

     // the (optional) lesson associated with this question, which is displayed as a suggestion
     // for further study if the student answers this question incorrectly.
     lesson: '4.1'},

    {questionHTML: 'You are invited to dinner organised by the community after your activities in the city are finished. Alcoholic drinks are served before and during the meal. Should you:',
     choices: ['a. Drink a little.',
               'b. Not drink at al',
	       'c. Drink as much as everyone else with the possibility of getting a little drunk',
	       correct('a. or b.')],
	lesson: '4.1'},

    {questionHTML: 'If a GPI Rep is in an existing intimate relationship with another GPI team member in one of the cities that he/she is about to visit & assess: ',
     choices: ['a) They can remain in their relationship as long as no one else on the team is aware of their relationship.',
               'b) They must let their regional manager know and then automatically step down from their role - there are no exceptions to the code of conduct.',
	       'c) They should inform their area manager of the relationship. They can remain in the relationship if it is agreed that they do not work closely together on the visit to the city and that the overall GPI team is not compromised.',
               correct('d) A professional approach to the situation would involve: Bringing their relationship to the attention of the Regional manager. Ensuring the two people involved do not work closely together on the same projects. Ensuring that their relationship does not affect other team members or the performance of their role. Be especially vigilant to maintain objectivity when assessing the community'),
	       'e) c. & b.'],
	lesson: '4.1'},

    {questionHTML: 'You are a GPI Rep visiting a city. After the meeting someone in a community asks you out on a date. What do you do?',
     choices: [correct('Politely decline'),
	       'Accept if you want to, because such issues are your personal business',
	       'Ask for permission from the regional support manager',
               'Accept, if you want to - the community is small and fairly \'dead\' in terms of activity - so it is unlikely there will be any repercussions'],
	lesson: '4.1'},

    {questionHTML: 'The meetings are completed in the city and it is time to return home. The community has arranged for someone to give you a lift to get to the airport from where you are staying. This will be a great help to you.What should you do?',
     choices: ['Email your regional manager and other GPI Reps to ask what to do',
	       'You should politely decline as GPI reps so not accept personal favours',
	       correct('You can gratefully accept as this is an incidental activity and not a personal favour'),
               'There are no such things as an incidental activity because someone in the community might view it as a personal favour'],
	lesson: '4.1'},


   ],

  assessmentName: 'r4course', // unique name submitted along with all of the answers
  checkAnswers:false        // render a "Check your Answers" button to allow students to check answers prior to submitting?
}

