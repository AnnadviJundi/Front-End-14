import styled from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function(props){
        if (props.variant === "primary") {
            return "linear-gradient(90deg, rgba(58,52,163,1) 0%, rgba(73,73,182,1) 48%, rgba(37,218,255,1) 100%);";
        } 

        else if (props.variant === "secondary") {
            return "linear-gradient(90deg, rgba(0,174,255,1) 0%, rgba(224,48,48,1) 63%, rgba(255,48,48,1) 100%)";
        } 

        else {
            return "#4361ee";
        }
    }}
`


export default Button;