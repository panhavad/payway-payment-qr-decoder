// @todo function to handle the submited data
// @body handling the string, split anything to refine the string then input the next function
function extractData() {
	let num_amount_chars = document.getElementById("num-of-chars")

	var input_str = document.getElementById("qr-text").value;
	if (input_str) { //check if user input value
		if (input_str.includes("000201010212520400005303")) {//make sure that it is payway qr (marker)
			var current_work_str = input_str.replace("000201010212520400005303840540", "")//this is the code that mark as a valid payway qr, just remove that i dont need that

			//they allow on 50000.00 per transaction so mean that number of digit can be at most 8 (only one char)
			let MARK_AMOUNT_LEN = 1
			var ext_amount_len = parseInt(current_work_str.substring(0, MARK_AMOUNT_LEN)) //there will be no issue on this, dont for get to parse to int too because it was str when i get it
			
			let MARK_AMOUNT = ext_amount_len + 1 //because of substring function i have add the end param with 1 to get correct value
			var ext_amount_tobe_transac = current_work_str.substring(MARK_AMOUNT_LEN, MARK_AMOUNT)
			
			let MARK_VENDOR_ID = MARK_AMOUNT + 10 //suppose vendor id always 10 char after the amount
			var ext_vendor_id = current_work_str.substring(MARK_AMOUNT, MARK_VENDOR_ID)
			
			let MARK_VENDOR_NAME = current_work_str.indexOf(" by ")
			var ext_vendor_name = current_work_str.substring(MARK_VENDOR_ID, MARK_VENDOR_NAME)

			//remove half string for ease of work
			current_work_str = current_work_str.replace(current_work_str.substring(0, MARK_VENDOR_NAME)+" by ", "")

			console.log(current_work_str)

			let MARK_LINKED_USER = current_work_str.indexOf("6")
			var ext_linked_user = current_work_str.substring(0, MARK_LINKED_USER)//start work on new string will be 0

			//the localtion len always more then 2 digit to define
			//because short provice name is KEP (3 char) and they use 03
			//so this indicator can go from 03 to 16 and even 99 still 2 digit so okay
			let MARK_LOCATION_LEN = MARK_LINKED_USER + 2 + 2 //doing like this is dump but to make it number standable
			//first 2 is to jump of 60
			//second 2 is to get to the send of indicator len
			var ext_location_len = parseInt(current_work_str.substring(MARK_LOCATION_LEN - 2, MARK_LOCATION_LEN))

			let MARK_VENDOR_LOC = MARK_LOCATION_LEN + ext_location_len
			var ext_vendor_loc = current_work_str.substring(MARK_LOCATION_LEN, MARK_VENDOR_LOC)
			//end of info to collect from start string because data after data so complex can not understand ==

			//now let collect from end string
			let MARK_END_WORK_STR = current_work_str.length //last location of string
			let MARK_CRC_HEX = MARK_END_WORK_STR - 4
			var ext_crc_hex = current_work_str.substring(MARK_CRC_HEX, MARK_END_WORK_STR)

			let MARK_CRC_ALGO = MARK_CRC_HEX - 4
			var ext_crc_algo_indicator = current_work_str.substring(MARK_CRC_ALGO, MARK_CRC_HEX) // -4 because i know 4 char after the hex is the crc id they use
			//this result in 6304 with mean they using crc id 63 also known as CRC16_CCITT_FALSE
			//and 04 is the indicator that after this algo idicator there will be 4 more card to get related to crc result

			let MARK_EPOCH = MARK_CRC_ALGO - 10 //because epoch len is 10 char
			var ext_epoch = current_work_str.substring(MARK_EPOCH, MARK_CRC_ALGO) //this is the time that generate the QR, this make QR unique even everything else is the same

			console.log(ext_epoch)
		}
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