const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "avatar-ducreux.jpg",
        comment: "just took a few mushrooms lol",
        likes: 0
    }  
    ]  
    // },
    // {
    //     name: "Gustave Courbet",
    //     username: "gus1819",
    //     location: "Ornans, France",
    //     avatar: "images/avatar-courbet.jpg",
    //     post: "images/post-courbet.jpg",
    //     comment: "i'm feelin a bit stressed tbh",
    //     likes: 4
    // },
    //     {
    //     name: "Joseph Ducreux",
    //     username: "jd1735",
    //     location: "Paris, France",
    //     avatar: "images/avatar-ducreux.jpg",
    //     post: "images/post-ducreux.jpg",
    //     comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    //     likes: 152
    // }


const secBody = document.getElementById(id="sec-body")

renderPage()

function renderPage() {
    for (let i = 0; i < posts.length; i++) {
        secBody.innerHTML += `
        <div class="user-info">
                <img 
                class="user-img" 
                src="${posts[i].avatar}"
                ></img>
                <div class="user-names">
                    <h3>${posts[i].name}</h3>
                    <h4>${posts[i].location}</h4> 
                </div>
            </div>
            <div class="posted-img">
            <img 
            class="posted-img" 
            src="${posts[i].post}"
            ></img>
            </div>
            <section>
                <div class="likes-info">
                    <div class="likes-icons">
                        <div class="icon-love" id="heart-icon" alt=""></div>
                        <div class="icon-comment" alt=""></div>
                        <div class="icon-share" alt=""></div>
                    </div>
                        <p class="likes-num" id="like-increase">${posts[i].likes}</p>
                        <p class="user-name">${posts[i].username} <scan class="text-prop">${posts[i].comment}</scan></p>
                </div>
            </section>
        ` 
    }
    
}

let heartIcon = document.getElementById("heart-icon")

let num = 0

heartIcon.addEventListener("click", function(){
let likeIncrease = document.getElementById("like-increase")
num += 1
likeIncrease.textContent = `${num} likes`
})