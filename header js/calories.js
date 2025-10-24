document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // ⚠️ DEFINE THE MISSING MEDICAL DISCLAIMER HERE
    const seriousHealthDisclaimer = `
        <p style="color: red; font-weight: bold; margin-top: 15px;">
            ⚠️ تنبيه طبي: إذا كنت تعاني من حالات مزمنة (مثل السكري أو ارتفاع ضغط الدم)، 
            فيجب عليك استشارة أخصائي تغذية أو طبيب. هذا الحساب هو تقدير عام فقط.
        </p>

        <p style="color: red; font-weight: bold; margin-top: 15px;">
            ⚠️ Medical Alert: If you suffer from chronic conditions (such as Diabetes or High Blood Pressure), 
            you must consult a dietitian or a doctor. This calculation is a general estimate only.
        </p>
    `;

    // 1. Gather Input Values
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const combinedFactor = parseFloat(document.getElementById('activity-level').value);
    const resultDisplay = document.getElementById('result');
    
    let bmr = 0; 
    let activityMultiplier = 1.0; // Default
    let healthFactor = 1.0;
    let healthWarning = ''; 
    
    // 2. Calculate BASE BMR 
    if (gender === 'male') {
        bmr = (13.7 * weight) + (500) - (6.7 * age); 
    } else { // female
        bmr = (9.9 * weight) + (166) - (4.7 * age);
    }

    // 3. SEPARATE the Combined Factor Logic
    // Values 1.2 to 1.9 are Activity Multipliers. Values 0.9 and 1.1 are Health Factors.
    if (combinedFactor === 0.9) {
        // Slow Metabolism / Thyroid Issue
        healthFactor = 0.9;
        healthWarning = `<p style="color: darkorange;">⚠️ تم تضمين عامل الأيض البطيء في الحساب. </p>
        <p style="color: darkorange;">⚠️ Slow metabolism factor has been included in the calculation.</p>
        `;
    } else if (combinedFactor === 1.1) {
        // Fast Metabolism
        healthFactor = 1.1;
    } else {
        // Use the selected value as the standard Activity Multiplier (1.2, 1.375, etc.)
        activityMultiplier = combinedFactor;
    }

    // 4. Calculate Final Calories (BMR * Activity * Health)
    let finalCalories = bmr * activityMultiplier * healthFactor;
    
    // 5. Output the Result
    resultDisplay.innerHTML = `
        <p>Your estimated daily calorie requirement is: </p>
        <strong>${Math.round(finalCalories)} calories/day</strong>.
        ${healthWarning}
        ${seriousHealthDisclaimer}
    `;
});
