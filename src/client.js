import client from "@sanity/client";

export default client({
  projectId: "jsjtsccw",
  dataset: "production",
  useCdn:true,
  apiVersion: "2022-04-24"
}); 