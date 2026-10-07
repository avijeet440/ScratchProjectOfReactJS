import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    console.log(project)
    console.log(project.image)
    const navigate = useNavigate();
    const handleViewProject = () => {
        navigate(`/projects/${project.id}`);
    }
    return (
        <>
            <div className='flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950'>
                <img src={project.image} alt={project.title} className='h-52 w-full object-cover' />
                <div className='flex flex-1 flex-col p-6'>
                    <h3 className='text-xl font-bold text-white'>
                        {project.title}

                    </h3>
                    <p className='mt-3 leading-7 text-neutral-400'>
                        {project.description}
                    </p>
                    <div className='mt-5 mb-3 flex flex-wrap gap-2'>
                        {project.technologies.map((technology) => {
                            return (<span className='rounded-md bg-neutral-800 px-3 py-1 text-sm  border border-neutral-600  hover:border-blue-500  hover:text-blue-400 text-neutral-300'>
                                {technology}
                            </span>)
                        })}

                    </div>
                    <Button className="mt-auto pt-6 text-white text-left font-semibold transition flex items-center flex-col  hover:text-blue-400" handleClick={handleViewProject} variant='secondary' >VIEW PROJECT</Button>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
