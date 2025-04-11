import Sample from "../MODELS/sample.js";

import express from "express";

export const addSample = async (req, res) => {
  try {
    const { name, age, email, hobbies } = req.body;
    const data = new Sample({
      name,
      age,
      email,
      hobbies,
    });
    data.save();
    return res.status(200).json({
      message: "Data saved successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
