import externalApiRequest from './../config/externalApi';

const listingConnector = (content) => {
    const options = {
        api: 'listing',
        content
    };
    console.log("api", externalApiRequest(options))
    return externalApiRequest(options);
};

export default listingConnector;
