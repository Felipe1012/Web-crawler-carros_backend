const router = require("express").Router();
const callNLUnderstanding = require("../utils/watsonNL");
const proDataNL = require("../utils/proDataNL");
const main = require("../utils/Discovery");
const params = require("../params");
const fs = require("fs");

// Watson NLU Route for analize text
router.post("/upload-text", async function (req, res) {
  const inputText = req.body.text;
  console.log(inputText);
  try {
    if (!inputText) {
      res.send({
        status: false,
        message: "No text uploaded",
      });
    } else {
      let finalJson = [];
      var response=
      await main(params, inputText).then((ans) => {
        for (let item of ans) {
          callNLUnderstanding(params, item).then((data) => {
            proDataNL(data).then((finalRes) => {
              finalJson.push(finalRes);
            
                if(finalJson.length >= 15){
                  res.send(finalJson)
                }
                
            })
          })
        }
      });
    
    }
  } catch (err) {
    res.status(500).json({ message: "No se pudo analizar el texto ingresado" });
  }
});

module.exports = router;
