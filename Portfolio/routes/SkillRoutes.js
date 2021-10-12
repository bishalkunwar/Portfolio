const express = require("express");

const SkillController = require("../controllers/SkillController");

const router = express.Router();

router.post("/", SkillController.addSkill);
router.get("/:skillId", SkillController.getOneSkill);
router.get("/", SkillController.getAllSkills);
router.delete("/:skillId", SkillController.deleteSkill);
router.put("/:skillId", SkillController.updateSkill);

module.exports = router;