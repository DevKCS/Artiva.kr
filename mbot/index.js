(function() {
    const uploader = require('./molyaUpload');
    const merger = require('./image_merger');


    const BASE_URL = 'https://artiva.kr';

    /**
     * # Artiva API Wrapper
     * last update - 2023/07/23
     * @param apiKey
     * @constructor
     * 
     * @example
     * const { Artiva } = require('artiva');
     * const artiva = new Artiva('API KEY');
     */
    function Artiva (apiKey) {
       this.apiKey = apiKey;
    }

    /**
     * Generate an image from a text prompt
     * @param { textToImageGenerationRequestType } data
     * @returns { textToImageGenerationResponseType }
     *
     * @example
     * artiva.generateText2Image({
     *     model: Artiva.Model.MAJIC_MIX,
     *     prompt: 'prompt'
     * });
     */
    Artiva.prototype.generateText2Image = function (data) {
        const response = org.jsoup.Jsoup.connect(BASE_URL + '/api/img/t2i')
            .timeout(1000 * 60)
            .headers({
                'artiva-api-key': this.apiKey,
                'Content-Type': 'application/json'
            })
            .requestBody(JSON.stringify(data))
            .method(org.jsoup.Connection.Method.POST)
            .ignoreHttpErrors(true)
            .ignoreContentType(true)
            .execute();

        if (response.statusCode() !== 200) {
            throw new Error ('Api responded with ' + response.statusCode() + ' ' + response.statusMessage());
        }

        return JSON.parse(response.parse().body().text());
    }

    /**
     * Generate an image from image and prompt
     * @param { imageToImageGenerationRequestType } data
     * @returns { imageToImageGenerationResponseType }
     *
     * @example
     * artiva.generateImage2Image({
     *     model: Artiva.Model.MAJIC_MIX,
     *     prompt: 'prompt',
     *     image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
     * });
     */
    Artiva.prototype.generateImage2Image = function (data) {
        const response = org.jsoup.Jsoup.connect(BASE_URL + '/api/img/i2i')
            .timeout(1000 * 60)
            .headers({
                'artiva-api-key': this.apiKey,
                'Content-Type': 'application/json'
            })
            .requestBody(JSON.stringify(data))
            .method(org.jsoup.Connection.Method.POST)
            .ignoreHttpErrors(true)
            .ignoreContentType(true)
            .execute();

        if (response.statusCode() !== 200) {
            throw new Error ('Api responded with ' + response.statusCode() + ' ' + response.statusMessage());
        }

        return JSON.parse(response.parse().body().text());
    }

    /**
     * Upscale image from a id
     * @param { upscaleRequestType } data
     * @returns { upscaleResponseType }
     *
     * @example
     * artiva.upscaleImage({
     *     id: 'id',
     *     type: Artiva.Upscale.ESRGAN_ANIME
     * });
     */
    Artiva.prototype.upscaleImage = function (data) {
        const response = org.jsoup.Jsoup.connect(BASE_URL + '/api/img/upscale')
            .timeout(1000 * 60)
            .headers({
                'artiva-api-key': this.apiKey,
                'Content-Type': 'application/json'
            })
            .requestBody(JSON.stringify(data))
            .method(org.jsoup.Connection.Method.POST)
            .ignoreHttpErrors(true)
            .ignoreContentType(true)
            .execute();

        if (response.statusCode() !== 200) {
            throw new Error ('Api responded with ' + response.statusCode() + ' ' + response.statusMessage());
        }

        return uploader({
            type: "byUrl",
            data: {
                image: Artiva.getInfoById(data.id).imgUrl,
                useOriginal: true
            }
        });
    }

    /**
     * get image info by id
     * @param id
     * @returns { Object }
     */
    Artiva.getInfoById = function (id) {
        return JSON.parse(org.jsoup.Jsoup.connect(BASE_URL + '/job/' + id)
            .ignoreContentType(true)
            .ignoreHttpErrors(true)
            .get()
            .text());
    }

    /**
     * Artiva API model list
     */
    Artiva.Model = {
        /**
         * @modelType ckpt
         */
        darksushimix: "DarkSushiMix",
        /**
         * @modelType ckpt
         */
        anything: "AnythingV5",
        /**
         * @modelType ckpt
         */
        sd: "StableDiffusionV2.1",
        /**
         * @modelType ckpt
         */
        meinamix: "MeinaMixV10",
        /**
         * @modelType ckpt
         */
        pasteldream: "PastelDream",
        /**
         * @modelType safetensors
         */
        ghostmix: "GhostMixV2",
        /**
         * @modelType safetensors
         */
        openjourney: "OpenJourney",
        /**
         * @modelType safetensors
         */
        meinapastel: "MeinaPastel",
        /**
         * @modelType ckpt
         */
        meinaunreal: "MeinaUnreal",
        /**
         * @modelType safetensors
         */
        absolutereality: "AbsoluteReality",
        /**
         * @modelType safetensors
         */
        dreamlike: "dreamlike-diffusion-2.0.safetensors [fdcf65e7]",
        /**
         * @modelType safetensors
         */
        bra: "BraV5",
        /**
         * @modelType ckpt
         */
        dreamshaper: "DreamShaperV7",
        /**
         * @modelType ckpt
         */
        icbinp: "ICBINP",
        /**
         * @modelType safetensors
         */
        lyriel: "Lyriel",
        /**
         * @modelType safetensors
         */
        magicmix: "MajicMix",
        /**
         * @modelType safetensors
         */
        xxmix: "Xxmix",
        /**
         * @modelType safetensors
         */
        toonyou: "ToonYouV5",
        /**
         * @modelType safetensors
         */
        nijijourney: "NijiJourney",
        /**
         * @modelType safetensors
         */
        sdxl: "SDXL"
    }

    /**
     * Artiva API sampler list
     */
    Artiva.Sampler = {
        ddim: "ddim",
        ddpm: "ddpm",
        euler: "euler",
        eulera: "eulera",
        kdpm2: "kdpm2",
        dpm_sde: "dpm_sde",
        dpmm: "dpmm"
    }

    /**
     * Artiva API aspect ratios
     */
    Artiva.AspectRatio = {
        /**
         * @size 512x768
         */
        portrait: "portrait",
        /**
         * @size 768x512
         */
        landscape: "landscape",
        /**
         * @size 512x512
         */
        square: "square"
    }

    /**
     * Artiva API upscale list
     */
    Artiva.Upscale = {
        esrgan: "esrgan",
        esrgananime: "esrgan-anime",
        gfpgan: "gfpgan"
    }

    /**
     * @typedef textToImageGenerationRequestType
     * @property { Artiva.Model } model Models to be used to create images
     * @property { string } prompt prompt to use to generate an image
     * @property { string } negative_prompt negative prompt to use to generate an image
     * @property { number } step Number of inference steps required to generate an image (10-50)
     * @property { number } cfg_scale Adjusts the similarity of the generated image to the prompt or image (0.1-25)
     * @property { boolean } clip_scale If the value is true, focus on creative image generation rather than detail
     * @property { number } seed Random number value for image generation
     * @property { Artiva.Sampler } scheduler Number of inference steps required to generate an image
     * @property { boolean } karras If the value is true, it gets better results than other samplers
     * @property { Artiva.AspectRatio } aspect_ratio Image resolution to be set for image generation
     * @property { string } title title for og URL
     * @property { string } desc description for og URL
     */

    /**
     * @typedef textToImageGenerationResponseType
     * @property { string } id The id of the job that has been created
     * @property { 'error' | 'succeeded' } JobStatus The current status of the job that has been created
     * @property { Object } params A list of parameters that had been used to create the job
     * @property { string | undefined } imgUrl The URL of the generated image
     * @property { string | undefined } ogUrl The ogURL of the generated image
     */

    /**
     * @typedef imageToImageGenerationResponseType
     * @property { string } id The id of the job that has been created
     * @property { 'error' | 'succeeded' } JobStatus The current status of the job that has been created
     * @property { Object } params A list of parameters that had been used to create the job
     * @property { string | undefined } imgUrl The URL of the generated image
     * @property { string | undefined } ogUrl The ogURL of the generated image
     */

    /**
     * @typedef imageToImageGenerationRequestType
     * @property { Artiva.Model } model Models to be used to create images
     * @property { string } image Image to proceed with image generation
     * @property { string } prompt prompt to use to generate an image
     * @property { string } negative_prompt negative prompt to use to generate an image
     * @property { number } step Number of inference steps required to generate an image (10-50)
     * @property { number } cfg_scale Adjusts the similarity of the generated image to the prompt or image (0.1-25)
     * @property { boolean } clip_scale If the value is true, focus on creative image generation rather than detail
     * @property { number } seed Random number value for image generation
     * @property { Artiva.Sampler } scheduler Number of inference steps required to generate an image
     * @property { boolean } karras If the value is true, it gets better results than other samplers
     * @property { Artiva.AspectRatio } aspect_ratio Image resolution to be set for image generation
     * @property { string } title title for og URL
     * @property { string } desc description for og URL
     */

    /**
     * @typedef upscaleRequestType
     * @property { string } id id of the image to be upscale
     * @property { Artiva.Upscale } type Upscale Type
     */

    /**
     * @typedef upscaleResponseType
     * @property { 'error' | 'succeeded' } JobStatus The current status of the job that has been created
     */

    module.exports = {
        Artiva: Artiva,
        Merge: merger
    };
})();