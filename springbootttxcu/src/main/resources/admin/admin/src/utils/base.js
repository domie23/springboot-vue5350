const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootttxcu/",
            name: "springbootttxcu",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "高校毕业生离校管理系统"
        } 
    }
}
export default base
