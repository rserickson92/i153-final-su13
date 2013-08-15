var majors = new Array();

majors[0] = '<tr><td class="major-image"><img class="major-image" src="" alt="Architecture" /></td><td><ul class="bullet"><li>Average Starting Salary: $62541</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[1] = '<tr><td class="major-image"><img class="major-image" src="" alt="Communications" /></td><td><ul class="bullet"><li>Average Starting Salary: $44969</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[2] = '<tr><td class="major-image"><img class="major-image" src="" alt="Computer Science" /></td><td><ul class="bullet"><li>Average Starting Salary: $58157</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[3] = '<tr><td class="major-image"><img class="major-image" src="" alt="Economics" /></td><td><ul class="bullet"><li>Average Starting Salary: $71163</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[4] = '<tr><td class="major-image"><img class="major-image" src="" alt="Health" /></td><td><ul class="bullet"><li>Average Starting Salary: $88573</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';

var error_displayed = false;
var i;
var major_displayed = new Array();
for(i = 0; i < majors.length; i++) {
  major_displayed.push(false);
}

//this script displays the selected major(s) on the info page
$(document).ready(function() {
  $('#results').hide();
  $('#form').submit(function() {
    var checkbox_vals = [form.Architecture.checked, 
                         form.Communication.checked, 
			 form.Computer_Science.checked, 
			 form.Economics.checked, 
			 form.Health.checked];
    var selected_majors = [];
    var table = $("#major-listings");
    var temp;
    for(i = 0; i < checkbox_vals.length; i=i+1) {
      if(checkbox_vals[i]) {
	selected_majors.push(i);
      }
    }
    for(i = 0; i < selected_majors.length; i=i+1) {
      temp = selected_majors[i];
      if(!major_displayed[temp]) {
        table.append(majors[temp]);
	major_displayed[temp] = true;
      }
    }
    if(selected_majors.length === 0) {
      if(!error_displayed) {
        $('#major-list-container').append('<p class="error text">Please select at least one major.</p>');
        error_displayed = true;
      }
    }
    else {
      $('#results').show();
    }
    return false;
  });
});
