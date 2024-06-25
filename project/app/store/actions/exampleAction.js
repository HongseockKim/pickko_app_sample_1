import {useQuery} from "react-query";
import exampleApi from "../../api/exampleApi.js";

export const exampleLists = async() => {
    try {
        return  useQuery('exampleAPi',exampleApi.exampleApi);
    } catch (err){
        return err;
    }
}