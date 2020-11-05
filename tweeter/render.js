function Renderer() {

    renderPosts = function(posts){

        $('#posts').empty();

        for (let post of posts) {

            const postDiv = $(`<div class = "post" id = "${post.id}"></div>`); 
            $('#posts').append(postDiv);

            const postText = $(`<h3 class = "post-text">${post.text}</h3>`); 
            $(`#${post.id}`).append(postText);

            for (let comment of post.comments) {
                const commentText = $(`<p class = "comments" id = "${comment.id}"><span class = "delete-comment">x </span>${comment.text}</p>`);
                $(`#${post.id}`).append(commentText);    
            }

            const newComment = $(`<input type = "text" class = "comments" placeholder = "Got something to say?"><button class = "comment-button">Comment</button></br>`);
            $(`#${post.id}`).append(newComment);

            const deletePost = $(`<div class = "delete">Delete Post</div>`)
            $(`#${post.id}`).append(deletePost);  
        }   
    }

    return({
        renderPosts: renderPosts
    });
}
