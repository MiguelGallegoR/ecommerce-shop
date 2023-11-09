import {useParams} from "react-router-dom";
export function Gender() {
    const {gender} = useParams();
    return (
        <div>
            <h1>{gender}</h1>
        </div>
    )

}