import classNames from "classnames";

const Input = (props) => {
    const { className, ...otherProps } = props

    return (
        <input
            {...otherProps}
            className={classNames("border-2 px-3 py-1.5", className)}
        />
    )
}

export default Input
