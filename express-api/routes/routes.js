const users = [
  {
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
  },
  {
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
  },
];

const router = (appObj) => {
    appObj.get("/users", (request, response) => {
      console.log(`GET recived: ${request.url}`);
        response.send(users);
    });

    appObj.get("/users/:id", (request, response) => {
        console.log(request.params)
        const id2find = request.params.id;

        response.send(users.find(el => {
            return el.id == id2find;
        }));
    });

    appObj.post("/users", (request, response) => {
        console.log(request);
        const newID = users.length+1
        users.push({id: newID, name:request.body.name, email:request.body.email});
        response.status(201).send(`User added with ID: ${newID}`);
    });


    // default router
    appObj.get("*", (request, response) => {
      response.send("Node express demo REST API example");
    });
};

// Export the router
module.exports = router;
