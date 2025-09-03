document.addEventListener('alpine:init', () => {
  Alpine.data('signupForm', () => ({
    username: '',
    password: '',
    passwordConfirm: '',
    belt: '',
    bio: '',
    newsletter: true,
    showPass: false,

    submitForm(){
      console.log('this.username:', this.username)
      console.log('this.password:', this.password)
      console.log('this.passwordConfirm:', this.passwordConfirm)
      console.log('this.belt:', this.belt)
      console.log('this.bio:', this.bio)
      console.log('this.newsletter:', this.newsletter)
    }
  }))
  
})