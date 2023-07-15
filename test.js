const { ArtivaModel } = require("./types/GeneralTypes.js");
const { UpscaleType } = require("./types/ImageUpscaleTypes.js");
const Artiva = require("./Artiva.js").Artiva

let ai = new Artiva("testKey");

ai.generateText2Image({
    model:ArtivaModel.ANYTHING_V5,
    prompt:"a white cat",
    step:30
}).then((e) => {
    console.log(e)
    ai.imageUpscale(e.id, UpscaleType.ESRGAN_ANIME).then((e) => {
        console.log(e)
    })
})

