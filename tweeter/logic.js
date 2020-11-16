function Tweeter() { 


    let posts = [];


    let postIdCounter = posts.length;


    const getPosts = () => posts;


    const addPost = function(text) {

        if (text === '') {
            return;
        }

        postIdCounter += 1;

        const newId = `p${postIdCounter}`;
        const newComments = [];

        posts.push({
            id: newId,
            text: text,
            comments: newComments
        });
    }

    
    const removePost = function(postId) {
        const postNum = parseInt(postId.substring(1));
        const numOfComments = posts[postNum - 1].comments.length;  

        posts.splice(postNum - 1, 1);
        
        for (let i = postNum - 1; i < posts.length; i++) {
            posts[i].id = `p${i + 1}`;
        }
        
        postIdCounter -= 1;

        for (let i = postNum - 1; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentNum = parseInt(posts[i].comments[j].id.substring(1));
                commentNum -= numOfComments;
                posts[i].comments[j].id = `c${commentNum}`
            }
        }
    }
    

    const addComment = function(postId, text) {

        if (text === '') {
            return;
        }

        let postNum = parseInt(postId.substring(1));
        let numOfComments = 0;
        for (let i = 0; i < postNum; i++) {
            numOfComments += posts[i].comments.length;
        }
        
        const commentId = `c${numOfComments + 1}`;

        posts[postNum - 1].comments.push({
            id: commentId,
            text: text
        });

        for (let i = postNum; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentNum = posts[i].comments[j].id.substring(1);
                commentNum = parseInt(commentNum) + 1;
                posts[i].comments[j].id = `c${commentNum}`
            }
        }
    }


    const removeComment = function(postId, commentId) {
        const postNum = parseInt(postId.substring(1));
        let commentPlace = -1;
        const postComments = posts[postNum - 1].comments;

        for (let i = 0; i < postComments.length; i++) {
            if (postComments[i].id === commentId) {
                commentPlace = i;
            }
        } 
        
        if (commentPlace === -1) {
            console.log(`There is no comment with ID of ${commentId} in this post`);
            return;
        }

        postComments.splice(commentPlace, 1);

        for (let i = commentPlace; i < postComments.length; i++) {
            let commentNum = postComments[i].id.substring(1);
            commentNum = parseInt(commentNum) - 1;
            postComments[i].id = `c${commentNum}`;
        }

        for (let i = postNum; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentNum = posts[i].comments[j].id.substring(1);
                commentNum = parseInt(commentNum) - 1;
                posts[i].comments[j].id = `c${commentNum}`;
            }
        }
    }


    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}