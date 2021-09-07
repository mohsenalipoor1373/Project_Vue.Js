import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home';
import User from './pages/User';
import Post from './pages/Post';

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/user", name: "user", component: User},
    {path: "/post", name: "post", component: Post},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;