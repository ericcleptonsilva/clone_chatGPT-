import InputPrompt from "../models/input-prompt";
import openai from "../config/openai";
const promptController = {
  async sendText(req, res) {
    const openaiApi = openai.configuration()
    const inputPrompt = new InputPrompt(req.body)

    try {
      const response = await openaiApi.chat.completions.create(
        openai.textCompletion(inputPrompt)
      )
      return res.status(200).json({
        success:true,
        data:response.data.choices[0].text
      })
    } catch (error) {
      return res.status(400).json({
        success:false,
        error:error.response ? error.response :"there was  an inssue on the server"
      })
    } 
  },
};

export default promptController;