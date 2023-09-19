import { JobStatus, AspectRatio, Sampler } from "./GeneralTypes";


export interface CreateGenerationRequest {
    model: string,
    prompt: string,
    negative?: string,
    steps?: number,
    seed?: number,
    scheduler?: Sampler,
    karras?: boolean,
    aspect_ratio?: AspectRatio,
    title?: string,
    description?: string
}

export interface ResponseParamType {
    id: string,
    url:string,
    og_url:string,
    time:number
}

export interface GenerationResponse {
    status: JobStatus,
    data: GenerationResponse
}
