module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  shorten_string: (str) => {
    return str.substr(0, 25);
  }
};
