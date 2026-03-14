import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// sanity client
export const client = sanityClient({
  projectId: "cqrq3hz4",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "skvjNAC1DbVJHnxxUYt95pBqXRPs8C8znaJR0Ehf5eInQStXdq7KYmFPE5JwdbuqbWq9dSG2lZIrwCoqR4l6pRnpPFsXhJjrfmrS3azhl3wcAelZQlOMx7gWtlOBgBOeLOH6kljHKYIddmfHSQRt9YlIQSInpJPIYBn7uK6Y90eqCQofN2AF",
  ignoreBrowserTokenWarning: true,
});

// sanity img url builder
const builder = imageUrlBuilder(client);

// export image
export const urlFor = (source) => builder.image(source);
