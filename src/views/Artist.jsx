import { useParams } from "react-router"

export function Artist() {

    let { name } = useParams()

    return (<>
        <p>Artist: { name }</p>
    </>)
}