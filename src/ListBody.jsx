import React from "react";

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1em"
    },
    name: {
        fontSize: "2em", 
        color: "black", 
        fontWeight: "bold"
    },
    description: {
        fontSize: "1.5em", 
        color: "black"
    }
};

const ListBody = ({name, description}) => ( 
    <div style={styles.wrapper}>
        <span style={styles.name}>{name}</span> 
        <span style={styles.description}> {description}</span>
    </div> 
)

export default ListBody; 