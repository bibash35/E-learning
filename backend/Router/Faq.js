const { postFAQ, getAllFAQs, deleteFAQ, updateFAQ } = require("../Controllers/FaqController");
const express = require("express");

const router = express.Router();

router.post("/create-faq", postFAQ);

router.get("/getfaqs", getAllFAQs);

router.delete('/delete-faqs/:id', deleteFAQ);

router.put('/update-faqs/:id', updateFAQ);



module.exports = { router };
