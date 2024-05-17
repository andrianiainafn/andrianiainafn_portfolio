import {IProject} from "@/type/project_type";

export const projects:IProject[] = [
    {
        type:"Personal project",
        title:"GMI",
        description:"GMI is an application for managing computer equipment, intended for businesses and organizations. GMI allows real-time monitoring of the status of equipment within the organization or company and assigning personnel to one or more pieces of equipment. It allows company personnel to request new equipment or declare that equipment requires maintenance. It also allows for managing the role of each individual within the company",
        image:"gm-i.png",
        tech:[
            {
                label:"NextAuth ",
                image:"next-auth.png"
            },
            {
                image:"icons8-nextjs.png",
                label:"NextJs"
            },
            {
                image:"icons8-spring-boot.png",
                label:"Spring boot"
            },
            {
                image:"icons8-postgresql.png",
                label:"Postgresql"
            }

        ],
        githubLink:"https://github.com/andrianiainafn/gmi_client",
        demoLink:"https://gm-i.vercel.app/"
    },
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
                image:"icons8-nextjs.png",
                label:"NextJs"
            },
            {
                image:"icons8-three.js.png",
                label:"ThreeJs"
            }

        ],
        githubLink:"https://github.com/elita-webcup/elita-webcup",
        demoLink:"https://elita.madagascar.webcup.hodi.host/"
    }
    ,{
        type:"Personal project",
        title:"Chaaat App",
        description: "Chaat: Connect with friends, share moments, and discover the world through conversations. A fun and engaging social platform to chat, share, and stay connected with people who matter most." ,
        image:"chaaat.png",
        tech:[
            {
                image:"icons8-react.png",
                label:"ReactJs"
            },{
                image: "icons8-nodejs.png",
                label: "NodeJs"
            },{
                image: "icons8-express.png",
                label: "ExpressJs"
            },{
                image: "icons8-mongodb.png",
                label: "MongoDb"
            }

        ],
        githubLink:"https://github.com/andrianiainafn/chaat",
        demoLink:"https://chaat-afn.netlify.app/"
    },
    {
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
                image:"icons8-nextjs.png",
                label:"NextJs"
            },{
                image: "next-auth.png",
                label: "NextAuth"
            }

        ],
        githubLink:"https://github.com/Elita-6/devhunt-client-starter-project",
        demoLink:"https://elita-devhunt.vercel.app/"
    },
    {
        type:"Team project",
        title:"Elita team website",
        description: "CodigoElita: Transforming ideas into digital solutions. We're your digital startup partner, turning concepts into powerful digital assets that serve your clients' needs. From ideation to execution, CodigoElita is your gateway to a digital future " ,
        image:"elita-website.png",
        tech:[
            {
                label:"Tailwind ",
                image:"icons8-tailwind.png"
            },
            {
                image:"icons8-nextjs.png",
                label:"NextJs"
            }

        ],
        githubLink:"https://github.com/andrianiainafn/CodigoElita_website",
        demoLink:"https://codigoelita.vercel.app/#services"
    }
]