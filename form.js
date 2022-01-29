
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
              alert('메세지가 보내졌습니다.');
          }, function(error) {
            alert('메세지 보내기에 실패했습니다. 다시 시도해주세요.', error);
          });
  });
}