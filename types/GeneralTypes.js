"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatus = exports.AspectRatio = exports.Sampler = exports.ArtivaModel = void 0;
/**
 * A valid Artiva Model
 */
var ArtivaModel;
(function (ArtivaModel) {
    /**
     * @modelType ckpt
     */
    ArtivaModel["DARK_SUSHI_MIX"] = "DarkSushiMix";
    /**
     * @modelType ckpt
     */
    ArtivaModel["ANYTHING_V5"] = "AnythingV5";
    /**
     * @modelType ckpt
     */
    ArtivaModel["SD_V21"] = "StableDiffusionV2.1";
    /**
     * @modelType ckpt
     */
    ArtivaModel["MEINAMIX_V10"] = "MeinaMixV10";
    /**
     * @modelType ckpt
     */
    ArtivaModel["PASTEL_DREAM"] = "PastelDream";
    /**
     * @modelType safetensors
     */
    ArtivaModel["GHOST_MIX_V2"] = "GhostMixV2";
    /**
     * @modelType safetensors
     */
    ArtivaModel["OPENJOURNEY_V4"] = "OpenJourney";
    /**
     * @modelType safetensors
     */
    ArtivaModel["MEINA_PASTEL"] = "MeinaPastel";
    /**
     * @modelType ckpt
     */
    ArtivaModel["MEINA_UNREAL"] = "MeinaPastel";
    /**
     * @modelType safetensors
     */
    ArtivaModel["ABSOLUTE_REALITY"] = "AbsoluteReality";
    /**
     * @modelType safetensors
     */
    ArtivaModel["BRA_V5"] = "BraV5";
    /**
     * @modelType ckpt
     */
    ArtivaModel["DREAM_SHAPER_V7"] = "DreamShaperV7";
    /**
     * @modelType ckpt
     */
    ArtivaModel["ICBINP"] = "ICBINP";
    /**
     * @modelType safetensors
     */
    ArtivaModel["LYRIEL"] = "Lyriel";
    /**
     * @modelType safetensors
     */
    ArtivaModel["MAJIC_MIX"] = "MajicMix";
    /**
     * @modelType safetensors
     */
    ArtivaModel["XXMIX"] = "Xxmix";
    /**
     * @modelType safetensors
     */
    ArtivaModel["TOON_YOU_V5"] = "ToonYouV5";
    /**
     * @modelType safetensors
     */
    ArtivaModel["NIJI_JOURNEY"] = "NijiJourney";
})(ArtivaModel = exports.ArtivaModel || (exports.ArtivaModel = {}));
/**
 * The type of Stable Diffusion sampler
 */
var Sampler;
(function (Sampler) {
    Sampler["DDIM"] = "ddim";
    Sampler["DDPM"] = "ddpm";
    Sampler["EULER"] = "euler";
    Sampler["EULERA"] = "eulera";
    Sampler["KDPM2"] = "kdpm2";
    Sampler["DPM_SDE"] = "dpm_sde";
    Sampler["DPMM"] = "dpmm";
})(Sampler = exports.Sampler || (exports.Sampler = {}));
/**
 * The aspect ratio of an image
 */
var AspectRatio;
(function (AspectRatio) {
    /**
     * @size 512x768
     */
    AspectRatio["PORTRAIT"] = "portrait";
    /**
     * @size 768x512
     */
    AspectRatio["LANDSCAPE"] = "landscape";
    /**
     * @size 512x512
     */
    AspectRatio["SQUARE"] = "square";
})(AspectRatio = exports.AspectRatio || (exports.AspectRatio = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["ERROR"] = "error";
    JobStatus["SUCCEEDED"] = "succeeded";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
