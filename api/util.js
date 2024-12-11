const getResponseHeaders = ()=>{
    return {
        'Access-Control-Allow-Origin':'*'
    }
}
const getUserId = (headers) => {
  return headers.app__user_id;
}
const getUserName = (headers) => {
  return headers.app__user_name;
}


module.exports = {
    getResponseHeaders,
    getUserId,
    getUserName
}