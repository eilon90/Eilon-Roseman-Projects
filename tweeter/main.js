const tweeter = Tweeter();
const renderer = Renderer();
renderer.renderPosts(tweeter.getPosts());


function post() {
    let newPostText = $('#input').val();
    tweeter.addPost(newPostText);
    renderer.renderPosts(tweeter.getPosts());
    $('#input').val('');
}


$('body').on('click', '.delete', function() {
    const postDeleted = $(this).closest('.post').attr('id');
    tweeter.removePost(postDeleted);
    renderer.renderPosts(tweeter.getPosts());
    
});


$('body').on('click', '.comment-button', function() {
    const parentPost = $(this).closest('.post').attr('id');
    let newCommentText = $(this).closest('.post').find('input').val();
    tweeter.addComment(parentPost, newCommentText);
    renderer.renderPosts(tweeter.getPosts());
    $(this).closest('.post').find('input').val('');
});


$('body').on('click', '.delete-comment', function() {
    const parentPost = $(this).closest('.post').attr('id');
    const commentDeleted = $(this).closest('p').attr('id');
    tweeter.removeComment(parentPost, commentDeleted);
    renderer.renderPosts(tweeter.getPosts());
})

