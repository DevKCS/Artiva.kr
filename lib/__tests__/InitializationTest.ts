import assert from "assert";
import { Artiva } from "../Artiva"
import { ArtivaModel, JobStatus } from "../types/GeneralTypes";
import { GenerationResponse } from "../types/GenerationTypes";

const artivaKey = "testKey"

const artiva = new Artiva(artivaKey);

describe(`Image Generation Tests`, () => {

    let imageGeneration: GenerationResponse | undefined;

    test(`Generate an image with Artiva`, async () => {
    
        let j = await artiva.generateText2Image({
            prompt: `A cute dog`,
            model: ArtivaModel.ANYTHING_V5,
            steps: 30
        });
    
        // Make sure that the response from the server is that it's queued
        expect(j.status).toEqual(JobStatus.SUCCEEDED);
    
        console.log(`Got job: ${j}`)
        imageGeneration = j;
    
    }, 30000);
});
