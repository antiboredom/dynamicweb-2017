var MongoClient = require('mongodb').MongoClient;

var trumps;

function getTrumps() {
  trumps.find({evilFactor: 6}).toArray(function(err, results){
    console.log(results);
  });
}

function getOneTrump(name) {
  trumps.findOne({name: name}, function(err, result){
    console.log(name + ' has an evil factor of ' + result.evilFactor);
  });
}

function insertTrump(name, evilFactor) {
  var theTrumpToInsert = {
    name: name,
    evilFactor: evilFactor
  };

  trumps.insert(theTrumpToInsert);
}

function startup(err, database) {

  if (err) return console.log(err);
  trumps = database.collection('trumps');
  
  getOneTrump('Baron');
  //getTrumps();
  // insertTrump("The Donald", 17);
  // insertTrump("Invanka", 6);
  // insertTrump("Baron", 3);

}

MongoClient.connect('mongodb://sam:samsamsam@ds015478.mlab.com:15478/justatest', startup)

