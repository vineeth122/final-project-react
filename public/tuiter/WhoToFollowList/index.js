import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js"

const WhoToFollowList = () => {
    return (`
       <ul class="list-group rounded-3">
                <li class="list-group-item fw-bolder bg-light border-0 rounded-3">
                    Who To Follow
                </li>
                ${who.map(who1 => {
        return (WhoToFollowListItem(who1));
    }).join('')
    }
<!--                <li class="list-group-item bg-light border-0 ">-->
<!--                    <span class="h6 text-info">Show more</span>-->
<!--                </li>-->
<!--                <li class="list-group-item mt-3 border-0 ">-->
<!--                    <div class="d-inline text-secondary">-->
<!--                        Terms of Service-->
<!--                    </div>-->
<!--                    <div class="d-inline ms-1 text-secondary">-->
<!--                        Privacy Policy-->
<!--                    </div>-->
<!--                    <div class="d-inline ms-1 text-secondary">-->
<!--                        Cookie Policy-->
<!--                    </div>-->
<!--                    <div class="text-secondary">-->
<!--                        <div class="d-inline">-->
<!--                            Accessibility-->
<!--                        </div>-->
<!--                        <div class="d-inline ms-1">-->
<!--                            Ads info-->
<!--                        </div>-->
<!--                        <div class="d-inline ms-1">-->
<!--                            More-->
<!--                        </div>-->
<!--                        <div class="d-inline">-->
<!--                            <i class="fa-solid fa-ellipsis"></i>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="text-secondary">-->
<!--                        <div class="d-inline">-->
<!--                            <i class="fa-regular fa-copyright"></i>-->
<!--                        </div>-->
<!--                        <div class="d-inline ms-1">-->
<!--                            2023 Twitter, Inc.-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </li>-->
                </ul>                   
    `);
}

export default WhoToFollowList;