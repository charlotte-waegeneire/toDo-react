import classNames from "classnames";

const variants = {
    primary: "bg-blue-500 active:bg-blue-500 text-white",
    secondary: "active:bg-slate-100 text-slate-900",
}

const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base font-semibold",
}

const Button = (props) => {
    const { variant = "primary", size = "md", className, ...otherProps } = props

    return (
        <button
            className={classNames(variants[variant], sizes[size], className)}
            {...otherProps}
        />
    )
}

export default Button
