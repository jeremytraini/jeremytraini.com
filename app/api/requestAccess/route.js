import { Octokit } from "@octokit/core";


const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const addCollaborator = async (owner, repo, username) => {
    try {
        await octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
            owner: owner,
            repo: repo,
            username: username,
            permission: 'read',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("Collaborator added successfully:", username);
        return new Response("Successfully added you to the repo!", { status: 201 });
    } catch (error) {
        if (error.status == 404) {
            console.log("Username not found on Github:", username);
            return new Response("Could not find your username on Github.", { status: 404 });
        } else {
            console.log("Error adding collaborator:", error);
            return new Response("There was a problem on Github's side so I couldn't add you to the repo.", { status: 500 });
        }
    }
}


// API route for requesting access to the repo
// POST /api/requestAccess
// Request body: { repo: string, username: string, code: string }
// Response: { message: string }
// Status code: 201
export const POST = async (request) => {
    if (request == null) {
        console.log("Request body is null");
        return new Response("You must supply a request body!", { status: 400 });
    }

    if (request.headers.get("Content-Type") !== "application/json") {
        console.log("Invalid Content-Type");
        return new Response("You must supply a JSON request body!", { status: 400 });
    }

    const { repo, username, code } = await request.json();

    // Validation for required fields
    if (!repo || !username || !code) {
        console.log("Missing required fields");
        return new Response("Missing required fields: repo, username, and/or secret code.", { status: 400 });
    }

    if (!process.env.REQUEST_ACCESS_CODE.split(",").includes(code)) {
        console.log("Invalid code:", code);
        return new Response("Invalid code!", { status: 401 });
    }

    console.log("Adding collaborator", username, "to", repo, "using code", code);
    return await addCollaborator("jeremytraini", repo, username);
}
