const express = require("express");

const ExperienceController = require("../controllers/ExperienceController");

const router = express.Router();

router.post("/", ExperienceController.addExperience);
router.get("/:experienceId", ExperienceController.getOneExperience);
router.get("/", ExperienceController.getAllExperiences);
router.delete("/:experienceId", ExperienceController.deleteExperience);
router.put("/:experienceId", ExperienceController.updateExperience);

module.exports = router;