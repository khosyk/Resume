const inputValue = document.querySelectorAll('input');
const textareaValue = document.querySelector('textarea');
  // https://dashboard.emailjs.com/admin/integration
emailjs.init('user_X3WvHBNDXbyaJrxoVv13k');
window.onload = function() {
  document.getElementById('contact_form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_dztr32w', 'template_7f0psal', this)
          .then(function() {
            swal("감사합니다!", "메일이 성공적으로 보내졌습니다.", "success");
            textareaValue.value = '';
            inputValue.forEach(el => {
              el.value = '';
            });
          }, function(error) {
            swal("이런!", "에러가 발생했습니다.", "error");
            console.log(error);
          });
  });
}