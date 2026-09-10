interface SkillGroup{
    category: string;
    items: string[];
}

const skillGroup: SkillGroup[] = [
    {category: "Languages", items: ["Javascript", "TypeScript", "C++", "Python", "Java", "SQL", "R"]},
    {category: "Frontend", items: ["React", "HTML", "CSS"]},
    {category: "Tools", items: ["Git", "GitHub", "VS Code", "Vite"]},
];

export default function Skills(){
    return (
        <section> 
            <h2>Skills</h2>
            {skillGroup.map((group) => (
                <div className="skills-group" key={group.category}>
                    <h3>{group.category}</h3>
                    <ul>
                        {group.items.map((item)=>(
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}