class SettingsCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.formData = {
      email: User.current.email,
      name: User.current.name,
      apellidos: User.current.apellidos,
      image: User.current.image,
      username: User.current.username,
      date_birthday: User.current.date_birthday,
      dni: User.current.dni
    }
    this.logout = User.logout.bind(User);
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      (user) => {
        this._$state.go('app.profile.main', {username:user.username})
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default SettingsCtrl;
