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
	updateTemplate();
	
	var div = document.createElement('div');
	div.textContent = id;
	document.getElementById('playlistSmall').appendChild(div);
}
var template = `<div>
{{#playlist}}
<b>{{title}}</b>
{{/playlist}}</div>`;
//var rendered = Mustache.render(template, { playlist: cp });
//console.log(rendered);

var templateEl = document.getElementById("templateTA");
templateEl.value = template;
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

function maxPlaylist(){
	document.getElementById('pone').classList.add("w-full");
	document.getElementById('pone').classList.remove("w-1/3");
	document.getElementById('pone').classList.remove("w-1/12");
	document.getElementById('sthree').classList.add("hidden");
	document.getElementById('sthree').classList.remove("w-2/3");
	document.getElementById('sthree').classList.remove("w-11/12");
	document.getElementById('templateDiv').classList.remove("hidden");
	document.getElementById('playlist').classList.remove("hidden");
	document.getElementById('playlistSmall').classList.add("hidden");
}
function minPlaylist(){
	document.getElementById('pone').classList.remove("w-full");
	document.getElementById('pone').classList.add("w-1/3");
	document.getElementById('pone').classList.remove("w-1/12");
	document.getElementById('sthree').classList.remove("hidden");
	document.getElementById('sthree').classList.add("w-2/3");
	document.getElementById('sthree').classList.remove("w-11/12");
	document.getElementById('templateDiv').classList.remove("hidden");
	document.getElementById('playlist').classList.remove("hidden");
	document.getElementById('playlistSmall').classList.add("hidden");
}
function hidePlaylist(){
	document.getElementById('pone').classList.remove("w-full");
	document.getElementById('pone').classList.remove("w-1/3");
	document.getElementById('pone').classList.add("w-1/12");
	document.getElementById('sthree').classList.remove("hidden");
	document.getElementById('sthree').classList.remove("w-2/3");
	document.getElementById('sthree').classList.add("w-11/12");
	document.getElementById('templateDiv').classList.add("hidden");
	document.getElementById('playlist').classList.add("hidden");
	document.getElementById('playlistSmall').classList.remove("hidden");
}



