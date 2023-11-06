import OpenAI from "openai";

class openai {
  static configuration() {
    const configuration = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return configuration;
  }
  static textCompletion({ promptText }) {
    const textCreation = new OpenAI.Chat.Completions({
      model: "text-davinci-003",
      prompt: `${promptText}`,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    return textCreation;
  }
}
export default openai;
