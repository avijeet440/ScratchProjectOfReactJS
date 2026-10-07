import { useForm } from 'react-hook-form'
import Container from './Container'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Button from './Button'
const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        reset()
    }

    return (
        <Section
            id="contact"
            className="bg-neutral-950"
        >
            <Container className="max-w-3xl">

                <SectionHeading
                    eyebrow="Contact"
                    title="Let's Work Together"
                    description="Have a project or an opportunity? Feel free to get in touch."
                    align='center'
                />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-10 space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name')}
                        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-blue-600"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        {...register('email')}
                        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-blue-600"
                    />

                    <textarea

                        rows="6"
                        placeholder="Your Message"
                        {...register('message')}
                        className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-blue-600"
                    />

                    <Button variant='secondary' type="submit">
                        Send Message
                    </Button>

                </form>

            </Container>
        </Section>
    )
}

export default Contact