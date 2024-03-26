const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3001;

// JSON Server setup
const server = jsonServer.create();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === "PATCH" || req.method === "PUT") {
    req.body.updatedAt = Date.now();
  }
  next();
});

server.get("/teacher", (req, res, next) =>{
  const id = req.query.id;
  if(id){
    let teacherData = router.db.get("teacher").find({ id: parseInt(id) }).value()
    return res.json(teacherData);
  }
  let data = router.db.get("teacher").value();
  return res.json(data);
})

server.get("/courses", (req, res, next) => {
  const page = parseInt(req.query._page) || 1;
  const perPage = parseInt(req.query._per_page) || 10;

  let data = router.db.get("courses").value();

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const startIdx = (page - 1) * perPage;
  const endIdx = startIdx + perPage;

  const paginatedData = data.slice(startIdx, endIdx);


  const firstPage = 1;
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;
  const lastPage = totalPages;

  res.json({
    first: firstPage,
    prev: prevPage,
    next: nextPage,
    last: lastPage,
    pages: totalPages,
    items: totalItems,
    data: paginatedData
  });
});

server.get("/teacher", (red, res, next) => {
  let data = router.db.get("teacher").value();
  return res.json(data);
});

server.get("/search/courses", (req, res, next) => {
  const queryParams = req.query;
  let data = router.db.get("courses").value();
  
  if (Object.keys(queryParams).length > 0) {
    data = data.filter(course => {
      return Object.entries(queryParams).every(([key, value]) => {
        if (Array.isArray(value)) {
          return value.some(item => course[key].toLowerCase().includes(item.toLowerCase()));
        } else { 
          return course[key].toLowerCase().includes(value.toLowerCase());
        }
      });
    });
  }

  res.json(data);
});


server.listen(port, () => {
  console.log(`Ecommerce website listening on http://localhost:${port}`);
});
