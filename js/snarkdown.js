var e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function n(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function r(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}module.exports=function t(a,o){var c,l,s,g,p,u=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,m=[],h="",i=o||{},d=0;function $(n){var r=e[n[1]||""],t=m[m.length-1]==n;return r?r[1]?(t?m.pop():m.push(n),r[0|t]):r[0]:n}function f(){for(var e="";m.length;)e+=$(m[m.length-1]);return e}for(a=a.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,n,r){return i[n.toLowerCase()]=r,""}).replace(/^\n+|\n+$/g,"");s=u.exec(a);)l=a.substring(d,s.index),d=u.lastIndex,c=s[0],l.match(/[^\\](\\\\)*\\$/)||((p=s[3]||s[4])?c='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+n(r(p).replace(/^\n+|\n+$/g,""))+"</code></pre>":(p=s[6])?(p.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),g=t(n(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==p?p="blockquote":(p=p.match(/\./)?"ol":"ul",g=g.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),c="<"+p+">"+g+"</"+p+">"):s[8]?c='<img src="'+r(s[8])+'" alt="'+r(s[7])+'">':s[10]?(h=h.replace("<a>",'<a href="'+r(s[11]||i[l.toLowerCase()])+'">'),c=f()+"</a>"):s[9]?c="<a>":s[12]||s[14]?c="<"+(p="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+t(s[12]||s[15],i)+"</"+p+">":s[16]?c="<code>"+r(s[16])+"</code>":(s[17]||s[1])&&(c=$(s[17]||"--"))),h+=l,h+=c;return(h+a.substring(d)+f()).replace(/^\n+|\n+$/g,"")};
//# sourceMappingURL=snarkdown.js.map