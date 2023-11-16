class Password {
    constructor() {
      this.characters = "abcdefghijklmnopqrstuvwxyz";
      this.numbers = "1234567890";
      this.specialCharacters = "@#$%^&*()!?;:|=";
      this.password = ""
    }
  
    generateStrongPassword(len) {
      if (len < 8) {
        console.log("Password length should be atleast 8 characters")
      }
      else {
        let i = 0;
        while (i < len) {
          if (i < len) {
            this.password += this.characters[Math.floor(Math.random() * this.characters.length)]
            i++;
          }
  
          if (i < len) {
            this.password += this.characters[Math.floor(Math.random() * this.characters.length)].toUpperCase()
            i++;
          }
  
          if (i < len) {
            this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)]
            i++;
          }
  
          if (i < len) {
            this.password += this.specialCharacters[Math.floor(Math.random() * this.specialCharacters.length)]
            i++;
          }
        }
      }
    }
  
    generateWeakPassword(len) {
      if (len < 3) {
        console.log("Password length should be at least 3 characters")
      }
  
      if (len > 8) {
        console.log("Password length should not be more than 8")
      }
      else {
        let i = 0;
        while (i < len) {
          this.password += this.characters[Math.floor(Math.random() * this.characters.length)]
          i++;
        }
  
      }
    }
  
    generateMediumPassword(len) {
  
      if (len < 5) {
        console.log("Password length should be at least 5 characters")
      }
  
      if (len > 12) {
        console.log("Password length should not be more than 12")
      }
  
      else {
        let i = 0;
        while (i < len) {
          if (i < len) {
            this.password += this.characters[Math.floor(Math.random() * this.characters.length)]
            i++;
          }
  
          if (i < len) {
            this.password += this.numbers[Math.floor(Math.random() * this.numbers.length)]
            i++;
          }
  
          if (i < len) {
            this.password += this.characters[Math.floor(Math.random() * this.characters.length)].toUpperCase()
            i++;
          }
        }
      }
    }
  
    generateFunnyPassword() {
      let a = ["monkey", "hi", "hello", "passowrd", "incorrect", "really", "idiot", "funny", "strong", "weak", "hard", "easy"]
      this.password = a[Math.floor(Math.random() * a.length)]
    }
  }
  
  let p = new Password()
  p.generateMediumPassword(7)
  console.log(p.password)