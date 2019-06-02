  // Problems 1-3 solution.// 

  fetch('js/data.json').then(response => response.json()).then(getObjectData);

  function getObjectData(element) {
      function findNode(id, obj) {
          if (id == obj.id) {
              return obj.label;
          } else {
              for (let i in obj.children) {
                  let node = obj.children[i];
                  if (id == node.id) {
                      return node.label;

                  } else {
                      for (let j in node.children) {
                          let deepNode = node.children[j];
                          if (id == deepNode.id) {
                              return deepNode.label;
                          }
                      }
                  }
              }
          }
      }

      function getId() {
          let inpValue = document.querySelector('#input-value');
          let functionResult = document.querySelector('#function-result');
          let inpButton = document.querySelector('#input-button');
          inpButton.addEventListener('click', () => {
              let result = findNode(inpValue.value, element);
              if (inpValue.value >= 9 || isNaN(inpValue.value)) {
                  functionResult.innerHTML = 'Incorrect data.';
              } else {
                  functionResult.innerHTML = 'Object Value is: ' + result + ' .';
              }
              inpValue.value = '';
          });
      }
      return getId();
  }
  // End problems solution 1-3.//

  // Problem 4 solution//
  
  function makeValidate() {
      let formValidationButton = document.querySelector('.form-validation')
      formValidationButton.addEventListener('submit', validateForm);


      function validateForm(e) {
          let errors = [];
          let allInputs = document.forms[0].elements;
          for (let i = 0; i < allInputs.length; i++) {
              if (allInputs[i].value.match(/^[#.0-9a-zA-Z\s,-]+$/)) {
                  allInputs[i].style.borderColor = 'green';
              } else if (allInputs[i].dataset.def == 'addressSecond') {
                  allInputs[i].style.borderColor = 'green';
              } else if (allInputs[i].value == '') {
                  allInputs[i].style.borderColor = 'red';
                  errors.push({
                      name: allInputs[i].name,
                      error: 'empty value'
                  });
              }
          }
          if (errors.length <= 0) {
              alert('Your form has been sent successfully!');
          } else {
              e.preventDefault();

          }
      }
  }
  makeValidate();