import {Grid} from "@mui/material";
import {Container} from "./Container";

type ContainerTableProps = {
    filter: string
    containers: Container[]
}

export function ContainersTable(props: ContainerTableProps) {
    let containers = props.containers
    //  filter
    if (props.filter && props.filter != '') {
        containers = containers.filter(value => {
            return value.project_name.indexOf(props.filter) != -1 || value.service_name.indexOf(props.filter) != -1
        })
    }

    return (
        <>
            <Grid
                container
                spacing={5}
                sx={{
                    mb: "20px",
                    marginX: "auto"
                }}
            >
                {
                    containers.map((value) => (
                        <Container key={value.id} container={value} />
                    ))
                }
            </Grid>
        </>
    )
}