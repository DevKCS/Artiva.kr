import { Sampler, AspectRatio } from "./GeneralTypes";
import { CreateGenerationRequest } from "./GenerationTypes";

export interface ImageToImageRequest {
    img_url: string,
    model: string,
    prompt: string,
    negative?: string,
    steps?: number,
    seed?: number,
    scheduler?: Sampler,
    aspect_ratio?: AspectRatio,
    title?: string,
    description?: string
}

