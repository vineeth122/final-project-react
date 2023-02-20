import PostItem from "./PostItem.js";
import post from "./postl.js";

const PostItemList = () => {
    return (` <ul class="list-group">
       ${post.map(post1 => {
        return (PostItem(post1));
    }).join('')
    }
 </ul>
    `)
}

export default PostItemList;

