
function fnCaptureFingerData() {
	
	Init();


	setTimeout(function() {
		
		CaptureSingle(function(response) {

			if(response.retValue == 0) {
				
				alert(response.retValue);

				GetImageBuffer();

				UnInit();

			} else {
				
				alert('Fingerprint scanning failed');

				UnInit();
			}

		});

	}, 500);

	// setTimeout(function() {

	// 	CaptureSingle();
			
	// 	GetImageBuffer();

	// 	UnInit();

	// }, 500);

}
