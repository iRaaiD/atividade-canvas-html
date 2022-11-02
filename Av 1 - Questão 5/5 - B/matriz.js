canvas = document.getElementById("matriz");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle="SteelBlue";
    ctx.lineWidth = 2;
     
    for(q=0; q<6; q++){
        for(t=0; t<6; t++){
          ctx.strokeRect(10 + (60 * q), 10 + (60 * t), 50, 50);
          ctx.beginPath();
          ctx.moveTo(50 + (60 * q), 47 + (60 * t));
          ctx.lineTo(20 + (60 * q), 47 + (60 * t));
          ctx.lineTo(35 + (60 * q), 20 + (60 * t));
          ctx.closePath();
          ctx.stroke();
        }
      }