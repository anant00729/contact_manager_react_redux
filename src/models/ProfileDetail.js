class ProfileDetail {
    constructor(email, phone, age){
        this.email = email
        this.phone = phone
        this.age = age
        this.btnClassName = ''
        this.btnMessage = ''
        this.checkAge()
    }

    checkAge(){
        this.btnClassName = this.age > 18 ? 'btn btn-success' : 'btn btn-warning text-light'
        this.btnMessage = this.age > 18 ? 'Yes I am an adult' : 'Yes I am an chotu'
    }
}
export default ProfileDetail 