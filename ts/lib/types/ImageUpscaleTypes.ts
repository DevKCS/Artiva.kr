import { JobStatus } from "./GeneralTypes";

export interface UpscaleResponse {
    /**
     * The current status of the job that has been upscale
     */
    status: JobStatus,
    data: {
        id: string
    }
}


export enum UpscaleType {
    
}
