// stat.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
    
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; //black;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 70);  
  
  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  
  var histogramHeight = 150;              // px;
  var step = histogramHeight / (max - 0); // px;
  
  var barWidth = 40; // px; 
  var indent = 50;    // px;
  var initialX = 120; // px;
  var initialY = 90;  // px;
  
  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeigth);
    ctx.fillText(names[i], initialX + indent * i, initialY);
    ctx.fillText(times[i], initialX + indent * i, initialY + histogramHeight);
    ctx.fillStyle(rgba(255, 0, 0, 1));
  }
};
