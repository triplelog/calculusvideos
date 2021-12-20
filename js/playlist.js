var playlist = [];
var cp = [];
var playlistInfo = {'save':true};
function addToPlaylist(id){
	if (!id){return;}
	playlist.push(id);
	cp.push(playlistInfo[id]);
	var temp = document.getElementById("playlistItem");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('[name=item]').setAttribute('data-id',id);
	clone.querySelector('[name=title]').textContent = playlistInfo[id].title;
	clone.querySelector('[name=source]').textContent = playlistInfo[id].source[playlistInfo[id].source.length-1];
	document.getElementById('playlist').appendChild(clone);
	var rendered = Mustache.render(template, { playlist: cp });
	console.log(rendered);
}
var template = `<div>
{{#playlist}}
<b>{{title}}</b>
{{/playlist}}</div>`;
//var rendered = Mustache.render(template, { playlist: cp });
//console.log(rendered);

var templateEl = document.getElementById("templateTA");
templateEl.addEventListener('input',updateTemplate);

function updateTemplate(){
	template = templateEl.value;
	try {
		var rendered = Mustache.render(template, { playlist: cp });
		//DOM-purify
		document.getElementById('playlist').innerHTML = rendered;
	}
	catch {
		return;
	}
	
}