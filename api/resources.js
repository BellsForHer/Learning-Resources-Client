function createResource(resource) {
    return fetch("http://localhost:3000/resources", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
    }).then((res) => res.json())
}

function updateResource(id, updated_resource) {
    return fetch(`http://localhost:3000/resources/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updated_resource),
    }).then((res) => res.json())
}


function deleteResource(id) {
    return fetch(`http://localhost:3000/resources/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
}