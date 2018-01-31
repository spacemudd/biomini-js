# Suprema Integeration

# Modify jQuery's AJAX request

 - We need to add `jQuery.support.cors = true;` before calling `jQuery.ajax`.
 - Add `contentType: "application/json; charset=utf-8",` and `crossDomain: true,` to the object of ajax.


 E.g:

		 function Init(callbackResponse) {
				jQuery.support.cors = true;

				jQuery.ajax({
					contentType: "application/json; charset=utf-8",
					crossDomain: true,
					type : "GET",
					url : urlStr + "/api/initDevice?dummy=" + Math.random(),
					dataType : "json",
					success : function(msg) {
						AppendLog("Init", msg.retString);
						if(msg.retValue == 0) {
							deviceInfos = msg.ScannerInfos;
							AddScannerList(deviceInfos);
		                    CheckStatusLoop();
						}
					},
					error : function(request, status, error) {
						Toast(JSON.stringify(request), gToastTimeout);
						Toast(JSON.stringify(status), gToastTimeout);
						Toast(JSON.stringify(error), gToastTimeout);
					}
				});
			}
