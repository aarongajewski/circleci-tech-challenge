jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
var html = require('fs').readFileSync('./index.html').toString();

describe('Test to see if text is displayed', function() {

  it('shows text after button click', function() {
    document.documentElement.innerHTML = html;

    // Initial state
    expect($('#textDisplay').hasClass('hidden')).toBeTruthy();

    //Simulate button click & run function
    const showText = require('./js/scripts');
    showText();

    // Expected state after click
    expect($('#textDisplay').hasClass('hidden')).toBeFalsy();
  });

});
