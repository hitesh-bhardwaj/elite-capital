import React from "react";
import { Form, Input, Checkbox, Textarea } from "@heroui/react";
import LinkButton from "@/components/ui/LinkButton";

export default function App() {
    const [submitted, setSubmitted] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    // Real-time password validation
    const getPasswordError = (value) => {
        if (value.length < 4) {
            return "Password must be 4 characters or more";
        }
        if ((value.match(/[A-Z]/g) || []).length < 1) {
            return "Password needs at least 1 uppercase letter";
        }
        if ((value.match(/[^a-z]/gi) || []).length < 1) {
            return "Password needs at least 1 symbol";
        }

        return null;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Custom validation checks
        const newErrors = {};

        // Password validation
        const passwordError = getPasswordError(data.password);

        if (passwordError) {
            newErrors.password = passwordError;
        }

        // Username validation
        if (data.name === "admin") {
            newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            return;
        }

        if (data.terms !== "true") {
            setErrors({ terms: "Please accept the terms" });

            return;
        }

        // Clear errors and submit
        setErrors({});
        setSubmitted(data);
    };

    return (
        <>
            <section className="w-sscreen h-screen flex items-center justify-center ">
                <Form
                    className="w-[50%] p-[5vw] justify-center items-center space-y-4 bg-[#E5E5DC]"
                    validationErrors={errors}
                    onReset={() => setSubmitted(null)}
                    onSubmit={onSubmit}
                >
                    <div className="text-[2.9vw]">Get In Touch</div>
                    <div className="flex flex-col gap-4 max-w-md">
                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: "bg-transparent border-b-[1.5px] border-gray-500 rounded-b-none",
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your first name";
                                }
                                return errors.name;
                            }}
                            label="First Name"
                            labelPlacement="inside"
                            name="firstname"
                            type="phone"
                        />

                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: "bg-transparent border-b-[1.5px] border-gray-500 rounded-b-none",
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your last name";
                                }

                                return errors.name;
                            }}
                            label="Last Name"
                            labelPlacement="inside"
                            name="lastname"
                            type="phone"

                        />

                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: "bg-transparent border-b-[1.5px] border-gray-500 rounded-b-none",
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your email";
                                }
                                if (validationDetails.typeMismatch) {
                                    return "Please enter a valid email address";
                                }
                            }}
                            label="Email"
                            labelPlacement="outside"
                            name="email"
                            type="phone"

                        />
                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: "bg-transparent border-b-[1.5px] border-gray-500 rounded-b-none",
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your phone";
                                }
                                if (validationDetails.typeMismatch) {
                                    return "Please enter a valid phone number";
                                }
                            }}
                            label="Phone"
                            labelPlacement="inside"
                            name="phone"
                            type="phone"
                        />
                        <Input
                            isRequired
                            classNames={{
                                inputWrapper: "bg-transparent border-b-[1.5px] border-gray-500 rounded-b-none",
                                input: "bg-transparent !bg-transparent focus:!bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500",
                            }}
                            errorMessage={({ validationDetails }) => {
                                if (validationDetails.valueMissing) {
                                    return "Please enter your message";
                                }
                                if (validationDetails.typeMismatch) {
                                    return "Please enter a valid message";
                                }
                            }}
                            label="Message"
                            labelPlacement="inside"
                            name="message"
                            type="phone"
                        />
                        <Checkbox
                            isRequired
                            classNames={{
                                label: "text-small",
                            }}
                            isInvalid={!!errors.terms}
                            name="terms"
                            validationBehavior="aria"
                            value="true"
                            onValueChange={() => setErrors((prev) => ({ ...prev, terms: undefined }))}
                        >
                            Yes, I would like to receive communications about my selected communities from Elite Developments. * We will only use this information as described in our privacy policy.
                        </Checkbox>

                        {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

                        <div className="flex gap-4">
                            <LinkButton href={"/"} text={"Submit"} type="submit" />
                        </div>
                    </div>

                    {submitted && (
                        <div className="text-small text-default-500 mt-4">
                            Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                        </div>
                    )}
                </Form>
            </section>
        </>
    );
}

