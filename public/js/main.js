var size = 4;
var min = 0;
var max = size - 1;
var isMoved = false;
var score = 0;
var excludeIds = [];


function getRandom() {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getId() {
    var i = getRandom();
    var j = getRandom();
    return i + "" + j;
}

function load() {
    //alert("load");
    //Load the table
    var html = '<table border="1">';
    for(var row=0;row<size;row++) {
        html += '<tr>';
        for(var col=0;col<size;col++) {
            var id = row+""+col;
            html += '<td align="center" valign="center" height="40" width="40" id="'+id+'"></td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    //alert(html);
    document.getElementById('scoreLine').style.display = 'inline';
    document.getElementById("canvas").innerHTML = html;
    document.getElementById("action").value = 'Reload';
    var id1 = getId();
    var id2 = "";
    while(true) {
        id2 = getId();
        if(id1 != id2)
        break;
    }
    //Set initial 2 values
    document.getElementById(id1).innerHTML = "2";
    document.getElementById(id2).innerHTML = "2";

    document.getElementById(id1).style.backgroundColor = getColor(2);
    document.getElementById(id2).style.backgroundColor = getColor(2);
    
    score = 0;
    document.getElementById("score").innerHTML = score;

    return false;
}

function up() {
    isMoved = false;
    excludeIds = [];
    for (var j = min; j <= max; j++) {
        for (var i = min; i <= max; i++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML != "") {
                moveUp(id);
            }
        }
    }
    if (isMoved == true) {
        update();
    }
    return false;
}
function moveUp(id) {
    if (!id.startsWith(min)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (i - 1); k >= min; k--) {
            var nId = k + "" + j;
            if (document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById((k + 1) + "" + j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val == nVal) {
                    if (excludeIds.indexOf(nId) == -1) {
                        excludeIds.push(nId);
                        document.getElementById(nId).innerHTML = (val + nVal);
                        document.getElementById(nId).style.backgroundColor = getColor((val + nVal));
                        document.getElementById((k + 1) + "" + j).innerHTML = "";
                        document.getElementById((k + 1) + "" + j).style.backgroundColor = "#ffffff";
                        isMoved = true;
                        score += (val + nVal);
                    }
                    break;
                }
            }
            else {
                document.getElementById(nId).innerHTML = document.getElementById((k + 1) + "" + j).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById((k + 1) + "" + j).style.backgroundColor;
                document.getElementById((k + 1) + "" + j).innerHTML = "";
                document.getElementById((k + 1) + "" + j).style.backgroundColor = "#ffffff";
                isMoved = true;
            }
        }
    }
    return false;
}
function left() {
    isMoved = false;
    excludeIds = [];
    for (var i = min; i <= max; i++) {
        for (var j = min; j <= max; j++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML != "") {
                moveLeft(id);
            }
        }
    }
    if (isMoved == true) {
        update();
    }
    return false;
}
function moveLeft(id) {
    if (!id.endsWith(min)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (j - 1); k >= min; k--) {
            var nId = i + "" + k;
            if (document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById(i + "" + (k + 1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val == nVal) {
                    if (excludeIds.indexOf(nId) == -1) {
                        excludeIds.push(nId);
                        document.getElementById(nId).innerHTML = (val + nVal);
                        document.getElementById(nId).style.backgroundColor = getColor((val + nVal));
                        document.getElementById(i + "" + (k + 1)).innerHTML = "";
                        document.getElementById(i + "" + (k + 1)).style.backgroundColor = "#ffffff";
                        isMoved = true;
                        score += (val + nVal);
                    }
                    break;
                }
            }
            else {
                document.getElementById(nId).innerHTML = document.getElementById(i + "" + (k + 1)).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById(i + "" + (k + 1)).style.backgroundColor;
                document.getElementById(i + "" + (k + 1)).innerHTML = "";
                document.getElementById(i + "" + (k + 1)).style.backgroundColor = "#ffffff";
                isMoved = true;
            }
        }
    }
    return false;
}
function down() {
    isMoved = false;
    excludeIds = [];
    for (var i = min; i <= max; i++) {
        for (var j = max; j >= min; j--) {
            var id = j + "" + i;
            if (document.getElementById(id).innerHTML != "") {
                moveDown(id);
            }
        }
    }
    if (isMoved == true) {
        update();
    }
    return false;
}
function moveDown(id) {
    if (!id.startsWith(max)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (i + 1); k <= max; k++) {
            var nId = k + "" + j;
            if (document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById((k - 1) + "" + j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val == nVal) {
                    if (excludeIds.indexOf(nId) == -1) {
                        excludeIds.push(nId);
                        document.getElementById(nId).innerHTML = (val + nVal);
                        document.getElementById(nId).style.backgroundColor = getColor((val + nVal));
                        document.getElementById((k - 1) + "" + j).innerHTML = "";
                        document.getElementById((k - 1) + "" + j).style.backgroundColor = "#ffffff";
                        isMoved = true;
                        score += (val + nVal);
                    }
                    break;
                }
            }
            else {
                document.getElementById(nId).innerHTML = document.getElementById((k - 1) + "" + j).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById((k - 1) + "" + j).style.backgroundColor;
                document.getElementById((k - 1) + "" + j).innerHTML = "";
                document.getElementById((k - 1) + "" + j).style.backgroundColor = "#ffffff";
                isMoved = true;
            }
        }
    }
    return false;
}
function right() {
    isMoved = false;
    excludeIds = [];
    for (var i = min; i <= max; i++) {
        for (var j = max; j >= min; j--) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML != "") {
                moveRight(id);
            }
        }
    }
    if (isMoved == true) {
        update();
    }
    return false;
}
function moveRight(id) {
    if (!id.endsWith(max)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (j + 1); k <= max; k++) {
            var nId = i + "" + k;
            if (document.getElementById(nId).innerHTML != "") {
                var val = parseInt(document.getElementById(i + "" + (k - 1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val == nVal) {
                    if (excludeIds.indexOf(nId) == -1) {
                        excludeIds.push(nId);
                        document.getElementById(nId).innerHTML = (val + nVal);
                        document.getElementById(nId).style.backgroundColor = getColor((val + nVal));
                        document.getElementById(i + "" + (k - 1)).innerHTML = "";
                        document.getElementById(i + "" + (k - 1)).style.backgroundColor = "#ffffff";
                        isMoved = true;
                        score += (val + nVal);
                    }
                    break;
                }
            }
            else {
                document.getElementById(nId).innerHTML = document.getElementById(i + "" + (k - 1)).innerHTML;
                document.getElementById(nId).style.backgroundColor = document.getElementById(i + "" + (k - 1)).style.backgroundColor;
                document.getElementById(i + "" + (k - 1)).innerHTML = "";
                document.getElementById(i + "" + (k - 1)).style.backgroundColor = "#ffffff";
                isMoved = true;
            }
        }
    }
    return false;
}
function update() {		
    //Add new value
    var ids = [];
    for(var i=min;i<=max;i++) {
        for(var j=min;j<=max;j++) {
            var id = i+""+j;
            if(document.getElementById(id).innerHTML == "") {
                ids.push(id);
            }
        }
    }
    var id = ids[Math.floor(Math.random()*ids.length)];
    document.getElementById(id).innerHTML = "2";
    document.getElementById(id).style.backgroundColor = getColor(2);

    //Check if no move space available
    var allFilled = true;
    for(var i=min;i<=max;i++) {
        for(var j=min;j<=max;j++) {
            var id = i+""+j;
            if(document.getElementById(id).innerHTML == "") {
                allFilled = false;
                break;
            }
        }
    }		
    //Update score
    document.getElementById("score").innerHTML = score;
    if(allFilled) {
        checkGameOver();
    }
}

function checkGameOver() {
    var isOver = true;
    for(var j=min;j<=max;j++) {
        for(var i=min;i<=(max-1);i++) {
            //alert(i+" "+j);
            var val = parseInt(document.getElementById(i+""+j).innerHTML);
            var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
            if(val == nVal) {
                isOver = false;
                break;
            }
        }
    }		
    if(isOver == true) {
        for(var i=min;i<=max;i++) {
            for(var j=min;j<=(max-1);j++) {
                //alert(i+" "+j);
                var val = parseInt(document.getElementById(i+""+j).innerHTML);
                var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
                if(val == nVal) {
                    isOver = false;
                    break;
                }
            }
        }
    }
    if(isOver) {
        alert("Game over!");
    }
    return false;
}

function getColor(val)
	{
		var color = "#ffffff";
		switch(val) {
			case 2:		color = "#F6CED8"; break;
			case 4:		color = "#F7BE81"; break;
			case 8:		color = "#F3F781"; break;
			case 16:	color = "#BEF781"; break;
			case 32:	color = "#81F7D8"; break;
			case 64:	color = "#58D3F7"; break;
			case 128:	color = "#FA58F4"; break;
			case 256:	color = "#A901DB"; break;
			case 512:	color = "#01DF3A"; break;
			case 1024:	color = "#D7DF01"; break;
			case 2048:	color = "#D7DF01"; break;
			default:	color = "#ffffff";
		}
		return color;
	}
	if ( typeof String.prototype.startsWith != 'function' ) {
	  String.prototype.startsWith = function( str ) {
		return this.substring( 0, str.length ) === str;
	  }
	};
	if ( typeof String.prototype.endsWith != 'function' ) {
	  String.prototype.endsWith = function( str ) {
		return this.substring( this.length - str.length, this.length ) === str;
	  }
	};
	document.onkeydown = function(e) {
		e.preventDefault();//to prevent scroll of screen
		switch (e.keyCode) {
			case 49:
            case 37:    
				left();
				break;
			case 51:
            case 38:   
				up();
				break;
			case 50:
            case 39:    
				right();
				break;
			case 52:
            case 40:   
				down();
				break;
		}
	};
	//calling load method
	// load();

