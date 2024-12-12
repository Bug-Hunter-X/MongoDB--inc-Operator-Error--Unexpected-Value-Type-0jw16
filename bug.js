```javascript
//Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("6531234567890")},{$inc:{field:value}});
```