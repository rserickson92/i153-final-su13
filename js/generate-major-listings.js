var majors = new Array();
var major = {
  ARCHITECTURE : 0,
  COMMUNICATION : 1,
  COMPUTER_SCIENCE : 2,
  ECONOMICS : 3,
  HEALTH : 4
};
var selected_majors = [];

majors[0] = '<tr><td class="major-image"><img class="major-image" src="" alt="Architecture" /></td><td><ul class="bullet"><li>Average Starting Salary: $62541</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[1] = '<tr><td class="major-image"><img class="major-image" src="" alt="Communications" /></td><td><ul class="bullet"><li>Average Starting Salary: $44969</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[2] = '<tr><td class="major-image"><img class="major-image" src="" alt="Computer Science" /></td><td><ul class="bullet"><li>Average Starting Salary: $58157</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[3] = '<tr><td class="major-image"><img class="major-image" src="" alt="Economics" /></td><td><ul class="bullet"><li>Average Starting Salary: $71163</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[4] = '<tr><td class="major-image"><img class="major-image" src="" alt="Health" /></td><td><ul class="bullet"><li>Average Starting Salary: $88573</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';

//this script displays the selected major(s) on the info page
$("info.html").ready(function() {
  var i;
  var table = $("#major-listings");
  for(i = 0; i < selected_majors.length; i++) {
    table.append(majors[selected_majors[i]]);
  }
});

$("Selection.html").ready(function() {
  //Note: these two scripts may be dependent on each other. Don't worry about it if they are, just focus on the task.
  //Ryan will combine the scripts into one if needed.

  //easy:
  //Write a script that adds a paragraph in red text that says "Please select at least one major." if the user
  //clicks on the submit button without selecting any majors. A user hasn't selected any majors if the array 
  //"selected_majors" has a length of zero.
  
  //medium:
  //Write a script that checks which majors have been selected. If a major has been selected, add it onto the end
  //of the array "selected_majors". To select a major to add to the array, use major.NAME, where "NAME" is one of
  //the five major names near the top of this document. Make sure you type the name EXACTLY as it appears. 
}
