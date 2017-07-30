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

  if (formData[i].type !== "select"){
    var inputTag = document.createElement('input');
    inputTag.setAttribute('type', formData[i].type);
    formNode.appendChild(inputTag);
  }

  if (formData[i].type !== "select"){
    inputTag.placeholder = formData[i].label;
  }

  if (formData[i].type === "select"){
    var selectLang = document.createElement('select');
    selectLang.setAttribute('class', 'selectLanguage');
    var selectTag = document.querySelector('.selectLanguage');

    for (var t = 0; t < formData[i].options.length; t++){
      var selectLabel = document.createElement('option');
      var selectLabelText = document.createTextNode(formData[i].options[t].label);
      selectLabel.appendChild(selectLabelText);
      selectLabel.setAttribute('value', formData[i].options[t].value);
      selectLang.appendChild(selectLabel);
    }

    formNode.appendChild(selectLang);
  }
}

// Submit Form Button

var button = document.createElement('button');
var buttonContent = document.createTextNode('Submit Form');
button.setAttribute('class', 'btn');
button.appendChild(buttonContent);
formNode.appendChild(button);
