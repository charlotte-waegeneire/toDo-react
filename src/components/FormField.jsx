import Input from "@/components/Input.jsx"
import { useField } from "formik"
import classNames from "classnames";

const FormField = (props) => {
    const {
        name,
        label,
        placeholder,
        className,
        ...otherProps
    } = props
    const [field, { error, touched }] = useField({ name })
    const Component = Input

    return (
        <label className={classNames("flex flex-col gap-2 m-4", className)}>
            <span>{label}</span>
            <Component
                {...field}
                {...otherProps}
                placeholder={placeholder ?? label}
            />
            {error && touched ? (
                <span className="text-red-600 text-sm">{error}</span>
            ) : null}
        </label>
    )
}

export default FormField
