const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6">
            <img
              src={data.place.pic}
              alt={data.place.name}
              width="300px"
              height="300px"
            />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rated</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <h2>Comments</h2>
          <p>no comments yet!</p>
        </div>
        <br />
        <br />
        <div className="row">
          <a
            className="col-sm-1 edit-button btn-warning"
            href={`/places/${data.id}/edit`}
          >
            Edit
          </a>
          <form
            method="POST"
            action={`/places/${data.id}?_method=DELETE`}
            className="col-sm-1 delete-form"
          >
            <button type="submit" className="btn btn-danger delete-button">
              Delete
            </button>
          </form>
        </div>
        <br />
      </main>
    </Def>
  );
}

module.exports = show;
