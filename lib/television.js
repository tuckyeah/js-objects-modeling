'use strict';

// television properties:
  // power (isOn)
  // volume (currentVolume)
  // channel (currentChannel)
  // displayType
  // screenResolution
  // powerConsumption

let television = {
  isOn: false,
  currentVolume: 0,
  currentChannel: 2,
  displayType: 'Retina',
  screenResolution: '4k',
  powerConsumption: '1.21 Gigawatts',
  togglePower: function() {
    this.isOn = !this.isOn;
  },
  adjustVolume: function(param) {
    if (param === 'up') {
      this.currentVolume += 1;
    } else if (param === 'down') {
      this.currentVolume -= 1;
    }
  },
  adjustChannel: function(param) {
    if (param === 'up') {
      this.currentChannel += 1;
    } else if (param === 'down') {
      this.currentChannel -= 1;
    }
  }
};
