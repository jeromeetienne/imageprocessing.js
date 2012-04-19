benchsuite('imageprocessing', function(){
	var imgDataOrig;
	var imgDataDst;
	var ctxOrig;
	var ctxDst;

	before(function(){
		var imageEl	= document.getElementById('sampleImg');
		var canvas	= document.getElementById('canvasSrc');
		var ctxOrig	= canvas.getContext('2d');
		// copy the original image
		ctxOrig.drawImage(imageEl, 0, 0, ctxOrig.canvas.width, ctxOrig.canvas.height);

		imgDataOrig	= ctxOrig.getImageData(0, 0, canvas.width, canvas.height);
		imgDataDst	= ImgProc.duplicate(imgDataOrig, ctxOrig);
	});

	bench('sobel', function() {
		ImgProc.sobel(imgDataOrig, imgDataDst);
	});

	bench('invert', function() {
		ImgProc.invert(imgDataOrig, imgDataDst);
	});

	after(function(){
		var canvas	= document.getElementById('canvasDst');
		var ctxDst	= canvas.getContext('2d');
		ctxDst.putImageData(imgDataDst, 0, 0);
	});
});
