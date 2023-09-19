import axios from "axios";
import { CreateGenerationRequest, GenerationResponse } from "./types/GenerationTypes";
import { UpscaleResponse, UpscaleType } from "./types/ImageUpscaleTypes";
import { ImageToImageRequest } from "./types/ImageToImageTypes";

const ARTIVA_URL = `https://api.artiva.kr`;

/**
 * Them main artiva class, this class should be viewed as the instance of an API key
 */
export class Artiva {

    private _apiKey: string;

    public constructor(apiKey: string) {
        this._apiKey = apiKey;
    }

    /**
     * Generate an image from a text prompt
     * @param generationRequest The generation parameters for the request
     */
    public generateText2Image(generationRequest: CreateGenerationRequest): Promise<GenerationResponse> {
        return new Promise(async (_r, _e) => {
            const response = await axios.post(`${ARTIVA_URL}/api/generate/txt2img`, generationRequest, {
                headers: {
                    "artiva-api-key": this._apiKey
                }
            })
            if (response.status == 400) {
                return _e(new Error(`Api responded with ${response.status} ${response.data.message}`))
            }
            const responseJSON = await response.data;
            return _r(responseJSON as GenerationResponse);
        })
    }

    /**
     * Generate an image from a text prompt
     * @param generationRequest The generation parameters for the request
     */
    public generateImage2Image(generationRequest: ImageToImageRequest): Promise<GenerationResponse> {
        return new Promise(async (_r, _e) => {
            const response = await axios.post(`${ARTIVA_URL}/api/generate/img2img`, generationRequest, {
                headers: {
                    "artiva-api-key": this._apiKey
                }
            })
            if (response.status == 400) {
                return _e(new Error(`Api responded with ${response.status} ${response.data.message}`))
            }
            const responseJSON = await response.data;
            return _r(responseJSON as GenerationResponse);
        })
    }

    /**
     * Upscale image from a id
     * @param id The generation id for the request
     */
    public imageUpscale(id: String): Promise<UpscaleResponse> {
        return new Promise(async (_r, _e) => {
            const response = await axios.post(`${ARTIVA_URL}/api/upscale`, {
                id: id
            }, {
                headers: {
                    "artiva-api-key": this._apiKey
                }
            })
            if (response.status != 200) {
                return _e(new Error(`Api responded with ${response.status} ${response.statusText}`))
            }
            const responseJSON = await response.data;
            return _r(responseJSON as UpscaleResponse);
        })
    }
}
