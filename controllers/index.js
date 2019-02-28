function main () {
  var self = this;

  self.settings = {
    name: ko.observable(''),
    address: ko.observable(''),
    city: ko.observable(''),
    state: ko.observable(''),
    zipcode: ko.observable(''),
    card: ko.observable(''),
    expiration: ko.observable(''),
    security: ko.observable('')
  };


  self.startup = function () {
    $('.panel-button').click(self.clickHandler);

    $.ajax({
      url: '/views/ship',
      method: 'GET',
      error: self.errorHandle,
      success: self.loadDiv
    });

    $('.continue-button').click(self.contBtnEvent);
  };

  self.errorHandle = function (xhr, status, err) {
    console.log('error: ' + status + err);
  };

  self.loadDiv = function (file, status, xhr) {
    ko.cleanNode($('#stage')[0]);
    $('#stage').html(file);
    ko.applyBindings(self.settings, $('#stage')[0]);
    $('.continue-button').click(self.contBtnEvent);
  };

  self.clickHandler = function (event) {
    self.reqDiv(event.target.id);
  };

  self.reqDiv = function (id) {
    var url = '/views/' + id;

    $.ajax({
      url: url,
      method: 'GET',
      error: self.errorHandle,
      success: self.loadDiv
    });
  }

  self.contBtnEvent = function (event) {
    var id = '';

    switch(event.target.id) {
      case 'shipCont':
        id = 'pay';
        break;
      case 'payCont':
        id = 'confirmation';
        break;
      case 'confirmationCont':
        id = 'complete';
        break;
    }

    self.reqDiv(id);
  };

  return self;
};

var index = main();
index.startup();
