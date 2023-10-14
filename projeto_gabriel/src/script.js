function claculate_size_in_cm (size_in_pixel) {
	return Number(size_in_pixel) * 0.0264583333;
}

function get_form_value () {
	
	{
		console.log("entrei no evento");
		
		let size_in_pixels = document.getElementById("número de pixels").value;
		document.getElementById("return").value = claculate_size_in_cm(size_in_pixels);
	}
}
