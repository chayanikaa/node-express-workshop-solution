# Westeros Beast Ledger

Welcome Maester _________, you have inherited this ledger from your predecessor.

Complete the following tasks to turn this ledger into a wealth of information for all of Westeros.

Ahem, we're going to turn a little technical now.

1. Serve all the files in the public directory on the '/' path of your app. This exposes a frontend that makes requests to the app.
2. Create a `GET /api/animals` to get all the records. The data can be found in data/animals.json.

- Checkout the / route in your browser!
- Something missing? Hint- some more files may be needed to exposed as static.

3. Checkout the `Register an Animal` page. What request does it send? Create a handler for `POST /api/animals`. Save this information back to animals.json.
4. Implement a `PUT /api/animals/:id` endpoint to replace the details of a beast.
5. Implement `DELETE /api/animals/:id` endpoint to delete a beast from the ledger.

