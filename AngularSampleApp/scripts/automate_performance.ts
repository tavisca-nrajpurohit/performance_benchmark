var compo = require('./component_instances.js');
var fs= require('fs');
//var path= require('path');

function automateTest() {
    //console.log("checkkk", compo);
    for(var comp in compo) {
        let data = fs.readFileSync('scripts/test_markup.html');
        let file_content = data.toString();
        file_content = file_content.replace("[Placeholder for markup]", compo[comp]);
        fs.writeFile('dist/audit-'+comp+'.html', file_content, (err) => { 
      
            // In case of a error throw err. 
            if (err) throw err; 
        })
    }
}

automateTest();