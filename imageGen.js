
const OpenAI = require('openai');

// Replace 'your-api-key' with your actual OpenAI API key
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"]
}); // defaults to process.env["OPENAI_API_KEY"]
  

async function genImage() {
    const image = await openai.images.generate({
        model:"dall-e-3",
        prompt: "A high-def landscape format image of speed of learning with running man/robot in a high tech world"
    });

    console.log(image.data);
}
genImage();

