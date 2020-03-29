// implement another method getTime and print out current time;

const calendar = {
  getDate: function() {
    return new Date().toDateString();
  },
};

console.log(calendar.getDate());
