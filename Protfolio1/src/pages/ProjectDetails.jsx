import React from 'react'
import { projects } from '../data/portfolioData'
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
const ProjectDetails = () => {
    const { id } = useParams();
    console.log(id);
    const project = projects.find((project) => project.id == id);
    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4">

                <div className="text-center">

                    <h1 className="text-4xl font-bold text-white">
                        Project Not Found
                    </h1>

                    <Link to="/" className="mt-6 inline-block">
                        <Button>
                            Back Home
                        </Button>
                    </Link>

                </div>

            </main>
        )
    }
    return (
        <main className="min-h-screen bg-neutral-950 py-24">

            <Container className="max-w-5xl">

                {/* Back */}

                <Link
                    to="/"
                    className="font-medium text-blue-500 transition hover:text-blue-400"
                >
                    <Button variant='secondary'> ← Back to Portfolio</Button>
                </Link>

                {/* Image */}

                <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 h-80 w-full rounded-xl object-cover"
                />

                {/* Title */}

                <h1 className="mt-8 text-4xl font-bold text-white sm:text-5xl">
                    {project.title}
                </h1>

                {/* Description */}

                <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
                    {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-3">

                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-neutral-300"
                        >
                            {technology}
                        </span>
                    ))}

                </div>

            </Container>

        </main>
    )
}

export default ProjectDetails
