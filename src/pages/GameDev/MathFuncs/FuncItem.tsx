import { MathJax } from "better-react-mathjax";


/**
 * Properties for the function item
 */
export interface FuncItemProps {
    /**
     * The Latex code
     */
    latex: string,

    /**
     * The size of the MathJax text (defaults to huge)
     */
    size?: string,
}

/**
 * A single function listing
 */
const FuncItem = (props: FuncItemProps) => {
    const size: string = !!props?.size ? props.size : "huge"
    return (
        <MathJax className="p-2">{`\\(\\${size}{  ${props.latex}  }\\)`}</MathJax>
    );
}

export default FuncItem;