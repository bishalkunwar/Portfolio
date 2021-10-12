const express = require("express");
const cors = require("cors"); //Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.
const educationRoutes = require("./routes/EducationRoutes");
const experienceRoutes = require("./routes/ExperienceRoutes");
const languageRoutes = require("./routes/LanguageRoutes");
const projectRoutes = require("./routes/ProjectRoutes");
const skillRoutes = require("./routes/SkillRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const userRoutes = require("./routes/UserRoutes");


const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/educations", educationRoutes);
app.use("/experiences", experienceRoutes);
app.use("/languages", languageRoutes);
app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);
app.use("/messages", messageRoutes);
app.use("/users", userRoutes);
app.use("/uploads", express.static("uploads"));



app.get('/', function(req, res) {
    res.send('Hello World! this is check, running fine then nice');
});

app.listen(process.env.PORT, () =>
    console.log(`server is running in port ${process.env.PORT}`)
);


mongoose.connect(process.env.DATA_BASE_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("connected to db"))
    .catch((err) => console.error(err));