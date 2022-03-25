import { useState, useEffect } from 'react';
import { Carousel, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const Employees = () => {
	const [formData, setFormData] = useState({});
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			department: 'Sales'
		}
	});
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:5000/employees');
			const employees = await response.json();
			setEmployees(employees);
		})();
	}, []);

	return (
		<>
			<Carousel className="app-carousel">
				{employees.map(employee => {
					return (

						<Carousel.Item>
							<img
								className="d-block w-100"
								src={`images/employees/employee_${employee.id}.jpg`}
							/>
							<Carousel.Caption>
								<h3>{employee.firstName} {employee.lastName}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>

			<Form className="mt-4" onSubmit={handleSubmit((data) => {
				setFormData(data);
			})}>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<input className="app-input" type="text" {...register("firstName", { required: 'First name is required.', minLength: { value: 2, message: 'First name must be at least 2 characters.' } })} />
					<Form.Text className="text-muted app-text-danger">
						<div>{errors.firstName?.message}</div>
					</Form.Text>
					<Form.Text className="text-muted">
						You can type in an id (<code>/id/</code>) for auto-complete.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<input className="app-input" type="text" {...register("lastName", { required: 'Last name is required.', minLength: { value: 2, message: 'Last name must be at least 2 characters.' } })} />
					<Form.Text className="text-muted app-text-danger">
						<div>{errors.lastName?.message}</div>
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Department</Form.Label>
					<input className="app-input" type="text" {...register("department", { required: 'Department is required.' })} />
					<Form.Text className="text-muted app-text-danger">
						<div>{errors.department?.message}</div>
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