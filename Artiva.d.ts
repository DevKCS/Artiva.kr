import { CreateGenerationRequest, GenerationResponse } from "./types/GenerationTypes";
import { UpscaleResponse, UpscaleType } from "./types/ImageUpscaleTypes";

export declare class Artiva {
    private _apiKey;
    constructor(apiKey: string);
    /**
     * Generate an image from a text prompt
     * @param generationRequest The generation parameters for the request
     */
    generateText2Image(generationRequest: CreateGenerationRequest): Promise<GenerationResponse>;
    /**
     * Upscale image from a id
     * @param id The generation id for the request
     */
    imageUpscale(id: String, type: UpscaleType): Promise<UpscaleResponse>;
}
