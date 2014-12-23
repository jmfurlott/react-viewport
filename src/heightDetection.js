
import $ from 'jquery';

$('body').append('<div id="viewportDetection"></div>');
let $div = $('#viewportDetection');
$div.height('50vh');

// From modernizer
var height = parseInt(window.innerHeight/2,10);
var compStyle = parseInt((window.getComputedStyle ?
                              window.getComputedStyle($div.get(0), null) :
                              $div.get(0).currentStyle)['height'],10);
$div.remove();

export default compStyle == height;
