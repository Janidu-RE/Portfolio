const Skills = () => {
    const skills = {
        "Frontend": ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        "Backend": ["Java", "Spring Boot", "Node.js", "Express"],
        "Database": ["MongoDB", "PostgreSQL", "SQLite"],
        "DevOps": ["Docker", "Jenkins", "AWS", "Terraform"]
    };

    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                 <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {items.map((skill) => (
                                    <li key={skill} className="text-gray-600 text-sm">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default Skills;
