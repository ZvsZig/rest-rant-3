const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img
            src="/images/cute-boy.jpg"
            alt="We are sorry"
            width="500px"
            height="700px"
          />
        </div>
        <link rel="stylesheet" href="/css/style.css" />
      </main>
    </Def>
  );
}

module.exports = error404;
