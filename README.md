# 🌍 Wanderlust — Phase 1

An Airbnb-inspired travel listing web app built with **Node.js, Express, MongoDB, EJS, and Bootstrap 5**.

---

## ✨ Phase 1 Features

- Responsive Bootstrap 5 UI with Airbnb-style card grid
- Category filter pills (Beach, Mountains, Cities, Islands, Ski, Cabins)
- Flash messages — success and error alerts on all actions
- Server-side form validation with Joi
- Star ratings & reviews on each listing (add + delete)
- 30 sample listings with USD pricing ($100–$400/night)
- 404 custom page
- Clean footer with copyright

---

## 🗂️ Project Structure

```
wanderlust/
├── app.js                  Main Express app & all routes
├── middleware.js           Joi validation middleware
├── package.json
├── .gitignore
├── models/
│   └── listing.js          Mongoose schema (with reviews + category)
├── views/listings/
│   ├── index.ejs           All listings — card grid with filters
│   ├── show.ejs            Listing detail + reviews
│   ├── new.ejs             Create listing form
│   ├── edit.ejs            Edit listing form
│   └── 404.ejs             Custom 404 page
├── public/css/
│   └── style.css           Custom styles (Bootstrap companion)
└── init/
    ├── data.js             30 sample listings ($100–$400/night)
    └── index.js            Seed script
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- MongoDB running locally on port 27017

### Install & Run

```bash
npm install
npm run seed      # load 30 sample listings (first time)
npm start         # visit http://localhost:8080
# or
npm run dev       # with auto-reload via nodemon
```

---

## 🛣️ Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/listings` | All listings (filter by `?category=Beach` etc.) |
| GET | `/listings/new` | New listing form |
| POST | `/listings` | Create listing |
| GET | `/listings/:id` | Listing detail + reviews |
| GET | `/listings/:id/edit` | Edit form |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |
| POST | `/listings/:id/reviews` | Add review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review |

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Templates | EJS |
| UI | Bootstrap 5.3 |
| Validation | Joi |
| Flash messages | connect-flash + express-session |
| Dev tool | nodemon |

---

## 👤 Author

**Mandeep Sharma** | © 2025 Wanderlust. All rights reserved.
