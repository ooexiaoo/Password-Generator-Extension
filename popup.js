// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');
  
    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyToClipboard);
  });
  
  function generatePassword() {
    const length = document.getElementById('lengthInput').value;
    const includeUppercase = document.getElementById('uppercaseCheckbox').checked;
    const includeLowercase = document.getElementById('lowercaseCheckbox').checked;
    const includeNumbers = document.getElementById('numbersCheckbox').checked;
    const includeSpecialChars = document.getElementById('specialCharsCheckbox').checked;
  
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  
    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }
  
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.value = password;
  }
  
  function copyToClipboard() {
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.select();
    document.execCommand('copy');
  }
  