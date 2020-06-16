class User {
    constructor(id, name, department, jobTitle, phone, email, loginId, password, imageUrl) {
        this.id = id; 
        this.name = name;
        this.department = department; 
        this.jobTitle = jobTitle; 
        this.phone = phone; 
        this.email = email; 
        this.loginId = loginId; 
        this.password = password;
        this.imageUrl = imageUrl;
    }
}

export default User;