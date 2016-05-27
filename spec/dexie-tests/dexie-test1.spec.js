
var Dexie = require('dexie');

describe("dexie-tests", function() {

  it("should create and query a Dexie instance", function(done) {
      var db = new Dexie("uppa");
      db.version(1).stores({foo: 'bar'});
      console.log("Opening database");
      return db.open().then(()=>{
          console.log("Database opened");
          return db.transaction('rw', db.foo, ()=>{
            db.foo.add({bar: 1});
            db.foo.add({bar: 2});
            return db.foo.toArray().then(foos => {
                // Just doing something async in the transaction
               return {response: foos}; 
            });
        }).then(x => {
            console.log("Got back: " + JSON.stringify(x));
            expect(x.response.length).toEqual(2);
            return x.response.length + 3;
        });
      }).then(x => {
          expect(x).toEqual(5);
      }).catch(e => {
          fail(e);
      }).then(()=>{
          return db.delete();
      }).finally(()=>{
          done();
      });
  });

});
