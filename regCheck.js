module.exports = function(registrationNumber, locationIndicator) {
    if(registrationNumber.endsWith(locationIndicator)) {
      return true;
    }
    else {
      return false;
    }
  }