// Redirect from Welcome to Main
document.getElementById('welcomeButton').addEventListener('click', () => {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  });
  
  // Double click bonus
  function showSecret() {
    document.getElementById('secretMessage').style.display = 'block';
  }
  
  // Keypress detection
  document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Image gallery
  const images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffurtherafrica.com%2F2023%2F02%2F12%2Fwho-are-africas-most-famous-celebrities%2F&psig=AOvVaw1pMva_gRUPNFT3fY1TXeV_&ust=1745496054786000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLituPeN7owDFQAAAAAdAAAAABAE",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtgsR25zT9zsb3Oqbuo8am9DtgBq50da2h2_YEtklRqfS8fAEOvfcZhPRLv7CaDuenHQ&usqp=CAU",
    "https://imgix.ranker.com/user_node_img/44/866485/original/djimon-hounsou-photo-u28?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355"
  ];
  let index = 0;
  function showNextImage() {
    index = (index + 1) % images.length;
    document.getElementById('galleryImage').src = images[index];
  }
  
  // Tabs
  function openTab(tabId) {
    document.querySelectorAll('.tabContent').forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }
  
  // Real-time form validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  nameInput.addEventListener('input', () => {
    document.getElementById('nameFeedback').textContent = nameInput.value.length >= 3 ? '✅ Good!' : '❌ Name too short';
  });
  
  emailInput.addEventListener('input', () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    document.getElementById('emailFeedback').textContent = valid ? '✅ Valid email' : '❌ Invalid email';
  });
  
  passwordInput.addEventListener('input', () => {
    const strong = passwordInput.value.length >= 8 && /[\W_]/.test(passwordInput.value);
    document.getElementById('passwordFeedback').textContent = strong ? '✅ Strong password' : '❌ Weak (use symbols)';
  });
  
  // Final form submission
  document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
  