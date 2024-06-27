// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
var finalOp = [];
var input = {
  fields: {
    givenName: {
      fieldId: 'givenName',
      fieldTitle: 'First name',
      placeholder: 'First name',
      type: 'input',
      value: 'Fabio',
      regex: '^[a-zA-Z ]{0,25}$',
      errorMsg: 'Please enter valid input',
      mandatory: 'true',
      isValid: 'true',
      showWidget: 'true',
      messageText:
        "I am { value of the field should be shown here } and I'm awesome!",
      isInputGiven: 'true',
    },
    phoneCountryCode: {
      fieldId: 'phoneCountryCode',
      fieldTitle: 'Phone country code',
      type: 'dropdown',
      value: '',
      errorMsg: 'Please select',
      mandatory: 'true',
      optionSearch: 'true',
      maxSelection: 1,
      isValid: 'true',
      showWidget: 'true',
      messageText:
        'Phone country code { value of the field should be shown here }',
      isInputGiven: 'false',
      options: [
        {
          title: '+850',
          desc: ' ',
          key: '850',
          checkboxInputs: {
            checked: false,
            disabled: false,
          },
        },
        {
          title: '+852',
          desc: ' ',
          key: '852',
          checkboxInputs: {
            checked: false,
            disabled: false,
          },
        },
      ],
    },
  },
};
var expectedOutput = [
  {
    fields: [
      {
        fieldId: 'givenName',
        fieldTitle: 'First name',
        placeholder: 'First name',
        type: 'input',
        value: 'Fabio',
        regex: '^[a-zA-Z ]{0,25}$',
        errorMsg: 'Please enter valid input',
        mandatory: 'true',
        isValid: 'true',
        showWidget: 'true',
        messageText:
          "I am { value of the field should be shown here } and I'm awesome!",
        isInputGiven: 'true',
      },
      {
        fieldId: 'phoneCountryCode',
        fieldTitle: 'Phone country code',
        type: 'dropdown',
        value: '',
        errorMsg: 'Please select',
        mandatory: 'true',
        optionSearch: 'true',
        maxSelection: 1,
        isValid: 'true',
        showWidget: 'true',
        messageText:
          'Phone country code { value of the field should be shown here }',
        isInputGiven: 'false',
        options: [
          {
            title: '+850',
            desc: ' ',
            key: '850',
            checkboxInputs: {
              checked: false,
              disabled: false,
            },
          },
          {
            title: '+852',
            desc: ' ',
            key: '852',
            checkboxInputs: {
              checked: false,
              disabled: false,
            },
          },
        ],
      },
    ],
  },
];
var options = [
  {
    title: 'Single',
    desc: ' ',
    key: '850',
    checkboxInputs: {
      checked: false,
      disabled: false,
    },
  },
  {
    title: 'Married',
    desc: ' ',
    key: '851',
    checkboxInputs: {
      checked: true,
      disabled: false,
    },
  },
];
var temp = options
  .filter((obj) => obj.checkboxInputs.checked)
  .map((item) => item.title)
  .join('');
console.log('Default Select', temp);

// var output = {
//   fields:Object.values(input.fields)
//   }
// var output = {
//   fields:Object.keys(input).map(function(key){return input[key]})
//   }
//   console.log(output);
// for (var key in input) {
//     if (input.hasOwnProperty(key)) {
//         var values = input[key];
//         //console.log('values',values);
//      //   console.log('Keys',key);
//         for (var key in values) {
//           var values1 = values[key];
//           finalOp.push(values1);
//         console.log('values1',finalOp);
//         console.log('Keys',key);
//         }
//         // "key" will be City1, City2, ...
//         // "values" will be the corresponding array through which
//         // you can loop
//     }
//      console.log('Op',finalOp);
// }
//console.log('test',expectedOutput);

var output = {
  fields: Object.keys(input.fields).map(function (key) {
    return input.fields[key];
  }),
};
console.log('output', output);

var output1 = {
  fields: Object.keys(input.fields).map((key) => {
    return input.fields[key];
  }),
};
console.log('output1', output1);
const HkDvpModel1 = output1.fields.find((obj) => obj.fieldId);
console.log('input', HkDvpModel1);

const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    console.log('obj', obj);
    console.log('item', item);
    obj[item[keyField]] = item;
    return obj;
  }, {});
const HkDvpModel = { fields: arrayToObject(output1.fields, 'fieldId') };
console.log('HkDvpModel', HkDvpModel);
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     console.log('allNames',allNames);
//     console.log('name',allNames[name]);
//     console.log('name',name);
//     allNames[name]++
//   }
//   else {
//     console.log('Else name',name);
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
//  console.log('countedNames',countedNames);
