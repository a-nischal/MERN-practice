const { userInfo } = require("os");

document.getElementById('fetchUserBtn').addEventListener('click', async() => {
    const username = document.getElementById('username').value;
    const { user, followers } = await getGithubUserDataByUserName(username);
    renderUserInfo(user);
    renderUserFollowers(followers);
});


const renderUserInfo = (user) => {
    const userInfo = document.getElementById("userInfo").value;
    
}




































































const fetchUserBtn = document.getElementById('fetchUserBtn');

fetchUserBtn.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    await fetchGitHubUser(username);
});

        async function getGithubUserDataByUserName(){
            const res = await fetch(`https://api.github.com/users/${username}`);
            const user =await res.json()
            const followersRes = await fetch(user.followers_url)
            const floowersData = await followersRes.json()
        }
        
        getGithubUserDataByUserName()
      
    async function fetchGitHubFollowers(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/followers`);
            if (!response.ok) {
                throw new Error('Followers not found');
            }
            const followersData = await response.json();
            displayFollowers(followersData);
        } catch (error) {
            console.error('Error fetching followers:', error.message);
        }
    }
    function displayUserInfo(userData) {
        const userInfoDiv = document.getElementById('userInfo');
        userInfoDiv.innerHTML = `
        <h2>${userData.login}</h2>
        <img src="${userData.avatar_url}" alt="${userData.login}" width="100">
        <p>${userData.bio}</p>
        <p>Public Repos: ${userData.public_repos}</p>
        <p>Followers: ${userData.followers}</p>
        `;
    }
    function displayFollowers(followersData) {
        const followersInfoDiv = document.getElementById('followersInfo');
        followersInfoDiv.innerHTML = `<h3>Followers</h3><ul>
        ${followersData.map(follower => `
        <li>
        <img src="${follower.avatar_url}" alt="${follower.login}" width="50">
        <a href="${follower.html_url}" target="_blank">${follower.login}</a>
        </li>`).join('')}
        </ul>`;
    }
    

    