module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      apiKey: process.env.API_KEY,
      resumeUrl: process.env.RESUME_URL // Pass through env variables
    }
}