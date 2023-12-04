
const OpenAI = require('openai');

// Replace 'your-api-key' with your actual OpenAI API key
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"]
}); // defaults to process.env["OPENAI_API_KEY"]
  

async function genChat() {
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the FIFA Womens World World Cup in 2023?"},
            {"role": "assistant", "content": " Spain won the FIFA Womens World Cup in 2023."},
            {"role": "user", "content": "Where was it played?"}],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0]);
}
genChat();