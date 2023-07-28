require("dotenv").config();
const axios = require("axios");

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;
const config = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  },
};

const createRecord = async (data) => {
  return await axios.post(AIRTABLE_API_URL, { fields: data }, config);
};

const readRecords = async () => {
  return await axios.get(AIRTABLE_API_URL, config);
};

// Similarly, you can add functions for updating and deleting records.

module.exports = {
  createRecord,
  readRecords,
};
