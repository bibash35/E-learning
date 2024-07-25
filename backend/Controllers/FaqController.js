const FAQ = require("../models/FAQ");

const postFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' });
    }

    const faq = await FAQ.create({
      question,
      answer,
    });

    res.status(201).json(faq);
  } catch (err) {
  }
};

const getAllFAQs = async (req, res) => {
    try {
      const faqs = await FAQ.find({});
      res.status(200).json(faqs);
    } catch (err) {
    }
  };
  const deleteFAQ = async (req, res) => {
    try {
      const { id } = req.params;
  
      const faq = await FAQ.findByIdAndDelete(id);
  
      if (!faq) {
        return res.status(404).json({ error: 'FAQ not found' });
      }
  
      res.status(200).json({ message: 'FAQ deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete FAQ' });
    }
  };
  
  const updateFAQ = async (req, res) => {
    try {
      const { id } = req.params;
      const { question, answer } = req.body;
  
      if (!question || !answer) {
        return res.status(400).json({ error: 'Question and answer are required' });
      }
  
      const faq = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
  
      if (!faq) {
        return res.status(404).json({ error: 'FAQ not found' });
      }
  
      res.status(200).json(faq);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update FAQ' });
    }
  };
  
  module.exports = {
    postFAQ,
    getAllFAQs,
    deleteFAQ,
    updateFAQ,
  };
