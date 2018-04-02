import * as restful from "../../core/restful"

let api_endpoint="http://localhost:7070"

export  function getStates() {
    return restful.getJson(api_endpoint + "/api/states")
}

export function getState(id){
    console.log("Calling Api for ID"+id)
    return restful.getJson(api_endpoint + "/api/states/"+id) 
}

