const translations = {
    en: {
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        emailLabel: "Email",
        passwordLabel: "Password",
        buttonText: "Create Account",
        ganderLabel: "Gander",
        textMale: "Male",
        textFemale: "Female",
        confirmPasswordLabel: "Confirm Password",
        dateLabel: "Date of Birth",
    },
    ar: {
        firstNameLabel: "الاسم الأول",
        lastNameLabel: "اسم العائلة",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        buttonText: "إنشاء حساب",
        ganderLabel: "الجنس",
        textMale: "ذكر",
        textFemale: "أنثى",
        confirmPasswordLabel: "تأكيد كلمة المرور",
        dateLabel: "تاريخ الميلاد"
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
    const t = translations[lang];
    const body = document.body;

    if (lang === 'ar') {
        body.classList.add('rtl-active');
    } else {
        body.classList.remove('rtl-active');
    }

    // Updates the labels
    document.querySelector('label[for="firstName"]').textContent = t.firstNameLabel;
    document.querySelector('label[for="lastName"]').textContent = t.lastNameLabel;
    document.querySelector('label[for="email"]').textContent = t.emailLabel;
    document.querySelector('label[for="password"]').textContent = t.passwordLabel;
    document.querySelector('label[for="confirm-password"]').textContent = t.confirmPasswordLabel;
    document.querySelector('label[for="date"]').textContent = t.dateLabel;
    document.querySelector('label[for="gander"]').textContent = t.ganderLabel;
    document.querySelector('.create-account-button').textContent = t.buttonText;
    document.querySelector('label[for="male"]').textContent = t.textMale;
    document.querySelector('label[for="female"]').textContent = t.textFemale;
}


// Event listener to change the language when the dropdown value changes
document.getElementById('language-switcher').addEventListener('change', function() {
    changeLanguage(this.value);
});


const button = document.getElementById('.create-account-button');
const message = document.getElementById('message');
const isStatusTrue = true;

const createAccountButton = document.querySelector('.create-account-button');
    if (createAccountButton) {
        createAccountButton.addEventListener('click', handleButtonClick);
    }
