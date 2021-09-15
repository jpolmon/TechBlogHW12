module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  shorten_string: (str) => {
    if (str.length > 25) {
      return str.substr(0, 25);
    } else {
      return str;
    }    
  }
};
