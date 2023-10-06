
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

const addCollaborator = async (owner, repo, username) => {
  
}


// API route for requesting access to the repo
// POST /api/requestAccess
// Request body: { username: string, code: string }
// Response: { message: string }
// Status code: 201
export const POST = async (request) => {
    const { username, code } = await request.json();

    // Require username and secret code
    if (!username || !code) {
        return new Response("You must supply your GitHub username and secret code!", { status: 400 });
    }

    if (code != process.env.REQUEST_ACCESS_CODE) {
        return new Response("Invalid code!", { status: 401 });
    }
    
    try {
        await addCollaborator("jeremytraini", "jeremytraini.com", username);
        return new Response("Successfully added you to the repo!", { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Could not add you to the repo!", { status: 500 });
    }
}
