var majors = new Array();

majors[0] = '<tr><td class="major-image"><img class="major-image" src="images/arch.jpg" alt="Architecture" /><p class="center">Architecture</p></td><td><ul class="bullet"><li>Average Starting Salary: $62541</li><li>Example job: Building Designer</li></ul></td><td><p>Design the building of your dreams.</p></td><td><a href="http://en.wikipedia.org/wiki/Architecture">(more on wikipedia)</a></td></tr>';
majors[1] = '<tr><td class="major-image"><img class="major-image" src="images/comm.jpg" alt="Communications" /><p class="center">Communications</p></td><td><ul class="bullet"><li>Average Starting Salary: $44969</li><li>Example job: Journalist</li></ul></td><td><p>Communicate your success to the world.</p></td><td><a href="http://en.wikipedia.org/wiki/Mass_communication">(more on wikipedia)</a></td></tr>';
majors[2] = '<tr><td class="major-image"><img class="major-image" src="images/cs.jpg" alt="Computer Science" /><p class="center">Computer Science</p></td><td><ul class="bullet"><li>Average Starting Salary: $58157</li><li>Example job: Software Engineer</li></ul></td><td><p>Code the applications of the future.</p></td><td><a href="http://en.wikipedia.org/wiki/Computer_science">(more on wikipedia)</a></td></tr>';
majors[3] = '<tr><td class="major-image"><img class="major-image" src="images/econ.jpg" alt="Economics" /><p class="center">Economics</p></td><td><ul class="bullet"><li>Average Starting Salary: $71163</li><li>Example job: Accountant</li></ul></td><td><p>Bring about an age of financial prosperity.</p></td><td><a href="http://en.wikipedia.org/wiki/Economics">(more on wikipedia)</a></td></tr>';
majors[4] = '<tr><td class="major-image"><img class="major-image" src="images/health.jpg" alt="Health" /><p class="center">Health</p></td><td><ul class="bullet"><li>Average Starting Salary: $88573</li><li>Example job: Public Health Worker</li></ul></td><td><p>Save countless lives.</p></td><td><a href="http://en.wikipedia.org/wiki/Public_Health">(more on wikipedia)</a></td></tr>';

var error_displayed = false;
var i;
var major_displayed = new Array();
for(i = 0; i < majors.length; i++) {
  major_displayed.push(false);
}

//this script displays the selected major(s) on the info page
$(document).ready(function() {
  $('#results').hide();
  $('#sel-all').click(function(){
    form.Architecture.checked = 1;
    form.Communication.checked = 1; 
    form.Computer_Science.checked = 1; 
    form.Economics.checked = 1;	
    form.Health.checked = 1;
  });
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
