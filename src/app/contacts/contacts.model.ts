export class Contact{
    constructor(public name :string,public email :string,public id: number,public phone :number, public imageUrl: string, public group: []){
        this.name = name;
        this.email = email;
        this.id = id;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.group = group
    }
}