import Home from './pages/Home';
import Formation from './pages/Formation';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

var routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/formation',
        component: Formation
    },
    {
        path: '/skills',
        component: Skill
    },
    {
        path: '/experience',
        component: Experience
    },
    {
        path: '/contact',
        component: Contact
    },
]

export default routes;