import {IProject} from "@/type/project_type";

export const projects:IProject[] = [
    {
        type:"Hackathon project",
        title:"Dot Double Zero [.00]",
        description:"\".00\" or \"Dot double zero\" is a website that offers an agent the possibilities to receive a mission assignment; to receive the necessary documents; to remotely command the activation of their gadgets and transportation tools. Each agent in a mission can be remotely assisted by their teammates using GPS location and also a distress signal on the map in case of alert.",
        image:"webcup24.png",
        tech:[
            {
                label:"Tailwind ",
                image:"icons8-tailwind.png"
            },
            {
                image:"icons8-nextJs.png",
                label:"NextJs"
            },
            {
                image:"icons8-three.js.png",
                label:"ThreeJs"
            }

        ],
        githubLink:"https://github.com/elita-webcup/elita-webcup",
        demoLink:"https://elita.madagascar.webcup.hodi.host/"
    },{
        type:"Hackathon project",
        title:"Miray App",
        description: "Our Student Q&A Platform facilitates seamless communication and collaboration among students. Users can pose inquiries on a wide range of academic subjects and contribute insightful responses to peers' queries. With features like upvoting and downvoting, users actively shape the platform's content. Additionally, they can follow specific topics or users to stay informed and engaged." ,
        image:"miray.png",
        tech:[
            {
                label:"Tailwind ",
                image:"icons8-tailwind.png"
            },
            {
                image:"icons8-nextJs.png",
                label:"NextJs"
            },{
                image: "next-auth.png",
                label: "NextAuth"
            }

        ],
        githubLink:"https://github.com/Elita-6/devhunt-client-starter-project",
        demoLink:"https://elita-devhunt.vercel.app/"
    }
]