import axios from "axios";

export class Artiva {
    constructor (apikey) {
        this.apikey = apikey
    }

    /**
     * @param {"DrakSushiMix"|"AnythingV5"|"StableDiffusionV2.1"|"MeinaMixV10"|"PastelDream"|"GhostMixV2"|"OpenJourney"|"MeinaPastel"|"MeinaUnreal"|"MeinaUnreal"|"AbsoluteReality"|"BraV5"|"DreamShaperV7"|"ICBINP"|"Lyriel"|"MajicMix"|"Xxmix"|"ToonYouV5"|"NijiJourney"} model 이미지를 생성할 모델
     * @param {String} prompt 이미지를 생성할 프롬프트
     * @param {String} negative_prompt 이미지에서 제외할 프롬프트
     * @param {Number | undefined} seed 임의성 값 (이 값과 프롬프트가 같으면 같은 이미지 도출)
     * @param {Number} cfg AI의 자유도 (높을수록 프롬프트를 더 따름)
     * @param {Boolean} clip_skip 더 창의적인 이미지를 생성할지 여부
     * https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/5674#discussioncomment-4384445
     * @param {"square"|"portrait"|"landscape"} aspect_ratio 이미지 해상도
     * @param {"ddim"|"ddpm"|"euler"|"eulera"|"kdpm2"|"dpm_sde"|"dpmm"} scheduler 생성 과정에서 노이즈를 제거하는 알고리즘
     * https://huggingface.co/docs/diffusers/using-diffusers/schedulers
     * @param {Boolean} karras 잘 모름 아마도 이미지 퀄리티 향상
     * @param {Number} step 이미지를 생성하는 과정 수 (단계가 높을수록 퀄리티가 올라가나 속도가 떨어짐)
     * https://www.jonstokes.com/p/getting-started-with-stable-diffusion#%C2%A7diffusion-steps
     * @param {String | undefined} title og이미지의 제목
     * @param {String | undefined} desc og이미지의 설명
     */
    async generate(model,prompt,negative_prompt,seed,cfg,clip_skip,aspect_ratio,scheduler,karras,step,title,desc) {
        const result = await axios.post("https://artiva.kr/api/img/t2i",{
            model:model,
            prompt:prompt,
            negative_prompt:negative_prompt,
            seed:seed,
            cfg:cfg,
            clip_skip,
            aspect_ratio:aspect_ratio,
            scheduler:scheduler,
            karras:karras,
            step:step,
            title:title,
            desc:desc
        })
        return result.data
    }

    async upscale(id) {
        const result = await axios.post("https://artiva.kr/api/img/upscale",{
            id:id
        })
        return result.data
    }
}
