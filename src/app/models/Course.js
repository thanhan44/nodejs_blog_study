const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    title: { type: String },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    videoId: { type: String, maxLength: 255 },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
