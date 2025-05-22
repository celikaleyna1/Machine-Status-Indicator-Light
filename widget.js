self.onDataUpdated = function () {
  function resetLights() {
    var redEl = document.getElementById('redLight');
    var greenEl = document.getElementById('greenLight');
    var yellowEl = document.getElementById('yellowLight');

    redEl.classList.remove('glow-red');
    greenEl.classList.remove('glow-green');
    yellowEl.classList.remove('glow-yellow');
  }

  var redValue = false;
  var greenValue = false;
  var yellowValue = false;

  if (self.ctx.data) {
    for (var i = 0; i < self.ctx.data.length; i++) {
      var dataSource = self.ctx.data[i];
      var dataKeyName = dataSource.dataKey.name;
      var latestData = dataSource.data && dataSource.data.length > 0 ?
                       dataSource.data[dataSource.data.length - 1] : null;

      if (latestData) {
        var value = latestData[1];
        if (dataKeyName === 'red') {
          redValue = value === true || value === "true";
        } else if (dataKeyName === 'green') {
          greenValue = value === true || value === "true";
        } else if (dataKeyName === 'yellow') {
          yellowValue = value === true || value === "true";
        }
      }
    }
  }

  resetLights();

  if (redValue) {
    document.getElementById('redLight').classList.add('glow-red');
  }
  if (greenValue) {
    document.getElementById('greenLight').classList.add('glow-green');
  }
  if (yellowValue) {
    document.getElementById('yellowLight').classList.add('glow-yellow');
  }
};
