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
    console.log(request.body);
    console.log(request.params);
    const id2find = request.params.id;

    response.send(
      users.find((el) => {
        return el.id == id2find;
      })
    );
  });

  appObj.post("/users", (request, response) => {
    console.log(`POST recived: ${request.url}`);
    console.log(request.body);
    const newID = users.length + 1;
    users.push({
      id: newID,
      name: request.body.name,
      email: request.body.email,
    });
    response.status(201).send(`User added with ID: ${newID}`);
  });

  appObj.put("/users/:id", (request, response) => {
    console.log(`PUT recived: ${request.url}`);
    console.log(request.body);
    console.log(request.params);
    const idIndex = (element) => element.id == request.params.id;
    const index = users.findIndex(idIndex);
    if (index < 0) {
      response
        .status(501)
        .send(`User with ID: ${request.params.id} didn't excist`);
      return;
    }

    console.log(`Index in array: ${index}`);
    users[index] = {
      id: parseInt(request.params.id),
      name: request.body.name,
      email: request.body.email,
    };
    console.log(users);
    response.status(201).send(`User with ID: ${request.params.id} updated`);
  });

  appObj.delete("/users/:id", (request, response) => {
    console.log(`DELETE recived: ${request.url}`);
    console.log(request.body);
    console.log(request.params);
    const idIndex = (element) => element.id == request.params.id;
    const index = users.findIndex(idIndex);
    if (index < 0) {
      response
        .status(501)
        .send(`User with ID: ${request.params.id} didn't excist`);
      return;
    }
    users.splice(index, 1);
    response.status(201).send(`User with ID: ${request.params.id} deleted`);
  });

  // default router
  appObj.get("*", (request, response) => {
    response.send("Node express demo REST API example");
  });
};

// Export the router
module.exports = router;
