module.exports = {
    makeRequest: () => {
        console.log('make reqeust call')
        console.log(this)
        this.helper()
    },
    helper() {
        console.log('helper call')
    }
}