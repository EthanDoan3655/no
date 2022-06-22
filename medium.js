const fs = require('fs');

fs.readFile('/Users/ethandoan/node_gi/planets.txt','utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});