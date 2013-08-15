var majors = new Array();
var major = {
  ARCHITECTURE : 0,
  COMMUNICATION : 1,
  COMPUTER_SCIENCE : 2,
  ECONOMICS : 3,
  HEALTH : 4
};
var selected_majors = [0, 1, 2, 3, 4];

majors[0] = '<tr><td class="major-image"><img class="major-image" src="" alt="Architecture" /></td><td><ul class="bullet"><li>Average Starting Salary: $62541</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[1] = '<tr><td class="major-image"><img class="major-image" src="" alt="Communications" /></td><td><ul class="bullet"><li>Average Starting Salary: $44969</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[2] = '<tr><td class="major-image"><img class="major-image" src="" alt="Computer Science" /></td><td><ul class="bullet"><li>Average Starting Salary: $58157</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[3] = '<tr><td class="major-image"><img class="major-image" src="" alt="Economics" /></td><td><ul class="bullet"><li>Average Starting Salary: $71163</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[4] = '<tr><td class="major-image"><img class="major-image" src="" alt="Health" /></td><td><ul class="bullet"><li>Average Starting Salary: $88573</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';

var url = window.name;
var current_file = url.substring(url.lastIndexOf('/')+1);

//this script displays the selected major(s) on the info page
$(document).ready(function() {
  var i;
  var table = $("#major-listings");
  var temp;
  for(i = 0; i < selected_majors.length; i++) {
    temp = selected_majors[i];
    table.append(majors[temp]);
  }
});
