import { JobStatus, AspectRatio, ArtivaModel, Sampler } from "./GeneralTypes";
export interface CreateGenerationRequest {
    model: ArtivaModel;
    prompt: string;
    negative_prompt?: string;
    step?: number;
    cfg_scale?: number;
    clip_skip?: boolean;
    seed?: number;
    scheduler?: Sampler;
    karras?: boolean;
    aspect_ratio?: AspectRatio;
    title?: string;
    desc?: string;
}
export interface GenerationResponse {
    /**
     * The id of the job that has been created
     */
    id: string;
    /**
     * The current status of the job that has been created
     */
    status: JobStatus;
    /**
     * A list of parameters that had been used t ocreate the job
     */
    params: Object;
    /**
     * The URL of the generated image
     */
    imgUrl: string | undefined;
    /**
     * The ogURL of the generated image
     */
    ogUrl: string | undefined;
}
