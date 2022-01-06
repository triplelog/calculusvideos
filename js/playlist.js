var cpids = {};
var cp = [];
var playlistInfo = {'save':true};
var renderedPlaylist = "";
var templateEl = document.getElementById("templateTA");
var mdEl = document.getElementById("renderMD");
mdEl.addEventListener('change',updateTemplate);
var rawOutput = document.getElementById("rawOutput");

var savedData = {'ids':{},'playlist':[],'template':'','markdown':false};

function loadPlaylist(){
	cpids = savedData.ids;
	cp = savedData.playlist;
	template = savedData.template;
	if (savedData.markdown){
		mdEl.checked = true;
	}
	else {
		mdEl.checked = false;
	}
	updateTemplate();
}
function removeFromPlaylist(id){
	if (!id){return;}
	var idx = cpids[id];
	if (cpids[id] || cpids[id] === 0){
		var idx = cpids[id];
		cp.splice(idx,1);
		var idlist = [];
		for (var i in cpids){
			if (cpids[i] > idx){
				cpids[i]--;
			}
			if (i != id){
				idlist.push([cpids[i],i]);
			}
		}
		delete cpids[id];
		chgSearch();
		updateTemplate();
		idlist.sort((a,b) => {return a[0] - b[0];})
		document.getElementById('playlistSmall').innerHTML = "";
		for (var i=0;i<idlist.length;i++){
			var div = document.createElement('div');
			div.textContent = idlist[i][1];
			document.getElementById('playlistSmall').appendChild(div);
		}
		
	}
}
function addToPlaylist(id){
	if (!id){return;}
	cpids[id]=cp.length;
	chgSearch();
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
		rawTippy.setContent("<textarea id='rawCopy' class='text-black' rows='10' cols='40'>"+renderedPlaylist+"</textarea>");
		savedData.playlist = cp.slice();
		savedData.template = template;
		savedData.markdown = mdEl.checked;
		savedData.ids = cpids;
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

var saveLoad = document.getElementById("saveLoad");
var slc = "<div class='mb-2'>Save to browser. Enter a string of text that you can remember for loading later.</div><div class='mb-2'>Save: <input id='saveName' type='text' class='text-black' /></div><div class='mb-2'>Load: <input id='loadName' type='text' class='text-black' /></div><button onclick='submitSL()' class='border border-white px-2'>Submit</button>";
var slTippy = tippy(saveLoad, {
  content: slc,
  allowHTML: true,
  placement: 'top',
  trigger: 'click',
  hideOnClick: 'toggle',
  interactive: true,
});

function submitSL(){
	var saveName = document.getElementById("saveName").value;
	var loadName = document.getElementById("loadName").value;
	if (saveName.length > 0 && loadName.length > 0){
		alert("Please only enter a save name or a load name.");
		return;
	}
	else if (saveName.length > 0){
		window.localStorage.setItem(saveName,JSON.stringify(savedData));
	}
	else if (loadName.length > 0){
		var sd = window.localStorage.getItem(loadName);
		if (sd){
			var dm = JSON.parse(sd);
			if (dm && dm.ids && dm.playlist && dm.template){
				savedData = dm;
				loadPlaylist();
			}
			else {
				alert("That name did not work.");
				return;
			}
		}
		else {
			alert("That name did not work.");
			return;
		}
	}
	else {
		alert("Please enter save name or a load name.");
	}
	slTippy.hide();
}
