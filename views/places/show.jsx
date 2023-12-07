const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars;
      }, 0);
      let averageRating = Math.round(sumRatings / data.place.comments.length);
      let stars = "";
      for (let i = 0; i < averageRating; i++) {
        stars += "â­ï¸";
      }
      rating = <h3>{stars} stars</h3>;
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
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
            {rating}
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
          {comments}
        </div>

        {/*This is the form for the comments  */}
        <form action={`/places/${props.place.id}/comment`} method="POST">
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="starRating">Star Rating</label>
            <input
              type="number"
              id="starRating"
              name="starRating"
              step="0.5"
              className="form-control"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              id="rant"
              name="rant"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="rant">
              Rant
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
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
