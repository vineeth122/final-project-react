const NavigationSidebar = (param1) => {
    return(`
    <div class="list-group">
                <a href="../navigation.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">

                            <i class="fa-brands fa-twitter  h4 "></i>
                    </div>
                </div>
                </a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${param1.home ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div class="d-none d-lg-block col ">
                            Home
                        </div>
                    </div>
                    </a>
                <a href="../explore/index.html" class="list-group-item list-group-item-action  ${param1.explore ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-hashtag"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            Explore
                        </div>
                    </div>
                    </a>
                <a href="../notifications.html" class="list-group-item list-group-item-action ${param1.notify ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-sharp fa-solid fa-bell"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            Notifications
                        </div>
                    </div>
                    </a>
                <a href="../messages.html" class="list-group-item list-group-item-action ${param1.messages ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-message"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            Messages
                        </div>
                    </div>
                    </a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action ${param1.bookmarks ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-bookmark"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            Bookmarks
                        </div>
                    </div>
                    </a>
                <a href="../lists.html" class="list-group-item list-group-item-action ${param1.lists ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-fire"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            Top Articles
                        </div>
                    </div>
                    </a>
                <a href="../profile.html" class="list-group-item list-group-item-action ${param1.profile ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            Profile
                        </div>
                    </div>
                    </a>
                <a href="../more.html" class="list-group-item list-group-item-action ${param1.more ? 'active':''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                        <div class="d-none d-lg-block col">
                            More
                        </div>
                    </div>
                    </a>
<!--                <button type="button" class="btn btn-primary">Tuit</button>-->
                </div>

                <button type="button" class="btn btn-primary rounded-pill w-100 mt-1 col-lg-3">Tuit</button>

    `)
}

export default NavigationSidebar;