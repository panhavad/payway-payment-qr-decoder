// @todo function to handle the submited data
// @body handling the string, split anything to refine the string then input the next function
function extractData() {
	let num_amount_chars = document.getElementById("num-of-chars")

	var input_str = document.getElementById("qr-text").value;
	if (input_str) { //check if user input value
		if (input_str.includes("000201010212520400005303")){//make sure that it is payway qr (marker)
			var no_marker_str = input_str.replace("000201010212520400005303840540","")
			console.log(no_marker_str)
			console.log(no_marker_str.substring(0, 1))
		}
		console.log("IN")
	}
}

// @todo handling epoch
// @body convert the epch to time and make sure it can be concate to html, this might have to deal with string


// @todo replacing the result text
// @body this will handle the result display on the screen make sure everything is refresh and display correctly


// @todo renovate the html result code
// @body improve the display result by not using raw html, instead should use js to complie all of those list using clone function?


// @todo update to QR scan
// @body able to scan the qr and auto input that text from qr and execute it


// @todo imtergrate the crc concate (next page?)
// @body enable the feature to modify info and generate the crc for new QR 