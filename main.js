var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


var formNode = document.getElementById('signup');

// Header of form
var formHeader = document.createElement('h1');
var formHeaderText = document.createTextNode('Sign Up For My Web App');
formHeader.appendChild(formHeaderText);
formNode.appendChild(formHeader);

// input forms

for (var i = 0; i < formData.length; i++){

  if (formData[i].hasOwnProperty("type")){
    var inputTag = document.createElement('input');
    inputTag.setAttribute('type', formData[i].type);
    formNode.appendChild(inputTag);
  }

  if (formData[i].hasOwnProperty("label")){
    inputTag.placeholder = formData[i].label;
}
}





//
// // Inputs
// var inputTag = document.createElement('input');
// var i = document.createElement('i');
// i.setAttribute('class', 'fa fa-user');
// inputTag.setAttribute('type', 'text');
// inputTag.setAttribute('class', 'firstName');
// formNode.appendChild(inputTag);
// formNode.appendChild(i);


// // Submit Form Button
// var button = document.createElement('button');
// var buttonContent = document.createTextNode('Submit Form');
// button.appendChild(buttonContent);
// formNode.appendChild(button);
