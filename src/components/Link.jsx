import NextLink from "next/link"
import classNames from "classnames";

const Link = (props) => {
    const { className, ...otherProps } = props

    return (
        <NextLink
            {...otherProps}
            className={classNames("hover:underline", className)}
        />
    )
}

export default Link
