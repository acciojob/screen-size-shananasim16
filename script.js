function getSize() {
			var w = document.documentElement.clientWidth;
			var h = document.documentElement.clientHeight;
			document.getElementById('sizeInfo').innerHTML = "<h1>Width: " + w + " and Height: " + h + "</h1>";
		}