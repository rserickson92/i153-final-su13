var majors = new Array();
var major_dict = {
  Anthropology : 0,
  Architecture : 1,
  Art : 2,
  Astronomy : 3,
  Biology : 4, 
  Business : 5,
  Chemistry : 6,
  Civil_Engineering : 7,
  Cognitive_Science : 8,
  Communications : 9,
  Computer_Science : 10,
  Economics : 11,
  Education : 12,
  Electrical_Engineering : 13,
  English : 14, 
  Finance : 15,
  Fine_Arts : 16,
  Geology : 17,
  History : 18,
  Language : 19,
  Linguistics : 20,
  Mathematics : 21,
  Mechanical_Engineering : 22,
  Music : 23,
  Nursing : 24,
  Performing_Arts : 25,
  Pharmacy : 26,
  Philosophy : 27,
  Physics : 28,
  Political_Science : 29,
  PreLaw : 30,
  PreMed : 31,
  Psychology : 32,
  Religious_Studies : 33,
  Sociology : 34
};

majors[0] = '<tr><td class="major-image"><img class="major-image" src="" alt="Anthropology" /></td><td><ul class="bullet"><li>Average Starting Salary: $47576</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[1] = '<tr><td class="major-image"><img class="major-image" src="" alt="Architecture" /></td><td><ul class="bullet"><li>Average Starting Salary: $62541</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[2] = '<tr><td class="major-image"><img class="major-image" src="" alt="Art" /></td><td><ul class="bullet"><li>Average Starting Salary: $45940</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[3] = '<tr><td class="major-image"><img class="major-image" src="" alt="Astronomy" /></td><td><ul class="bullet"><li>Average Starting Salary: $83942</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[4] = '<tr><td class="major-image"><img class="major-image" src="" alt="Biology" /></td><td><ul class="bullet"><li>Average Starting Salary: $56577</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[5] = '<tr><td class="major-image"><img class="major-image" src="" alt="Business" /></td><td><ul class="bullet"><li>Average Starting Salary: $64976</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[6] = '<tr><td class="major-image"><img class="major-image" src="" alt="Chemistry" /></td><td><ul class="bullet"><li>Average Starting Salary: $61365</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[7] = '<tr><td class="major-image"><img class="major-image" src="" alt="Civil Engineering" /></td><td><ul class="bullet"><li>Average Starting Salary: $54282</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[8] = '<tr><td class="major-image"><img class="major-image" src="" alt="Cognitive Science" /></td><td><ul class="bullet"><li>Average Starting Salary: $75003</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[9] = '<tr><td class="major-image"><img class="major-image" src="" alt="Communications" /></td><td><ul class="bullet"><li>Average Starting Salary: $44969</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[10] = '<tr><td class="major-image"><img class="major-image" src="" alt="Computer Science" /></td><td><ul class="bullet"><li>Average Starting Salary: $58157</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[11] = '<tr><td class="major-image"><img class="major-image" src="" alt="Economics" /></td><td><ul class="bullet"><li>Average Starting Salary: $71163</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[12] = '<tr><td class="major-image"><img class="major-image" src="" alt="Education" /></td><td><ul class="bullet"><li>Average Starting Salary: $37105</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[13] = '<tr><td class="major-image"><img class="major-image" src="" alt="Electrical Engineering" /></td><td><ul class="bullet"><li>Average Starting Salary: $60157</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[14] = '<tr><td class="major-image"><img class="major-image" src="" alt="English" /></td><td><ul class="bullet"><li>Average Starting Salary: $40750</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[15] = '<tr><td class="major-image"><img class="major-image" src="" alt="Finance" /></td><td><ul class="bullet"><li>Average Starting Salary: $75504</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[16] = '<tr><td class="major-image"><img class="major-image" src="" alt="Fine Arts" /></td><td><ul class="bullet"><li>Average Starting Salary: $67736</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[17] = '<tr><td class="major-image"><img class="major-image" src="" alt="Geology" /></td><td><ul class="bullet"><li>Average Starting Salary: $48454</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[18] = '<tr><td class="major-image"><img class="major-image" src="" alt="History" /></td><td><ul class="bullet"><li>Average Starting Salary: $43664</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[19] = '<tr><td class="major-image"><img class="major-image" src="" alt="Language" /></td><td><ul class="bullet"><li>Average Starting Salary: $41142</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[20] = '<tr><td class="major-image"><img class="major-image" src="" alt="Linguistics" /></td><td><ul class="bullet"><li>Average Starting Salary: $50023</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[21] = '<tr><td class="major-image"><img class="major-image" src="" alt="Mathematics" /></td><td><ul class="bullet"><li>Average Starting Salary: $52738</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[22] = '<tr><td class="major-image"><img class="major-image" src="" alt="Mechanical Engineering" /></td><td><ul class="bullet"><li>Average Starting Salary: $59663</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[23] = '<tr><td class="major-image"><img class="major-image" src="" alt="Music" /></td><td><ul class="bullet"><li>Average Starting Salary: $38205</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[24] = '<tr><td class="major-image"><img class="major-image" src="" alt="Nursing" /></td><td><ul class="bullet"><li>Average Starting Salary: $56520</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[25] = '<tr><td class="major-image"><img class="major-image" src="" alt="Performing Arts" /></td><td><ul class="bullet"><li>Average Starting Salary: $35613</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[26] = '<tr><td class="major-image"><img class="major-image" src="" alt="Pharmacy" /></td><td><ul class="bullet"><li>Average Starting Salary: $82807</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[27] = '<tr><td class="major-image"><img class="major-image" src="" alt="Philosophy" /></td><td><ul class="bullet"><li>Average Starting Salary: $52593</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[28] = '<tr><td class="major-image"><img class="major-image" src="" alt="Physics" /></td><td><ul class="bullet"><li>Average Starting Salary: $75211</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[29] = '<tr><td class="major-image"><img class="major-image" src="" alt="Political Science" /></td><td><ul class="bullet"><li>Average Starting Salary: $49595</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[30] = '<tr><td class="major-image"><img class="major-image" src="" alt="Pre-Law" /></td><td><ul class="bullet"><li>Average Starting Salary: $55460</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[31] = '<tr><td class="major-image"><img class="major-image" src="" alt="Pre-Med" /></td><td><ul class="bullet"><li>Average Starting Salary: $107207</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[32] = '<tr><td class="major-image"><img class="major-image" src="" alt="Psychology" /></td><td><ul class="bullet"><li>Average Starting Salary: $45948</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[33] = '<tr><td class="major-image"><img class="major-image" src="" alt="Religious Studies" /></td><td><ul class="bullet"><li>Average Starting Salary: $40493</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';
majors[34] = '<tr><td class="major-image"><img class="major-image" src="" alt="Sociology" /></td><td><ul class="bullet"><li>Average Starting Salary: $45805</li><li>Point 2</li><li>Point 3</li><li>Point 4</li></ul></td><td><p>Summary</p></td><td><a href="">(more on wikipedia)</a></td></tr>';

$(document).ready(function() {
  var i;
  var table = $("#major-listings");
  for(i = 0; i < majors.length; i++) {
    table.append(majors[i]);
  }
});
