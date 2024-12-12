```javascript
//Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("6531234567890")},{$inc:{field:1}});

//Alternative: Explicit type conversion for safety
let value = "10"; // Example of a string value
let numericValue = parseInt(value);

db.collection.updateOne({"_id":ObjectId("6531234567890")},{$inc:{field:numericValue}});
```