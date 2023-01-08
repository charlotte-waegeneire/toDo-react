import Button from "@/components/Button.jsx"
import FormField from "@/components/FormField.jsx"
import {nameValidator} from "@/validators.js"
import {Form, Formik} from "formik"
import * as yup from "yup"
import classNames from "classnames";
import {XMarkIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

const defaultValidationSchema = yup.object().shape({
    name: nameValidator.required(),
})

const defaultInitialValues = {
    name: "",
}

const TodoForm = (props) => {
    const {
        actionName,
        target,
        className,
        onSubmit,
        initialValues = defaultInitialValues,
        validationSchema = defaultValidationSchema,
    } = props

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            <Form className={classNames("flex flex-col gap-4", className)}>
                <div className="flex justify-between w-full border border-gray-200 p-4">
                    <h1 className="text-2xl font-bold bg-white">{ actionName } { target }</h1>
                    <Link href={`/`}>
                        <XMarkIcon className="h-8 w-8"/>
                    </Link>
                </div>
                <FormField name="name" label="Description"/>
                <Button type="submit" className="mt-8 m-4">
                    SAVE
                </Button>
            </Form>
        </Formik>
    )
}

export default TodoForm
