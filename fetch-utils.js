const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTcxNzYwNCwiZXhwIjoxOTU1MjkzNjA0fQ.zvinRBY8OcLtdSxp7iqwSDb7bXM3XP5ZI9jTKBF-B9o';

export async function getUser() {
    return client.auth.user();
}

export async function checkLoggedIn() {
    const user = await getUser();
    if (!user) {
        window.location = './';
    }
}

// export async function checkLoggedIn() {

//     if (!client.auth.session()) {
//         window.location = '../';
//     }
// }

const SUPABASE_URL = 'https://ywoxxyoyxtmjionhugfd.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function signIn(username, password) {
    const response = await client.auth.signIn({
        email: username,
        password: password,
    });
    return response.user;
}

export async function signUp(username, password) {
    const response = await client.auth.signUp({
        email: username,
        password: password,
    });
    return response.user;
}

export async function savePoll(poll) {
    const newPoll = { ...poll };
    const response = await client
        .from('polls')
        .insert([
            {
                question: newPoll.question,
                name1: newPoll.name1,
                name2: newPoll.name2,
                score1: newPoll.score1,
                score2: newPoll.score2,
            },
        ]);

    return response.data;
}

export async function getPolls() {

}




