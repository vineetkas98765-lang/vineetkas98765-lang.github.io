const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const name = String(data.get('name') || '').trim();
  const contact = String(data.get('email') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  const destination = 'vinnikashyap07@gmail.com'; // Replace with your real business email.
  const subject = encodeURIComponent('Website enquiry: ' + service);
  const body = encodeURIComponent(
    'Name: ' + name + '\nContact: ' + contact + '\nService: ' + service +
    '\n\nRequirement:\n' + message
  );
  document.querySelector('#formStatus').textContent =
    'Your email app should open with the enquiry prepared. If it does not, email your business address directly.';
  window.location.href = 'mailto:' + destination + '?subject=' + subject + '&body=' + body;
});
