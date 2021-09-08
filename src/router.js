import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home';
import User from './pages/User';
import Post from './pages/Post';
import ShowUser from "./pages/ShowUser";
import TemplateUser from "./pages/TemplateUser";
import TemplatePost from "./pages/TemplatePost";
import ShowPost from "./pages/ShowPost";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

const routes = [
    {path: "/", name: "home", component: Home},
    {
        path: "/user", name: "users", component: TemplateUser, children: [
            {path: '', name: 'user', component: User},
            {path: ':id', name: 'userId', component: ShowUser}
        ]
    },
    {
        path: "/post", name: "posts", component: TemplatePost, children: [
            {path: '', name: 'post', component: Post},
            {path: 'create', name: 'createPost', component: CreatePost},
            {path: 'edit/:id', name: 'editPost', component: EditPost},
            {path: ':id', name: 'postId', component: ShowPost}
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;