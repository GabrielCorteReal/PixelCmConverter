function calculateSizeInCm (sizeInPixel) {
	let pixelToCm = 0.0264583333;
	return Number(sizeInPixel) * pixelToCm;
}

function getFormValue () {
	
	{
		let sizeInPixels = document.getElementById("número de pixels").value;
		document.getElementById("return").value = calculateSizeInCm(sizeInPixels);

		console.log("getFromValue: number of pixels: "+sizeInPixels);
	}
}
