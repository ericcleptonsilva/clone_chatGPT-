import OpenAI from "openai";


module.exports = class openai{
    static configuration(){
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });
          return openai;
    }
    static async textCompletion({promptText}){
       return {
        model: "text-davinci-003",
        prompt: `${promptText}`,
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }
    }
}




