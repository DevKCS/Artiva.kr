"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artiva = void 0;
const axios_1 = __importDefault(require("axios"));
const ARTIVA_URL = `https://artiva.kr`;
/**
 * Them main prodia class, this class should be viewed as the instance of an API key
 */
class Artiva {
    constructor(apiKey) {
        this._apiKey = apiKey;
    }
    /**
     * Generate an image from a text prompt
     * @param generationRequest The generation parameters for the request
     */
    generateText2Image(generationRequest) {
        return new Promise(async (_r, _e) => {
            const response = await axios_1.default.post(`${ARTIVA_URL}/api/img/t2i`, generationRequest, {
                headers: {
                    "artiva-api-key": this._apiKey
                }
            });
            if (response.status != 200) {
                return _e(new Error(`Api responded with ${response.status} ${response.statusText}`));
            }
            const responseJSON = await response.data;
            return _r(responseJSON);
        });
    }
    /**
     * Upscale image from a id
     * @param id The generation id for the request
     */
    imageUpscale(id, type) {
        return new Promise(async (_r, _e) => {
            const response = await axios_1.default.post(`${ARTIVA_URL}/api/img/upscale`, {
                id: id,
                type: type
            }, {
                headers: {
                    "artiva-api-key": this._apiKey
                }
            });
            if (response.status != 200) {
                return _e(new Error(`Api responded with ${response.status} ${response.statusText}`));
            }
            const responseJSON = await response.data;
            return _r(responseJSON);
        });
    }
}
exports.Artiva = Artiva;
