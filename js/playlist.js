var playlist = [];
var cp = [];
var playlistInfo = {'save':true};
var renderedPlaylist = "";
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
var template = '';

var defaultTemplates = {};
defaultTemplates['markdown'] = `{{#playlist}}
[{{title}}]({{url}})<br />
{{/playlist}}`;
defaultTemplates['divs'] = `<div>
{{#playlist}}
<div><a href="{{url}}">{{title}}</a></div>
{{/playlist}}</div>`;
defaultTemplates['list'] = `<ul>
{{#playlist}}
<li><a href="{{url}}">{{title}}</a></li>
{{/playlist}}</ul>`;

var templateEl = document.getElementById("templateTA");
var mdEl = document.getElementById("renderMD");
mdEl.addEventListener('change',updateTemplate);
var rawOutput = document.getElementById("rawOutput");

templateEl.value = defaultTemplates['list'];
templateEl.addEventListener('input',updateTemplate);

function updateTemplate(){
	template = templateEl.value;
	try {
		var rendered = Mustache.render(template, { playlist: cp });
		var clean = "";
		if (mdEl.checked){
			var mdhtml = snarkdown(rendered);
			clean = DOMPurify.sanitize(mdhtml );
			renderedPlaylist = rendered;
		}
		else {
			clean = DOMPurify.sanitize(rendered );
			renderedPlaylist = clean;
		}
		//DOM-purify
		document.getElementById('playlist').innerHTML = clean;
		rawTippy.setContent("<textarea id='rawCopy' class='text-black' rows='10' cols='30'>"+renderedPlaylist+"</textarea>");
	}
	catch {
		return;
	}
	
}

function chgDefault(){
	var dtval = dt.value;
	console.log(dtval);
	templateEl.value = defaultTemplates[dtval];
	updateTemplate();
}
var dt = document.getElementById('defaultTemplate');
dt.addEventListener('change',chgDefault)

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


var cn = "<textarea id='rawCopy' class='text-black' rows='10' cols='30'></textarea>";

var rawTippy = tippy(rawOutput, {
  content: cn,
  allowHTML: true,
  trigger: 'click',
  hideOnClick: 'toggle',
  interactive: true,
});

function copyPlaylist(){
	var content = document.getElementById('rawCopy');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
    rawTippy.hide();
    btnTippy.hide();
}
var btc = "<button onclick='copyPlaylist()' class='border border-white p-2 bg-gray-600 hover:bg-gray-700'>Copy to clipboard</button>";

var btnTippy = tippy(rawOutput, {
  content: btc,
  allowHTML: true,
  placement: 'bottom',
  trigger: 'click',
  hideOnClick: 'toggle',
  interactive: true,
});


