const express = require("express");

const LanguageController = require("../controllers/LanguageController");

const router = express.Router();

router.post("/", LanguageController.addLanguage);
router.get("/:languageId", LanguageController.getOneLanguage);
router.get("/", LanguageController.getAllLanguages);
router.delete("/:languageId", LanguageController.deleteLanguage);
router.put("/:languageId", LanguageController.updateLanguage);

module.exports = router;