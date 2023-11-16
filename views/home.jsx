const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/steak.jpg" alt="Steak and Chips" 
          width="500px"
          height="300px"
          />
          <div>
            Photo by <a href="https://unsplash.com/@covertnine">Tim Toomey</a> on{" "}
            <a href="https://unsplash.com">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
      <link rel="stylesheet" href="/css/style.css" />
    </Def>
  );
}

module.exports = home;
