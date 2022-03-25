import { useState } from 'react';
import { Carousel, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const Employees = () => {
	const [formData, setFormData] = useState({});
	const { register, handleSubmit, formState: { errors } } = useForm();

	console.log(errors);
	return (
		<>
			<Carousel className="app-carousel">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="images/slide1.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="images/slide2.png"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="images/slide3.png"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Form className="mt-4" onSubmit={handleSubmit((data) => {
				setFormData(data);
			})}>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<input className="app-input" type="text" {...register("firstName", { required: 'First name is required.', minLength: {value: 2, message: 'First name must be at least 2 characters.'} })} />
					<Form.Text className="text-muted app-text-danger">
						<div>{errors.firstName?.message}</div>
					</Form.Text>
					<Form.Text className="text-muted">
						You can type in an id (<code>/id/</code>) for auto-complete.
					</Form.Text>
				</Form.Group>

				<Button disabled={Object.keys(errors).length} variant="primary" type="submit">
					Submit
				</Button>
				{Object.keys(formData).length > 0 && (
					<div className="formData"><pre>{JSON.stringify(formData, null, 2)}</pre></div>
				)}
			</Form>
		</>
	)
}