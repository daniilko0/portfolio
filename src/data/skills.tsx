import {SiCsharp, SiDotnet, SiGit, SiPowershell, SiReact, SiTypescript} from "react-icons/all";
import {Skill} from "../types/skill";

const skills: Skill[] = [
    {
        id: "csharp",
        tooltip: "C#",
        icon: <SiCsharp/>
    },
    {
        id: "dotnet",
        tooltip: ".NET",
        icon: <SiDotnet/>
    },
    {
        id: "powershell",
        tooltip: "Powershell",
        icon: <SiPowershell/>

    },
    {
        id: "typescript",
        tooltip: "Typescript",
        icon: <SiTypescript/>
    },
    {
        id: "react",
        tooltip: "React",
        icon: <SiReact/>
    },
    {
        id: "git",
        tooltip: "Git",
        icon: <SiGit/>
    }
]

export default skills;
