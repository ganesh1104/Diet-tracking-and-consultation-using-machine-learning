import express from "express";
import axios from "axios";
import fs from "fs";
import { parse } from "csv-parse";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 6000;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-WikyDkPWybYhVRTeuPTOS5Nh",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const askGPT = async (messArr) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messArr,
  });
  // console.log(completion.data.choices[0].message);
  if (completion.data.choices[0].message) {
    return completion.data.choices[0].message;
  } else {
    return { role: "assistant", content: "Error Occurred" };
  }
};

app.get("/diet", (req, res) => {
  let we = req.query.weg;
  let ag = req.query.age;
  let ht = req.query.hgt;
  console.log(we, ag, ht);
  try {
    if (!we || !ag || !ht) throw "Insufficient data";
    we = we.toString().trim();
    ag = ag.toString().trim();
    ht = ht.toString().trim();
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:5555/diet?weg=${we}&age=${ag}&hgt=${ht}`,
      headers: {},
    };
    axios.request(config).then((response) => {
      let raw_data = response.data;
      res.send({ errorBool: false, data: raw_data });
    });
  } catch (e) {
    console.log("/diet " + e.toString());
    res.send({ errorBool: true, errorMessage: e, data: null });
  }
});

app.post("/ask", async (req, res, next) => {
  let mess_arr = req.body.mess_arr;
  console.log(mess_arr);
  try {
    if (!mess_arr) throw "No data found";
    // mess_arr = mess_arr.toString().trim();
    mess_arr.map((e) => {
      console.log(e);
    });
    const answr = await askGPT(mess_arr);
    res.send(answr);
  } catch (e) {
    console.log(e);
    res.send({ role: "assistant", content: "Error Caught" });
  }
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
