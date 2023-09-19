
/**
 * The type of Stable Diffusion sampler
 */
export enum Sampler {
    DDIMScheduler = 1,
    DDPMScheduler = 2,
    PNDMScheduler = 3,
    LMSDiscreteScheduler = 4,
    EulerDiscreteScheduler = 5,
    HeunDiscreteScheduler = 6,
    EulerAncestralDiscreteScheduler = 7,
    DPMSolverMultistepScheduler = 8,
    DPMSolverSinglestepScheduler = 9,
    KDPM2DiscreteScheduler = 10,
    KDPM2AncestralDiscreteScheduler = 11,
    DEISMultistepScheduler = 12,
    UniPCMultistepScheduler = 13,
    DPMSolverSDEScheduler = 14
}

/**
 * The aspect ratio of an image
 */
export enum AspectRatio {
    /**
     * @size 512x768
     */
    PORTRAIT = "portrait",

    /**
     * @size 768x512
     */
    LANDSCAPE = "landscape",

    /**
     * @size 512x512
     */
    SQUARE = "square"
}

export enum JobStatus {
    ERROR = `ERROR`,
    SUCCEEDED = `SUCCEEDED`,
}
