function graduate(credential) {
  return function logFullName(fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
console.log('medicalSchool', medicalSchool('Frank Bishop'));
console.log('law school', lawSchool('Frank Bishop'));
