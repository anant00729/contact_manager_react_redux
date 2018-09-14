class Profile {
    constructor(id , name, profileDetail){
        this.id = id
        this.name = name 
        this.profileDetail = profileDetail
        this.lastName = this.getTheLastName()
        this.firstName = this.getTheFirstName()
    }

    displayAllData(){
        return `name is ${this.name} and Phone number is ${this.profileDetail.phone}`
    }

    getTheLastName(){
        if (this.name.lastIndexOf(' ') === -1) return ''
        
        const word = this.name.split(' ')
        return word[word.length - 1]
    }

    getTheFirstName(){
        const last = this.name.lastIndexOf(' ')
        if (last === -1) return this.name
        else return this.name.substring(0 , last)
    }
    
}


export default Profile 
