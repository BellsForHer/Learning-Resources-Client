getResources().then((data) => {
    console.log(data);
    data.forEach((resource) => {
        appendResourceToDOM(resource);
    });
});

const form = document.querySelector("#form-resource");
form.addEventListener("submit", (e) => onCreateResource(e));