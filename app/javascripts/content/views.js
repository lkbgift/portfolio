(function(){
  var experienceTemplate = '{{#experience}} <div class="experience-item">' + 
    '<h3 class="title inline">{{position}}</h3> <h3 class="company subheader inline">{{company}}</h3>' + 
    '<h4 class="dates">{{startDate}} - {{endDate}}</h4>' + 
    '<p>{{description}}</p> </div> {{/experience}}'; 
  
  var viewExperience = Mustache.to_html(experienceTemplate, experienceData); 
  $('#experienceArea').html(viewExperience);

  var skillsTemplate = '<ul class="">' +
    '{{#skills}} {{#rowIn}}<div class="row">{{/rowIn}} <li class=" no-list-style {{width}} {{column}} {{skill}}"><h3>{{skill}}</h3>' +
    '<div class="radius progress   {{colorContext}}"><span class="meter"></span></div>' +
    '<ul class="inline-list">' +
    '{{#relevance}}<li>{{.}}</li>{{/relevance}}' +
    '</ul></li> {{#rowOut}}</div>{{/rowOut}}</ul>{{/skills}}';
  
  var viewSkills = Mustache.to_html(skillsTemplate, skillsData); 
  $('#skillsArea').html(viewSkills);

  return this;

})();