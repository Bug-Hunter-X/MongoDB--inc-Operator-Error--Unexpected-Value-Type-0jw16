# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error arises from providing an incorrect value type to the `$inc` operator, leading to unexpected behaviors. 

## Bug Description
The `$inc` operator is used to increment or decrement a numerical field in a document.  The provided value must be a number (integer or double); providing a string or an expression that doesn't resolve to a number will result in an error or incorrect data update.  

## Bug Reproduction Steps
1. Ensure you have a MongoDB instance running.
2. Create a collection. 
3. Insert a document with a numerical field.
4. Try to update the document using the `$inc` operator with a non-numeric value. 

## Solution
The solution involves ensuring that the value provided to the `$inc` operator is always a number.  This may involve type checking or explicitly converting the provided value to a number before applying the update.