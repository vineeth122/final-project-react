import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {
    return (` <ul class="list-group">
       ${post.map(post1 => {
        return (PostSummaryItem(post1));
    }).join('')
    }
 </ul>
    `)
}

export default PostSummaryList;

