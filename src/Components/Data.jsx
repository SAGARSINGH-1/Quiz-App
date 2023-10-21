import { DiLinux , DiMysql, DiHtml5} from 'react-icons/di'
import { SiGnubash, SiDocker, SiAzuredevops, SiPayloadcms, SiPhp, SiJavascript, SiKubernetes, SiLaravel} from 'react-icons/si'
import {BsWordpress} from 'react-icons/bs'



export const Category = [
    {
        id: 1,
        background: <img src="./assets/Bg images/Linux.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <DiLinux className='h-[50px] w-[50px]'/>,
        title: "Linux",
        value: "Linux",
    },

    {
        id: 2,
        background: <img src="./assets/Bg images/Code.webp" alt="Linux" height='400px' width='400px'/>,
        icon: <SiGnubash className='h-[50px] w-[50px]'/>,
        title: "Bash",
        value: "Bash",
    },

    {
        id: 3,
        background: <img className="h-[20vh] " src="./assets/Bg images/Database.jpg" alt="Linux" height='450px' width='450px'/>,
        icon: <DiMysql className='h-[50px] w-[50px]'/>,
        title: "SQL",
        value: "SQL",
    }, 
    
    {
        id: 4,
        background: <img src="./assets/Bg images/Js.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <SiDocker className='h-[50px] w-[50px]'/>,
        title: "Docker",
        value: "Docker",
    },

    {
        id: 5,
        background: <img src="./assets/Bg images/Devops.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <SiAzuredevops className='h-[50px] w-[50px]'/>,
        title: "DevOps",
        value: "DevOps",
    },

    {
        id: 6,
        background: <img src="./assets/Bg images/Docker.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <SiPayloadcms className='h-[50px] w-[50px]'/>,
        title: "CMS",
        value: "CMS",
    },
    {
        id: 7,
        background: <img src="./assets/Bg images/PHP.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <SiPhp className='h-[50px] w-[50px]' />,
        title: "PHP",
        value: "PHP",
    },

    {
        id: 8,
        background: <img src="./assets/Bg images/Html.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <DiHtml5 className='h-[50px] w-[50px]' />,
        title: "HTML",
        value: "HTML",
    },

    {
        id: 9,
        background: <img src="./assets/Bg images/Js.jpg" alt="Linux" height='400px' width='400px'/>,
        icon: <SiJavascript className='h-[50px] w-[50px]' />,
        title: "JavaScript",
        value: "JavaScript",
    },

    {
        id: 10,
        background: <img className="h-[20vh] "  src="./assets/Bg images/Kubernetes.jpg" alt="Linux" height='450px' width='450px'/>,
        icon: <SiKubernetes className='h-[50px] w-[50px]'/>,
        title: "Kubernetes",
        value: "Kubernetes",
    },

    {
        id: 11,
        background: <img src="./assets/Bg images/WordPress.jpg" alt="Linux" height='450px' width='450px'/>,
        icon: <BsWordpress className='h-[50px] w-[50px]'/>,
        title: "WordPress",
        value: "WordPress",
    },

    {
        id: 12,
        background: <img className="h-[20vh] " src="./assets/Bg images/Cloud.jpg" alt="Linux" height='450px' width='450px'/>,
        icon: <SiLaravel className='h-[50px] w-[50px]'/>,
        title: "Laravel",
        value: "Laravel",
    },




    
];