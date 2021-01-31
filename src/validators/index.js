export function isName(value) {
  return /^[A-ZА-ЯЁ\s-]*$/i.test(value) ? true : false;
}

export function isPhone(value) {
  return /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,11}$/.test(value) ? true : false;
}
