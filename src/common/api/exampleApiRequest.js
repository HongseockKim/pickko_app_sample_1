import exampleApi from "./exampleApi.js";

class ExampleApiRequest{
    async exampleApiRequest(){
        try {
            const data = await exampleApi.exampleApi();
            return data.data;
        } catch (err){
            console.log("=>(exampleApiRequest.js:7) err", err);
        }
    }
}


const exampleApiRequest = new ExampleApiRequest();
export default exampleApiRequest;
