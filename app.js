const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

const Listing = require("./models/listing.js");
const { validateListing } = require("./middleware.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// ── Database connection ────────────────────────────────────────────────────
main()
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => { console.error("MongoDB error:", err); process.exit(1); });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// ── App configuration ──────────────────────────────────────────────────────
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ── Session & Flash ────────────────────────────────────────────────────────
app.use(session({
  secret: "wanderlust-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
}));
app.use(flash());

// ── Pass flash messages to all views ──────────────────────────────────────
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ── Root route ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// ── Index Route ────────────────────────────────────────────────────────────
app.get("/listings", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== "All" ? { category } : {};
    const allListings = await Listing.find(filter);
    res.render("listings/index.ejs", { allListings, activeCategory: category || "All" });
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not fetch listings.");
    res.redirect("/");
  }
});

// ── New Route ──────────────────────────────────────────────────────────────
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// ── Show Route ─────────────────────────────────────────────────────────────
app.get("/listings/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not find that listing.");
    res.redirect("/listings");
  }
});

// ── Create Route ───────────────────────────────────────────────────────────
app.post("/listings", validateListing, async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not create listing.");
    res.redirect("/listings/new");
  }
});

// ── Edit Route ─────────────────────────────────────────────────────────────
app.get("/listings/:id/edit", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not load edit form.");
    res.redirect("/listings");
  }
});

// ── Update Route ───────────────────────────────────────────────────────────
app.put("/listings/:id", validateListing, async (req, res) => {
  try {
    await Listing.findByIdAndUpdate(
      req.params.id,
      { ...req.body.listing },
      { new: true, runValidators: true }
    );
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not update listing.");
    res.redirect(`/listings/${req.params.id}/edit`);
  }
});

// ── Delete Route ───────────────────────────────────────────────────────────
app.delete("/listings/:id", async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted.");
    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not delete listing.");
    res.redirect("/listings");
  }
});

// ── Review: Add ────────────────────────────────────────────────────────────
app.post("/listings/:id/reviews", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/listings");
    }
    const { rating, comment } = req.body.review;
    if (!rating || rating < 1 || rating > 5) {
      req.flash("error", "Please provide a valid rating between 1 and 5.");
      return res.redirect(`/listings/${req.params.id}`);
    }
    listing.reviews.push({ rating: Number(rating), comment });
    await listing.save();
    req.flash("success", "Review added!");
    res.redirect(`/listings/${req.params.id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not add review.");
    res.redirect(`/listings/${req.params.id}`);
  }
});

// ── Review: Delete ─────────────────────────────────────────────────────────
app.delete("/listings/:id/reviews/:reviewId", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    listing.reviews = listing.reviews.filter(
      (r) => r._id.toString() !== req.params.reviewId
    );
    await listing.save();
    req.flash("success", "Review deleted.");
    res.redirect(`/listings/${req.params.id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not delete review.");
    res.redirect(`/listings/${req.params.id}`);
  }
});

// ── 404 Handler ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render("listings/404.ejs");
});

// ── Start server ───────────────────────────────────────────────────────────
app.listen(8080, () => {
  console.log("Wanderlust server running at http://localhost:8080");
});
