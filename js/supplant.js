(function () {
	if(typeof String.prototype.supplant !== 'function'){
		String.prototype.supplant = function(o) {
			return this.replace(/{([^{}]*)}/g,
				function(a,b) {
					var r = o[b];
					return typeof r === 'string' ? r : a;
				}
			)
		}
	}

	var template = '<table border="{border}">' +
		'<tr><th>Last</th><td>{last}</td></tr>' +
		'<tr><th>First</th><td>{first}</td></tr>' +
		'</table';

	var data = {
		first: "Kylerik",
		last: "Kittenger",
		border: "2"
	};

	var supplantDiv = document.getElementById("supplant");
	supplantDiv.innerHTML = template.supplant(data);
})();