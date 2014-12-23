
import $ from 'jquery';

$('body').append('<div id="widthDetection"></div>');
let $div = $('#widthDetection');
$div.width('50vw');

// From modernizer
var width = parseInt(window.innerWidth/2,10);
var compStyle = parseInt((window.getComputedStyle ?
                              window.getComputedStyle($div.get(0), null) :
                              $div.get(0).currentStyle)['width'],10);
$div.remove();

export default compStyle == width;
