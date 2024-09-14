const express = require("express");
const { Listing } = require("../models/listingmodel");

const createlisting = async (req, res) => {
  const data = req.body;
  try {
    if (data) {
      const checkname = await Listing.findOne({ name: data.name });
      if (checkname) {
        console.log("List already exsit with same name");
        res.status(403).json({ succcess: false, msg: "Already exist" });
      } else {
        const newlist = new Listing({
          name: data.name,
          description: data.description, 
          address: data.address,
          regularPrice: data.regularPrice,
          bedrooms: data.bedrooms,
          furnished: data.furnished,
          type: data.type,
          offer: data.offer,
          imageurls: data.imageurls,
          userRef: data.userRef,
        });
        const saving = await newlist.save();
        if (saving)
          return res
            .status(200)
            .json({ success: true, msg: "created successfully" });
        else
          return res
            .status(401)
            .json({ success: false, msg: "unable to create new property" });
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, meg: "Internal server error" });
  }
};

const getallpropertylist = async (req, res) => {
  try {
    const propertydata = await Listing.find();
    if (propertydata) {
      res.status(200).json({ success: true, data: propertydata });
    } else {
      res
        .status(401)
        .json({ success: false, msg: "something went wrong in fethcing data" });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal server error " });
  }
};

const getpropertybyid = async (req, res) => {
  const id = req.params.id;
  try {
    const getproperty = await Listing.findById({ _id: id });
    if (getproperty) {
      res.status(200).json({ success: true, data: getproperty });
    } else {
      console.log("property not exsit");
      res.status(404).json({ success: false, msg: "property not found" });
    }
  } catch (err) {
    console.log("Internal server error");
    res.status(500).json({ success: false, msg: "Internal server error " });
  }
};
const filterproperty = async (req, res) => {
  const query = req.query;
  try {
    const filtered = await Listing.filter((prop) => prop.regularPrice == query);
    if (filtered.length > 0) {
      res.status(200).json({ success: true, data: filtered });
    } else {
      res.status(404).json({ success: false, msg: "No data found " });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal server error" });
    console.log(err);
  }
};
module.exports = { createlisting, getallpropertylist, getpropertybyid };
