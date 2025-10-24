const translations = {
    en: {
        loginTitle: "Log In",
        loginButton: "Log In",
        guestSignInButton: "Sign In as Guest",
        createAccountTitle: "Create an Account",
        emailLabel: "Email",
        emailPlaceholder: "Email",
        passwordLabel: "Password",
        passwordPlaceholder: "Password",
        createAccountButton: "Create Account",
        orSignUpWith: "or sign up with",
        createAccountMessage: "Account created successfully!"
    },
    ar: {
        loginTitle: "تسجيل الدخول",
        loginButton: "تسجيل الدخول",
        guestSignInButton: "تسجيل الدخول كضيف",
        createAccountTitle: "إنشاء حساب",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "كلمة المرور",
        createAccountButton: "إنشاء حساب",
        createAccountMessage: "تم إنشاء الحساب بنجاح!"
    }
};

const languageSwitcher = document.getElementById('language-switcher');
let currentLang = localStorage.getItem('lang') || 'en';

if (languageSwitcher) {
    languageSwitcher.value = currentLang;
    languageSwitcher.addEventListener('change', (event) => {
        currentLang = event.target.value;
        localStorage.setItem('lang', currentLang);
        updateContent(currentLang);
    });
}

function updateContent(lang) {
    const content = translations[lang];
    const body = document.body;

    if (lang === 'ar') {
        body.classList.add('rtl-active');
    } else {
        body.classList.remove('rtl-active');
    }

    const h2 = document.querySelector('.card-title');
    const pageIsLogin = document.title.includes("Log In");
    
//linke each eng word to ar word
    if (pageIsLogin) {
        if (h2) h2.textContent = content.loginTitle;
        const createAccountP = document.querySelector('.card-top-text');
        if (createAccountP) createAccountP.innerHTML = content.createAccountLink;
        const emailLabel = document.querySelector('.input-label[for="email"]');
        if (emailLabel) emailLabel.textContent = content.emailLabel;
        const passwordLabel = document.querySelector('.input-label[for="password"]');
        if (passwordLabel) passwordLabel.textContent = content.passwordLabel;
        const loginButton = document.querySelector('.log-in-button');
        if (loginButton) loginButton.textContent = content.loginButton;
        const separator = document.querySelector('.separator');
        if (separator) separator.textContent = content.orLoginWith;
        const guestSignInButton = document.querySelector('.guest-sign-in-button');
        if (guestSignInButton) guestSignInButton.textContent = content.guestSignInButton;
    } else {
        if (h2) h2.textContent = content.loginTitle;
        const loginLinkP = document.querySelector('.card-top-text');
        if (loginLinkP) loginLinkP.innerHTML = content.loginLink;
        const firstNameGroup = document.querySelector('.input-group .input-label[for="firstName"]');
        if (firstNameGroup) {
            firstNameGroup.parentNode.style.display = 'none';
        }
        const lastNameGroup = document.querySelector('.input-group .input-label[for="lastName"]');
        if (lastNameGroup) {
            lastNameGroup.parentNode.style.display = 'none';
        }
        const emailLabel = document.querySelector('.input-label[for="email"]');
        if (emailLabel) emailLabel.textContent = content.emailLabel;
        const passwordLabel = document.querySelector('.input-label[for="password"]');
        if (passwordLabel) passwordLabel.textContent = content.passwordLabel;
        const loginButton = document.querySelector('.log-in-button');
        if (loginButton) loginButton.textContent = content.loginButton;
        const separator = document.querySelector('.separator');
        if (separator) separator.textContent = content.orSignUpWith;
        const guestSignInButton = document.querySelector('.guest-sign-in-button');
        if (guestSignInButton) guestSignInButton.textContent = content.guestSignInButton;

    }
}

function handleButtonClick() {
    const cardTitle = document.querySelector('.card-title');
    if (cardTitle) {
        cardTitle.textContent = translations[currentLang].signupSuccessMessage;
        cardTitle.style.color = '#5A1F7B';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);

    const guestSignInButton = document.querySelector('.guest-sign-in-button');
    if (guestSignInButton) {
        guestSignInButton.addEventListener('click', () => {
            window.open('/dashboard.html');
        });
    }

    const loginButton = document.querySelector('.log-in-button');
    if (loginButton) {
        loginButton.addEventListener('click', handleButtonClick);
    }

    
});

function handleCredentialResponse(response) {
  const idToken = response.credential;
  console.log('Google ID Token:', idToken);
}
