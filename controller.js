
function onMove(event) {
    if (isPainting) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
  }
  function startPainting() {
    isPainting = true;
  }
  function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
  }
  function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
  }
  function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
  }
  function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
  }
  function onModeClick() {
    if (isFilling) {
      isFilling = false;
      modeBtn.innerText = "Fill";
    } else {
      isFilling = true;
      modeBtn.innerText = "Draw";
    }
  }
  function onCanvasClick() {
    if (isFilling) {
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }
  function onDestroyClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
  }
  function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
      ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      fileInput.value = null;
    };
  }
  function onDoubleClick(event) {
    const text = textInput.value;
    if (text !== "") {
      ctx.save();
      ctx.lineWidth = 1;
      ctx.font = "68px sans-serif";
      ctx.fillText(text, event.offsetX, event.offsetY);
      ctx.restore();
    }
  }
  
  function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
  }
  