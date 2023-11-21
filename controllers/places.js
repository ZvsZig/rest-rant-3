const router = require("express").Router();
const places = require("../models/places.js");

// GET /places
router.get("/", (req, res) => {
    res.render("places/index", { places });
});

router.get("/new", (req, res) => {
    res.render("places/new");
});

router.get("/:id", (req, res) => {
    //GET '/places/:id' Details about a particular page
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("error404");
    } else if (!places[id]) {
        res.render("error404");
    } else {
        res.render("places/show", { place: places[id], id });
    }
});

router.post("/", (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        req.body.state = "USA";
    }
    places.push(req.body);
    res.redirect("/places");
});

//UPDATE
router.put(`/:id`, (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("error404");
    } else if (!places[id]) {
        res.render("error404");
    } else {
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = "http://placekitten.com/400/400";
        }
        if (!req.body.city) {
            req.body.city = "Anytown";
        }
        if (!req.body.state) {
            req.body.state = "USA";
        }
        //save the new data into places[id]
        places[id] = req.body;
        res.redirect(`/places/${id}`);
    }
});

router.delete("/:id", (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("error404");
    } else if (!places[id]) {
        res.render("error404");
    } else {
        places.splice(id, 1);
        res.redirect("/places");
    }
});

router.get("/:id/edit", (req, res) => {
    let id = Number(req.params.id);
    console.log(id);

    if (isNaN(id)) {
        res.render("error404");
    } else if (!places[id]) {
        res.render("error404");
    } else {
        res.render("places/edit", {
            place: places[req.params.id],
            index: req.params.id,
        });
    }
});

module.exports = router;