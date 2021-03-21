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
        response.send(users);
    });

    appObj.get("/users/:id", (request, response) => {
        console.log(request.params)
        const id2find = request.params.id;

        response.send(users.find(el => {
            return el.id == id2find;
        }));
    });


    // default router
    appObj.get("*", (request, response) => {
      response.send("Node express demo REST API example");
    });
};

// Export the router
module.exports = router;
