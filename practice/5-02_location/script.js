'use strict';

const lang = document.querySelector('html').lang;

if(lang === 'ja') {
  document.querySelector('option[value="index.html"]').selected = true;
} else if(lang === 'en') {
  document.querySelector('option[value="index-en.html"]').selected = true;
} else if(lang === 'zh') {
  document.querySelector('option[value="index-zh.html]"').selected = true;
}

// swich文で書き換え
// swich文で書き換えが可能なものはif文でも書ける
// switch(lang) {
//   case 'ja':
//     document.querySelector('option[value="index.html"]').selected = true;
//     break;
//   case 'en':
//     document.querySelector('option[value="index-en.html]').selected = true;
//     break;
//   case 'zh':
//     document.querySelector('option[value="index.zh.html]').selected = true;
//     break;
// }

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}