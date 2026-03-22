const Joi = require("joi");

// ── Listing validation schema ──────────────────────────────────────────────
const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required().messages({
      "string.empty": "Title is required.",
      "any.required": "Title is required.",
    }),
    description: Joi.string().allow("", null),
    price: Joi.number().min(0).required().messages({
      "number.base": "Price must be a number.",
      "number.min": "Price must be at least $0.",
      "any.required": "Price is required.",
    }),
    location: Joi.string().allow("", null),
    country: Joi.string().allow("", null),
    category: Joi.string()
      .valid("Beach", "Mountains", "Cities", "Islands", "Ski", "Cabins", "Other")
      .default("Other"),
    image: Joi.object({
      url: Joi.string().uri().allow("", null),
      filename: Joi.string().allow("", null),
    }),
  }).required(),
});

// ── Middleware: validate listing before create/update ──────────────────────
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((d) => d.message).join(", ");
    req.flash("error", messages);
    return res.redirect("back");
  }
  next();
};

module.exports = { validateListing };
