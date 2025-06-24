window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Trello_logo.svg/2048px-Trello_logo.svg.png',
      text: 'Generate UTM Links',
      callback: function(t) {
        return t.popup({
          title: 'UTM Builder',
          url: 'utm-modal.html',
          height: 400
        });
      }
    }];
  }
});