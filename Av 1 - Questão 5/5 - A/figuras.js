    canvas = document.getElementById("figuras");
    ctx=canvas.getContext("2d");
    ctx.strokeStyle="SteelBlue";
    ctx.lineWidth = 2;
     
    // Figura 1
      ctx.strokeRect(5,5,200,100);
      ctx.beginPath();
      ctx.fillStyle = "SteelBlue";
      ctx.moveTo(70, 80);
      ctx.lineTo(140, 80);
      ctx.lineTo(105, 20);
      ctx.fill();

    // Figura 2
      ctx.beginPath();
      ctx.arc(340, 60, 52, (Math.PI / 180) * 360, (Math.PI / 180) * 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = "SteelBlue";
      ctx.fillRect(309, 30, 62, 62);

    // Figura 3
      ctx.beginPath();
      ctx.moveTo(590,110);
      ctx.lineTo(515,5);
      ctx.lineTo(445,110);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(680,110);
      ctx.lineTo(605,5);
      ctx.lineTo(535,110);
      ctx.closePath();
      ctx.stroke();
    