var container = ['"Be yourself; everyone else is already taken.― Oscar Wilde"' , '"So many books, so little time."', '“A room without books is like a body without a soul.”― Marcus Tullius Cicero', '“You only live once, but if you do it right, once is enough.”― Mae West'];
var output1;
var output2;
function cap() {
    output2 = container.pop(0);
    output1 = document.getElementById('head').innerHTML = output2;
}
