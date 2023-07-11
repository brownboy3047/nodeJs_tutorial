const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }

  if (req.url === "/about") {
    res.end("This is the about page");
    return;
  }

  if (req.url === "/blog") {
    res.end("this is the blog page");
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seems to find the page ypu are looking for</p>
    <a href="/" >Go bak home</a>
  `);

  //setup return
  //if /else if / else
});

server.listen(5000);
