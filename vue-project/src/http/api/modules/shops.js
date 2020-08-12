import axios from '../../axios'

const shops = {
    getOwnShopsSync(data){
        // console.log(data);
        return axios({
            url: "/shops/getShops",
            method: "get",
            params: {managerId:data},
        })
    }
}
export default shops