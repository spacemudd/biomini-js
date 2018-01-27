Solution #1

# Adding `contentType:"application/json; charset=utf-8",` to AJAX call

Without:
SCRIPT7002: XMLHttpRequest: Network Error 0x2f78, Could not complete the operation due to error 00002f78.
1
DOM7011: The code on this page disabled back and forward caching. For more information, see: http://go.microsoft.com/fwlink/?LinkID=291337
1
HTML1300: Navigation occurred.
1


With:

SCRIPT7002: XMLHttpRequest: Network Error 0x2f78, Could not complete the operation due to error 00002f78.
1
DOM7011: The code on this page disabled back and forward caching. For more information, see: http://go.microsoft.com/fwlink/?LinkID=291337
1
HTML1300: Navigation occurred.
1
SEC7123: Request header content-type was not present in the Access-Control-Allow-Headers list.
1
SCRIPT7002: XMLHttpRequest: Network Error 0x80070005, Access is denied.

1
SEC7123: Request header content-type was not present in the Access-Control-Allow-Headers list.
1
SCRIPT7002: XMLHttpRequest: Network Error 0x80070005, Access is denied.

1
SCRIPT5007: Unable to get property 'retString' of undefined or null reference
BiominiWebAgent.js (73,5)
