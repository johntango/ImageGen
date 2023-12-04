
const OpenAI = require('openai');

// Replace 'your-api-key' with your actual OpenAI API key
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"]
}); // defaults to process.env["OPENAI_API_KEY"]
  

async function genImage() {
    const image = await openai.images.generate({
        prompt: "A cute baby sea otter"

    });

    console.log(image.data);
}
genImage();

