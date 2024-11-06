import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';  // Import the CSS file

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="input-group">
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Email must be valid"
                        }
                    })}
                    className="login-input"
                />
                {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div className="input-group">
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    className="login-input"
                />
                {errors.password && <p className="error-text">{errors.password.message}</p>}
            </div>

            <button type="submit" className="login-button">Submit</button>
        </form>
    );
}

export default LoginForm;
