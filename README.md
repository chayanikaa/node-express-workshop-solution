# Westeros Beast Ledger 🐉

Welcome Maester Nodeon, you have inherited this ledger from your predecessor.

Complete the following tasks to turn this ledger into a wealth of information for all of Westeros.

Ahem, we're going to turn a little technical now.

1. Serve all the files in the `public` directory on the '/' path of your app. This exposes a frontend that makes requests to the app.
2. Create a `GET /api/animals` to get all the records. The data can be found in `data/animals.json`
    - Checkout the / route in your browser!
3. Add support for query parameter `species` in the created endpoint. Return an array of records that match the type.
    - Checkout the `Dragons` and `Dire wolves` pages!
4. Checkout the `Register a Beast` page. Create a handler for `POST /api/animals`. Save this information back to `data/animals.json`.

Finished? How about some additional challenges? 😁

5. Add support for saving the image file in the `public/data/images` directory.
   1. Send file data with the form from the frontend by adding `enctype` to the form.

   ```html
    <form action="/api/beasts" method="post" id="register-form"  enctype="multipart/form-data">
   ```

6. Implement a `PUT /api/animals/:id` endpoint to replace the details of a beast.
7. Implement `DELETE /api/animals/:id` endpoint to delete a beast from the ledger.

