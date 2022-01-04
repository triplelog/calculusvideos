var topics = {'Precalculus': 'Precalculus', 'Algebra': 'Precalculus', 'Quadratic Equation': 'Precalculus', 'Quadratic Formula': 'Precalculus', 'Complete the Square': 'Precalculus', 'Coefficient': 'Precalculus', 'Infinity': 'Precalculus', 'Root': 'Precalculus', 'Factoring': 'Precalculus', 'Vectors': 'Precalculus', 'Scalar': 'Precalculus', 'Velocity': 'Precalculus', 'Acceleration': 'Precalculus', 'Dot Product': 'Precalculus', 'Normal Vector': 'Precalculus', 'Cross Product': 'Precalculus', 'Functions': 'Precalculus', 'Linear Functions': 'Precalculus', 'Polynomials': 'Precalculus', 'Rational Functions': 'Precalculus', 'Composition of Functions': 'Precalculus', 'Piecewise Functions': 'Precalculus', 'Asymptote': 'Precalculus', 'Domain': 'Precalculus', 'Range': 'Precalculus', 'Inverse Function': 'Precalculus', 'Function Shifts': 'Precalculus', 'Function Transformation': 'Precalculus', 'Exponents and Logarithms': 'Precalculus', 'Properties of Exponents': 'Precalculus', 'Exponential Function': 'Precalculus', 'Properties of Logarithms': 'Precalculus', 'Natural Logarithm': 'Precalculus', "Euler's Number": 'Precalculus', 'Complex Numbers': 'Precalculus', 'Complex Conjugate': 'Precalculus', 'Complex Plane': 'Precalculus', 'Imaginary Numbers': 'Precalculus', 'Square Root of Negative One': 'Precalculus', 'Polar Coordinates': 'Precalculus', 'Geometry': 'Precalculus', 'Area': 'Precalculus', 'Volume': 'Precalculus', 'Perimeter': 'Precalculus', 'Surface Area': 'Precalculus', 'Trigonometry': 'Precalculus', 'Cosine': 'Precalculus', 'Sine': 'Precalculus', 'Tangent': 'Precalculus', 'Cotangent': 'Precalculus', 'Secant': 'Precalculus', 'Cosecant': 'Precalculus', 'Basic Trig Functions': 'Precalculus', 'Law of Sines': 'Precalculus', 'Law of Cosines': 'Precalculus', 'Pythagorean Theorem': 'Precalculus', 'Trigonometric Identities': 'Precalculus', 'Conic Sections': 'Precalculus', 'Ellipse': 'Precalculus', 'Hyperbola': 'Precalculus', 'Parabola': 'Precalculus', 'Locus': 'Precalculus', 'Calculus I': 'Calculus I', 'Limits': 'Calculus I', "L'Hospital's Rule": 'Calculus I', 'Instantaneous Rate of Change': 'Calculus I', 'Indeterminate Form': 'Calculus I', 'Squeeze Theorem': 'Calculus I', 'Epsilon Delta Definition of Limit': 'Calculus I', 'Derivatives': 'Calculus I', 'Limit Definition of Derivative': 'Calculus I', 'Differentiation': 'Calculus I', 'Sum Rule': 'Calculus I', 'Power Rule': 'Calculus I', 'Product Rule': 'Calculus I', 'Quotient Rule': 'Calculus I', 'Chain Rule': 'Calculus I', 'Logarithmic Differentiation': 'Calculus I', 'Derivatives of Logarithms': 'Calculus I', 'Exponential Derivatives': 'Calculus I', 'Trigonometric Derivatives': 'Calculus I', 'Implicit Differentiation': 'Calculus I', 'Second Derivative': 'Calculus I', 'Maximums and Minimums': 'Calculus I', 'Critical Point': 'Calculus I', 'Inflection Point': 'Calculus I', 'Global Maximum': 'Calculus I', 'Global Minimum': 'Calculus I', 'Local Maximum': 'Calculus I', 'Local Minimum': 'Calculus I', 'Critical Number': 'Calculus I', 'Critical Value': 'Calculus I', 'Relative Maximum': 'Calculus I', 'Relative Minimum': 'Calculus I', 'Absolute Maximum': 'Calculus I', 'Absolute Minimum': 'Calculus I', 'First Derivative Test': 'Calculus I', 'Second Derivative Test': 'Calculus I', 'Concavity': 'Calculus I', 'Derivative Applications': 'Calculus I', 'Related Rates': 'Calculus I', 'Marginal Cost': 'Calculus I', 'Optimization': 'Calculus I', 'Profit Maximization': 'Calculus I', 'Exponential Growth': 'Calculus I', 'Logistic Growth': 'Calculus I', 'Maximize Area': 'Calculus I', 'Tangent Line': 'Calculus I', "Newton's Method": 'Calculus I', 'Continuity': 'Calculus I', 'Continuous Function': 'Calculus I', 'Discontinuity': 'Calculus I', 'Intermediate Value Theorem': 'Calculus I', 'Increasing Function': 'Calculus I', 'Decreasing Function': 'Calculus I', 'Extreme Value Theorem': 'Calculus I', 'Mean Value Theorem': 'Calculus I', "Rolle's Theorem": 'Calculus I', 'Integrals': 'Calculus I', 'Antiderivative': 'Calculus I', 'Definite Integrals': 'Calculus I', 'Fundamental Theorem of Calculus': 'Calculus I', 'Riemann Sum': 'Calculus I', 'Indefinite Integrals': 'Calculus I', 'Calculus II': 'Calculus II', 'Partial Fractions': 'Calculus II', 'Integration by Parts': 'Calculus II', 'Integration by Substitution': 'Calculus II', 'Trigonometric Substitution': 'Calculus II', 'Convergent Series': 'Calculus II', 'Radius of Convergence': 'Calculus II', 'Taylor Series': 'Calculus II', 'MacLaurin Series': 'Calculus II', 'Harmonic Series': 'Calculus II', 'Surface of Revolution': 'Calculus II', 'Volume of Revolution': 'Calculus II', 'Arc Length': 'Calculus II', 'Power Series': 'Calculus II', 'Improper Integrals': 'Calculus II', 'Differential Equations (Calc 2)': 'Calculus II', 'Multivariable Calculus': 'Multivariable Calculus', 'Jacobian': 'Multivariable Calculus', "Green's Theorem": 'Multivariable Calculus', "Stokes' Theorem": 'Multivariable Calculus', 'Hessian Matrix': 'Multivariable Calculus', 'Partial Derivatives': 'Multivariable Calculus', 'Partial Derivative Applications': 'Multivariable Calculus', 'Tangent Vector': 'Multivariable Calculus', 'Vector Field': 'Multivariable Calculus', 'Saddle Point': 'Multivariable Calculus', 'Gradient': 'Multivariable Calculus', 'Line Integral': 'Multivariable Calculus', 'Double Integral': 'Multivariable Calculus', 'Triple Integral': 'Multivariable Calculus', 'Directional Derivative': 'Multivariable Calculus', 'Lagrange Multiplier': 'Multivariable Calculus', 'Differential Equations': 'Differential Equations', 'Bessel Function of the First Kind': 'Differential Equations', 'Euler Forward Method': 'Differential Equations', 'Fourier Transform': 'Differential Equations', 'Laplace Transform': 'Differential Equations', 'Ordinary Differential Equation': 'Differential Equations', 'Partial Differential Equation': 'Differential Equations', 'Second Order Ordinary Differential Equation': 'Differential Equations', 'Separation of Variables': 'Differential Equations', 'Slope Field': 'Differential Equations'};
var bigSources = ["The Organic Chemistry Tutor","3Blue1Brown","Professor Leonard","Eddie Woo","MySecretMathTutor","Professor Dave Explains","Khan Academy","MIT OpenCourseWare","The Math Sorcerer","Krista King","NancyPi","patrickJMT","blackpenredpen","Dr. Trefor Bazett","The Algebros","Mario's Math Tutoring","Houston Math Prep","Mathispower4u","Brian McLogan","Maths Genie","Math Meeting","Radford Mathematics","Tutorials Point (India) Ltd.","Michel van Biezen","ProfRobBob","Anil Kumar","Jake's Math Lessons","K.O. MATH","Glass of Numbers","Cole's World of Mathematics","Eric Hutchinson","rootmath","Ms Shaws Math Class","Brightstorm","Steve Crow","Economics in Many Lessons"];
var topicList = [];
for (var t in topics){
	topicList.push(t);
}

var awp = new Awesomplete('#filterValue', {
	filter: function(text, input) {
		return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
	},

	item: function(text, input) {
		return Awesomplete.ITEM(text, input.match(/[^,]*$/)[0]);
	},

	replace: function(text) {
		var before = this.input.value.match(/^.+,\s*|/)[0];
		this.input.value = before + text + ", ";
	},
	
	list: ["Precalculus","Calculus I","Calculus II",'Multivariable Calculus','Differential Equations'],
	
	minChars: 2,
	
	autoFirst: true
});
var fkEl = document.getElementById('filterKey');


fkEl.addEventListener('change',chgFK);
function chgFK(){
	var fc = document.getElementById("filterComp");
	document.getElementById('filterValue').value = "";
	if (fkEl.value == "classes"){
		awp.list = ["Precalculus","Calculus I","Calculus II",'Multivariable Calculus','Differential Equations'];
		fc.querySelector('option[value=eq]').removeAttribute('disabled');
		fc.querySelector('option[value=neq]').removeAttribute('disabled');
		fc.querySelector('option[value=leq]').disabled = true;
		fc.querySelector('option[value=geq]').disabled = true;
		if (fc.value == "leq" || fc.value == "geq"){
			fc.value = "eq";
		}
	}
	else if (fkEl.value == "topics"){
		awp.list = topicList;
		fc.querySelector('option[value=eq]').removeAttribute('disabled');
		fc.querySelector('option[value=neq]').removeAttribute('disabled');
		fc.querySelector('option[value=leq]').disabled = true;
		fc.querySelector('option[value=geq]').disabled = true;
		if (fc.value == "leq" || fc.value == "geq"){
			fc.value = "eq";
		}
	}
	else if (fkEl.value == "source"){
		awp.list = bigSources;
		fc.querySelector('option[value=eq]').removeAttribute('disabled');
		fc.querySelector('option[value=neq]').removeAttribute('disabled');
		fc.querySelector('option[value=leq]').disabled = true;
		fc.querySelector('option[value=geq]').disabled = true;
		if (fc.value == "leq" || fc.value == "geq"){
			fc.value = "eq";
		}
	}
	else if (fkEl.value == "length"){
		awp.list = [];
		fc.querySelector('option[value=eq]').disabled = true;
		fc.querySelector('option[value=neq]').disabled = true;
		fc.querySelector('option[value=leq]').removeAttribute('disabled');
		fc.querySelector('option[value=geq]').removeAttribute('disabled');
		if (fc.value == "eq" || fc.value == "neq"){
			fc.value = "leq";
		}
	}
	else if (fkEl.value == "type"){
		awp.list = ['Tutorial','Lecture','Problem(s)','Tips','Context'];
		fc.querySelector('option[value=eq]').removeAttribute('disabled');
		fc.querySelector('option[value=neq]').removeAttribute('disabled');
		fc.querySelector('option[value=leq]').disabled = true;
		fc.querySelector('option[value=geq]').disabled = true;
		if (fc.value == "leq" || fc.value == "geq"){
			fc.value = "eq";
		}
	}
	else if (fkEl.value == "caption"){
		awp.list = ['True','False'];
		fc.querySelector('option[value=eq]').removeAttribute('disabled');
		fc.querySelector('option[value=neq]').removeAttribute('disabled');
		fc.querySelector('option[value=leq]').disabled = true;
		fc.querySelector('option[value=geq]').disabled = true;
		if (fc.value == "leq" || fc.value == "geq"){
			fc.value = "eq";
		}
	}
}
var filters = [];
function addFilter(){
	var key = fkEl.value;
	var comp = document.getElementById("filterComp").value;
	var val = document.getElementById("filterValue").value;
	if (val.length == 0){
		return;
	}
	var filterArr = [];
	var filterStr = "";
	if (key == "topics"){
		filterStr += "Topic ";
		if (comp == "neq"){
			filterStr += "!= ";
		}
		else {
			filterStr += "= ";
		}
		var vals = val.split(",");
		for (var i=0;i<vals.length;i++){
			var v = vals[i].trim();
			if (v.length > 0){
				if (comp == "neq"){
					filterArr.push('topics != "'+v+'"');
				}
				else {
					filterArr.push('topics = "'+v+'"');
				}
				filterStr += v+" or ";
				
			}
		}
		if (filterStr.substr(filterStr.length-4) == " or "){
			filterStr = filterStr.substr(0,filterStr.length-4);
		}
	}
	else if (key == "classes"){
		filterStr += "Class ";
		if (comp == "neq"){
			filterStr += "!= ";
		}
		else {
			filterStr += "= ";
		}
		var vals = val.split(",");
		for (var i=0;i<vals.length;i++){
			var v = vals[i].trim();
			if (v.length > 0){
				if (comp == "neq"){
					filterArr.push('classes != "'+v+'"');
				}
				else {
					filterArr.push('classes = "'+v+'"');
				}
				filterStr += v+" or ";
			}
		}
		if (filterStr.substr(filterStr.length-4) == " or "){
			filterStr = filterStr.substr(0,filterStr.length-4);
		}
	}
	else if (key == "type"){
		filterStr += "Type ";
		if (comp == "neq"){
			filterStr += "!= ";
		}
		else {
			filterStr += "= ";
		}
		var vals = val.split(",");
		for (var i=0;i<vals.length;i++){
			var v = vals[i].trim();
			if (v.length > 0){
				if (comp == "neq"){
					filterArr.push('type != "'+v+'"');
				}
				else {
					filterArr.push('type = "'+v+'"');
				}
				filterStr += v+" or ";
			}
		}
		if (filterStr.substr(filterStr.length-4) == " or "){
			filterStr = filterStr.substr(0,filterStr.length-4);
		}
	}
	else if (key == "source"){
		filterStr += "Source ";
		if (comp == "neq"){
			filterStr += "!= ";
		}
		else {
			filterStr += "= ";
		}
		var vals = val.split(",");
		for (var i=0;i<vals.length;i++){
			var v = vals[i].trim();
			if (v.length > 0){
				if (comp == "neq"){
					filterArr.push('source != "'+v+'"');
				}
				else {
					filterArr.push('source = "'+v+'"');
				}
				filterStr += v+" or ";
			}
		}
		if (filterStr.substr(filterStr.length-4) == " or "){
			filterStr = filterStr.substr(0,filterStr.length-4);
		}
	}
	else if (key == "caption"){
		filterStr += "Caption ";
		if (comp == "neq"){
			filterStr += "!= ";
		}
		else {
			filterStr += "= ";
		}
		var vals = val.split(",");
		for (var i=0;i<vals.length;i++){
			var v = vals[i].trim();
			if (v.length > 0){
				if (comp == "neq"){
					filterArr.push('caption != "'+v+'"');
				}
				else {
					filterArr.push('caption = "'+v+'"');
				}
				filterStr += v+" or ";
			}
		}
		if (filterStr.substr(filterStr.length-4) == " or "){
			filterStr = filterStr.substr(0,filterStr.length-4);
		}
	}
	else if (key == "length"){
		filterStr += "Length ";
		if (comp == "neq"){
			filterStr += "!= ";
		}
		else if (comp == "eq"){
			filterStr += "= ";
		}
		else if (comp == "leq"){
			filterStr += "<= ";
		}
		else if (comp == "geq"){
			filterStr += ">= ";
		}
		
		var v = parseFloat(val);
		if (isNaN(v)){
			v = 1
		}
		else if (v < 1){
			v = 1;
		}
		else if (v >1000){
			v = 1000;
		}
		//var vstr = "PT"+Math.round(v)+"M0S";
		
		if (comp == "neq"){
			filterArr.push('length != '+(v*60)+'');
		}
		else if (comp == "eq"){
			filterArr.push('length == '+(v*60)+'');
		}
		else if (comp == "leq"){
			filterArr.push('length <= '+(v*60)+'');
		}
		else if (comp == "geq"){
			filterArr.push('length >= '+(v*60)+'');
		}
		filterStr += v+" min";
		
	}
	filters.push(filterArr);
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}
function removeFilter(evt){
	var parent = evt.target.parentNode;
	var id = parseInt(parent.getAttribute('data-id'));
	filters.splice(id,1);
	console.log(filters);
	parent.parentNode.removeChild(parent);
	var fel = document.getElementById("filters");
	var els = fel.querySelectorAll('[name=filter]');
	for (var i=0;i<els.length;i++){
		var did = parseInt(els[i].getAttribute('data-id'));
		if (did >= id){
			els[i].setAttribute('data-id',did-1);
		}
	}
	chgSearch();
}
function shFilters(){
	var fel = document.getElementById("filters");
	var hel = document.getElementById("hideF");
	if (fel.style.display == "none"){
		fel.style.display = "block";
		hel.textContent = "Hide";
	}
	else {
		fel.style.display = "none";
		hel.textContent = "Show";
	}
}

const client = new MeiliSearch({
	host: 'https://search.calculusvideos.com:7700',
	apiKey: '8a241d6dbb3b100aa0e45dea65afd69d510db7d9ec252f944ce25cd2f01db346'
})

var searchEl = document.getElementById('search');
var browseEl = document.getElementById('browse');
var resultsEl = document.getElementById('results');
searchEl.addEventListener('input',chgSearch);
searchEl.addEventListener('keydown',chgSearch);

var tout = false;

function chgSearch(){
	if (tout){
		
	}
	else {
		tout = setTimeout(() => {
			tout = false;
			/*for (var i=0;i<250;i++){
				var rt = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
				sendSearch(rt);
			}*/
			sendSearch();
		}, 30)
	}
}

var rpp = 20;
function sendSearch(term="",limit=rpp){
	if (term == ""){
		term = searchEl.value;
	}
	if (filters.length > 0){
		client.index('videos').search(term, {
			filter: filters,
			limit: rpp,
			offset: limit-rpp
		}).then((res) => gotResult(res));
	}
	else {
		//console.log(Date.now());
		client.index('videos').search(term, {
			limit: rpp,
			offset: limit-rpp
		}).then((res) => gotResult(res));
	}
	currentLimit = limit;
}
var currentLimit = rpp;
function moreResults(){
	currentLimit += rpp;
	sendSearch("",currentLimit);
}
var sourceCount = {};
function gotResult(res){

	if (!res){
		return;
	}
	browseEl.style.display = "none";
	resultsEl.style.display = "block";
	if (currentLimit == rpp){
		//clear results
		while (resultsEl.firstChild) {
			resultsEl.removeChild(resultsEl.firstChild);
		}
		sourceCount = {};
    }
    else {
    	//just remove the load more results element
    	resultsEl.removeChild(resultsEl.lastChild);
    }

	var hits = res.hits;
	if (hits.length > 0){
		for (var i=0;i<hits.length;i++){
			hits[i].rank = i*4 - parseFloat(hits[i].value);
			
		}
		hits.sort((a,b) => { return a.rank - b.rank});
		for (var i=0;i<hits.length;i++){
			if (sourceCount[hits[i].source[0]]){
				
				hits[i].rank = i + 1.8*Math.pow(sourceCount[hits[i].source[0]],1.5);
				sourceCount[hits[i].source[0]]++;
				
			}
			else {
				hits[i].rank = i;
				sourceCount[hits[i].source[0]]=1;
			}
			//hitToHTML(hits[i]);
			
		}
	}
	hits.sort((a,b) => { return a.rank - b.rank});
	if (hits.length > 0){
		for (var i=0;i<hits.length;i++){
			hitToHTML(hits[i]);
		}
		if (hits.length < rpp){
			//add no more results
			var div = document.createElement("div");
			div.classList.add("w-full");
			div.classList.add("bg-gray-200");
			div.classList.add("mb-8");
			div.textContent = "No more results. Relax a filter, pick a more general search phrase, or settle for one of the above.";
			resultsEl.appendChild(div);
		}
		else {
			var div = document.createElement("div");
			div.classList.add("w-full");
			div.classList.add("bg-gray-200");
			div.classList.add("p-2");
			div.classList.add("mb-8");
			var button = document.createElement('button');
			button.classList.add("border");
			button.classList.add("border-black");
			button.classList.add("bg-yellow-100");
			button.classList.add("mr-4");
			button.classList.add("px-2");
			button.textContent = "Load More Results";
			button.addEventListener('click',moreResults);
			div.appendChild(button);
			var span = document.createElement("span");
			span.textContent = "Have you tried filtering results?";
			div.appendChild(span);
			resultsEl.appendChild(div);
		}
	}
	else {
		var div = document.createElement("div");
		div.classList.add("w-full");
		div.classList.add("bg-gray-200");
		div.classList.add("mb-8");
		div.textContent = "No results found. Relax a filter or pick a more general search phrase.";
		resultsEl.appendChild(div);
	}
	
	
}

function toggleTD(evt){
	var target = evt.target;
	if (target){
		var parent = target.parentNode;
		if (parent){
			parent.classList.toggle('overflowDescription');
		}
	}
}
function toggleTDS(evt){
	var target = evt.target;
	if (target){
		var parent = target.parentNode;
		if (parent){
			var el = parent.parentNode;
			el.classList.toggle('overflowDescription');
		}
	}
}
function requireSource(topic){
	var filter = ['source = "'+topic+'"'];
	filters.push(filter);
	var filterStr = "Source = "+topic;
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}
function excludeSource(topic){
	var filter = ['source != "'+topic+'"'];
	filters.push(filter);
	var filterStr = "Source != "+topic;
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}
function requireClass(topic){
	var filter = ['classes = "'+topic+'"'];
	filters.push(filter);
	var filterStr = "Class = "+topic;
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}
function excludeClass(topic){
	var filter = ['classes != "'+topic+'"'];
	filters.push(filter);
	var filterStr = "Class != "+topic;
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}
function requireTopic(topic){
	var filter = ['topics = "'+topic+'"'];
	filters.push(filter);
	var filterStr = "Topic = "+topic;
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}
function excludeTopic(topic){
	var filter = ['topics != "'+topic+'"'];
	filters.push(filter);
	var filterStr = "Topic != "+topic;
	var temp = document.getElementById("filter");
	var clone = temp.content.cloneNode(true);
	clone.querySelector('span').textContent = filterStr;
	clone.querySelector('[name=filter]').setAttribute('data-id',filters.length-1);
	clone.querySelector('button').addEventListener('click',removeFilter);
	document.getElementById('filters').appendChild(clone);
	chgSearch();
}

var savedHits = {};
function hitToHTML(hit){
	/*if (savedHits[hit.id]){
		var clone = savedHits[hit.id].firstElementChild;
		savedHits[hit.id] = savedHits[hit.id].cloneNode(true);
		resultsEl.appendChild(clone);
		return;
	}*/
	var temp = document.getElementById("result");
	var clone = temp.content.cloneNode(true);
	clone.querySelectorAll("a[name=link]").forEach( el => el.setAttribute('href',hit.url));
	clone.querySelector("*[name=title]").textContent = hit.title;
	
	var sourceLink = "";
	var sourceText = "";
	if (hit.source.length > 2){
		if (hit.source[1] == "Youtube"){
			clone.querySelector("*[name=source] > span").textContent = hit.source[2];
			sourceText = hit.source[2];
			sourceLink = hit.source[0];
			
		}
		else {
			clone.querySelector("*[name=source] > span").textContent = hit.source[1];
			sourceText = hit.source[1];
			sourceLink = hit.source[0];
		}
	}
	else if (hit.source.length > 1){
		
		clone.querySelector("*[name=source] > span").textContent = hit.source[1];
		sourceText = hit.source[1];
		sourceLink = hit.source[0];
		
	}
	var cn = '<a class="titleLink bg-white p-1" href="'+sourceLink+'">Visit Source</a><br /><button class="border border-white p-1 mt-1" onclick="requireSource(\''+sourceText+'\');">Only this Source</button><br /><button class="border border-white p-1 mt-1" onclick="excludeSource(\''+sourceText+'\')">Exclude this Source</button>';

	tippy(clone.querySelector("*[name=source] > span"), {
	  content: cn,
	  allowHTML: true,
	  trigger: 'click',
	  hideOnClick: 'toggle',
	  interactive: true,
	});
			
			
	clone.querySelector("*[name=desClick]").addEventListener('click',toggleTD);
	clone.querySelector("*[name=description]").addEventListener('click',toggleTDS);
	clone.querySelector("*[name=description]").textContent = hit.description;
	clone.querySelector("img[name=thumb]").setAttribute('src',"./thumbs/"+hit.id+".jpg");
	if (hit.length){
		var s = parseInt(hit.length);
		if (isNaN(s) || s < 1){
			s = 0;
		}
		var m = Math.floor(s/60);
		var s = s%60;
		if (s < 10){s = "0"+s;}
		if (m >= 60){
			var h = Math.floor(m/60);
			m = m%60;
			if (m < 10){m = "0"+m;}
			clone.querySelector("*[name=length]").textContent = h+":"+m+":"+s;
		}
		else {
			clone.querySelector("*[name=length]").textContent = m+":"+s;
		}
		
	}
	if (hit.caption && hit.caption == "true"){
		clone.querySelector("*[name=cap]").textContent = "Y";
	}
	if (hit.classes){
		
		var div = clone.querySelector("*[name=class]");
		for (var i=0;i<hit.classes.length;i++){
			var span = document.createElement("span");
			span.textContent = hit.classes[i];
			span.classList.add('cursor-pointer');
			if (i < hit.classes.length-1){
				span.textContent += ", ";
			}
			var cn = '<button class="border border-white p-1" onclick="requireClass(\''+hit.classes[i]+'\');">Require this Class</button><br /><button class="border border-white p-1 mt-1" onclick="excludeClass(\''+hit.classes[i]+'\')">Exclude this Class</button>';

			tippy(span, {
			  content: cn,
			  allowHTML: true,
			  trigger: 'click',
			  hideOnClick: 'toggle',
			  interactive: true,
			});
			div.appendChild(span);
		}
	}
	if (hit.topics){
		var div = clone.querySelector("*[name=topics]");
		for (var i=0;i<hit.topics.length;i++){
			var span = document.createElement("span");
			span.textContent = hit.topics[i];
			span.classList.add('cursor-pointer');
			if (i < hit.topics.length-1){
				span.textContent += ", ";
			}
			var cn = '<button class="border border-white p-1" onclick="requireTopic(\''+hit.topics[i]+'\');">Require this Topic</button><br /><button class="border border-white p-1 mt-1" onclick="excludeTopic(\''+hit.topics[i]+'\')">Exclude this Topic</button>';

			tippy(span, {
			  content: cn,
			  allowHTML: true,
			  trigger: 'click',
			  hideOnClick: 'toggle',
			  interactive: true,
			});
			div.appendChild(span);
		}
		//div.innerHTML += hit.views +", "+hit.likes+", "+hit.comments+", "+hit.value;
	}
	
	
	
	clone.querySelector("*[name=mid]").textContent = hit.id;
	clone.querySelector("*[name=mid]").setAttribute("onclick","addToPlaylist('"+hit.id+"')");
	//clone.querySelector("*[name=score]").textContent = Math.round(hit.value*100);
	
	//savedHits[hit.id] = clone.cloneNode(true);
	if (playlistInfo && playlistInfo['save']){
		playlistInfo[hit.id]=hit;
	}
	resultsEl.appendChild(clone);
	
	
}