async function fetchGraphQL(query) {
    const res = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        }
    );

    const { data } = await res.json();
    return data;
}

const getProjects = async () => {
    const query = `
    {
        projectCollection {
            items {
                title
                description
                stack
                image {
                    url
                }
                linksCollection {
                    items {
                        label
                        url
                    }
                }    
            }
        }
    }
    `
    const data = await fetchGraphQL(query)
    return data.projectCollection.items
}

export {
    getProjects
}