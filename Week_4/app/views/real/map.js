function(doc) {
 if (doc._id.substr(0,4) !== 'pip:'){
		emit([doc._id, doc._rev], {
    	"name": doc.name,
    	"call": doc.call,
    	"sale": doc.sale,
    	"qaType": doc.qaType,
    	"score": doc.score,
    	"pip": doc.pip,
    	"notes": doc.notes,
    });	
  }
};