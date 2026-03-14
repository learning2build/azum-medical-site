/**
 * Wellness Insights articles — from azummedical.com/blog-collection/
 * Each article has a slug, title, intro (preview), and sections for the full page.
 */

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export const WELLNESS_ARTICLES = [
  {
    slug: "wellness-visit",
    title: "The Wellness Visit: Why It's More Important Than You Think",
    intro:
      "A wellness visit—also called a preventive health check-up—is one of the most important things you can do for your health, even if you're feeling fine. It's not just about getting a quick exam or testing for sickness; it's about taking a proactive approach to your well-being. Think of it like an annual tune-up for your body, where your doctor can spot potential issues early, give advice on staying healthy, and help prevent serious problems down the road.",
    sections: [
      {
        paragraphs: [
          "In this blog, we'll explain what a wellness visit is, why it matters, and what you can expect during the appointment.",
        ],
      },
      {
        heading: "What is a Wellness Visit?",
        paragraphs: [
          "A wellness visit is an appointment with your primary care doctor to check your overall health and wellness. It's not focused on treating illness, but rather on prevention and early detection. During this visit, your doctor will look at your current health status, review any risks for future health problems, and offer advice to help you stay well.",
          "A wellness visit typically includes a combination of: discussion about any health concerns or questions you might have; lifestyle advice (about diet, exercise, stress management, etc.); vaccinations (if needed); health screenings and tests (like blood pressure, cholesterol, or blood sugar checks); and a thorough physical exam.",
          "Even if you feel great, these visits are essential for keeping things that way.",
        ],
      },
      {
        heading: "Why Are Wellness Visits So Important?",
        paragraphs: [
          "Many people only visit the doctor when they're sick or in pain. But by the time you notice symptoms, some conditions might already be advanced. The goal of a wellness visit is to catch potential health problems early, before they turn into bigger, more expensive issues.",
          "Here are a few reasons why wellness visits are so important: (1) Health goals and support—wellness visits give you a chance to discuss your health goals (losing weight, quitting smoking, managing stress), and your doctor can provide guidance and resources. (2) Create a personalized health plan—your doctor will look at your age, lifestyle, family history, and risk factors to create a plan tailored to you, including advice on diet, exercise, stress management, and other habits. (3) Monitor your mental health—mental health is just as important as physical health; your doctor may ask about how you're feeling emotionally and offer help if needed. (4) Screen for cancer—some cancers (breast, colon, cervical) can be treated more successfully if caught early. (5) Update vaccinations—vaccines like flu shot or pneumonia vaccine need to be updated as you age. (6) Prevent chronic diseases—conditions like heart disease, diabetes, and high blood pressure often don't have obvious symptoms early; regular check-ups can catch these before they become serious.",
        ],
      },
      {
        heading: "What Happens During a Wellness Visit?",
        paragraphs: [
          "Medical history review: Your doctor will ask about your medical history, including past illnesses, surgeries, or conditions, and your family's health history. Be honest and open—it helps your doctor assess potential risks.",
          "Physical exam: The doctor will perform a basic physical exam, which may include palpating areas of your body, examining eyes/ears/nose/throat, checking your skin, blood pressure, heart and lungs, and height/weight/BMI.",
          "Blood work and screenings: Your doctor may recommend lab tests or screenings—cancer screenings (e.g. mammograms, colonoscopies), diabetes screening, blood pressure check, and blood tests for cholesterol, blood sugar, and organ function.",
          "Lifestyle and risk factor discussion: Your doctor will ask about habits (smoking, alcohol), sleep, stress, exercise, and diet, and offer guidance on improving these areas.",
          "Mental health check: You may be asked about mood, stress, and any signs of depression or anxiety. Your doctor can suggest resources or treatments if needed.",
          "Preventive care and vaccines: Depending on your age, gender, and health status, your doctor may recommend certain vaccines (flu, shingles, COVID-19 boosters) or preventive medications.",
          "Setting health goals: Finally, your doctor will talk with you about setting specific, realistic health goals for the year and suggest strategies and resources to help you achieve them.",
        ],
      },
      {
        heading: "How Often Should You Have a Wellness Visit?",
        paragraphs: [
          "For most adults, having a wellness visit once a year is recommended. If you have specific health concerns or conditions (like diabetes or heart disease), your doctor may suggest more frequent visits. For children, wellness visits are typically scheduled based on age, with well-child visits at regular intervals during early years.",
        ],
      },
      {
        heading: "What If I Feel Fine—Do I Still Need a Wellness Visit?",
        paragraphs: [
          "Yes! Even if you feel completely healthy, a wellness visit is still important. Many health problems develop slowly and don't show symptoms right away. Regular check-ups help catch potential issues early, when they are easier to treat and manage. Additionally, a wellness visit helps you stay on top of vaccinations, screenings, and general health.",
        ],
      },
      {
        heading: "Conclusion: Take Charge of Your Health",
        paragraphs: [
          "A wellness visit is your opportunity to take charge of your health and make sure you're on track for a long, healthy life. It's about prevention, not just waiting until you're sick to see the doctor. By catching potential health problems early, staying on top of your lifestyle, and addressing any concerns you may have, wellness visits can save you from more serious issues down the line.",
          "So, if you haven't had your wellness visit recently, schedule one today—it's one of the best things you can do for your long-term health!",
        ],
      },
    ],
  },
  {
    slug: "hypertension",
    title: "Hypertension: What You Need to Know in Simple Terms",
    intro:
      "Hypertension, or high blood pressure, is a common condition that many people don't even realize they have. It's often called the \"silent killer\" because it can damage your heart, brain, kidneys, and other organs without causing any noticeable symptoms. But don't worry! Hypertension can be controlled, and understanding the basics can make a big difference in your health.",
    sections: [
      {
        paragraphs: [
          "In this blog, we'll explain hypertension in simple terms—what it is, why it matters, and how you can prevent or manage it.",
        ],
      },
      {
        heading: "What is Hypertension (High Blood Pressure)?",
        paragraphs: [
          "To understand hypertension, it's important to know a bit about blood pressure. Blood pressure is the force of your blood pushing against the walls of your blood vessels as your heart pumps it around your body. We measure it using two numbers: systolic pressure (the top number)—the pressure when your heart beats—and diastolic pressure (the bottom number)—the pressure when your heart is resting between beats.",
          "A normal blood pressure reading is around 120/80 mmHg. If your blood pressure is consistently above 130/80 mmHg, you have high blood pressure, or hypertension.",
        ],
      },
      {
        heading: "Why is Hypertension a Big Deal?",
        paragraphs: [
          "High blood pressure forces your heart and blood vessels to work harder than they should. Over time, this extra strain can cause serious health problems: aneurysm (weakened vessels can bulge or rupture); vision problems; kidney damage; stroke; and heart disease (heart attacks or heart failure). Even though hypertension often doesn't cause symptoms, it still does damage over time, which is why it's important to keep it in check.",
        ],
      },
      {
        heading: "What Causes Hypertension?",
        paragraphs: [
          "Hypertension can happen for many reasons. Common factors include stress; lifestyle (too much salt, alcohol, or not enough exercise); weight (being overweight puts extra strain on heart and vessels); age (blood pressure tends to rise as you get older); and genes (family history).",
          "There's also secondary hypertension, which happens because of another condition (e.g. kidney disease or sleep apnea). Most people have primary hypertension, which develops over time without a single clear cause.",
        ],
      },
      {
        heading: "How Do You Know if You Have Hypertension?",
        paragraphs: [
          "Hypertension often doesn't cause obvious symptoms. Many people don't know they have it until it's found during a routine check-up. Some may have mild symptoms like headaches or dizziness when blood pressure is very high. The best way to know is to get your blood pressure checked regularly—at the doctor's office or at home with a blood pressure cuff.",
        ],
      },
      {
        heading: "What Can You Do to Lower Your Blood Pressure?",
        paragraphs: [
          "Eat healthier: Limit unhealthy fats; eat more fruits and vegetables; cut down on salt and processed foods.",
          "Get active: Aim for 30 minutes of moderate exercise most days (walking, swimming, biking).",
          "Lose weight: Losing even a small amount can help. Make gradual changes to diet and exercise.",
          "Cut back on alcohol and caffeine: Stick to moderate amounts. Limit caffeine to one or two cups of coffee per day.",
          "Quit smoking: Smoking damages blood vessels and raises blood pressure.",
          "Manage stress: Try deep breathing, yoga, or meditation.",
          "Take your medications (if needed): If your doctor prescribes medication, take it as prescribed and don't stop without consulting your doctor.",
        ],
      },
      {
        heading: "Why Regular Checkups Are Important",
        paragraphs: [
          "Since high blood pressure often has no noticeable symptoms, regular checkups are key. If you're 40 or older (or younger with risk factors), check your blood pressure at least once a year. It could save your life!",
        ],
      },
      {
        heading: "Final Thoughts",
        paragraphs: [
          "Hypertension may be \"silent,\" but it's not harmless. If left unchecked, it can lead to serious health problems. The good news is you can manage and even prevent it with simple changes to diet, lifestyle, and habits. Take small steps now—eat healthier, exercise more, check your blood pressure regularly—and your heart and overall health will thank you!",
          "If you're concerned about your blood pressure, schedule an appointment today.",
        ],
      },
    ],
  },
  {
    slug: "diabetes",
    title: "Diabetes: What You Need to Know in Simple Terms",
    intro:
      "Diabetes is one of the most common health conditions in the world today, but many people don't fully understand what it is or how it affects the body. Whether you or someone you know has diabetes, or you just want to learn more, this blog will break it down in simple terms.",
    sections: [
      {
        heading: "What is Diabetes?",
        paragraphs: [
          "Diabetes is a condition where your blood sugar (glucose) levels are too high. Glucose comes from the foods you eat (bread, rice, fruit, sweets). Normally, your body uses insulin—a hormone made by the pancreas—to move glucose from your blood into your cells for energy. In people with diabetes, the body either doesn't make enough insulin or can't use it properly, leading to high blood sugar levels.",
          "Type 1 diabetes: The body doesn't make any insulin (the immune system attacks the pancreas cells that make insulin). It's usually diagnosed in children, teens, or young adults. People with Type 1 need insulin injections or an insulin pump daily.",
          "Type 2 diabetes: The body doesn't make enough insulin or doesn't use it effectively (insulin resistance). It's more common in adults, especially those overweight, inactive, or with a family history—but it's becoming more common in children. It can often be managed with lifestyle changes; some people also need medications or insulin.",
        ],
      },
      {
        heading: "Why Does Diabetes Matter?",
        paragraphs: [
          "If left untreated or poorly managed, diabetes can cause serious health problems: infections (harder to fight off); eye problems and vision loss; nerve damage (pain or numbness in feet and hands); kidney damage; and heart disease.",
        ],
      },
      {
        heading: "Symptoms of Diabetes",
        paragraphs: [
          "Common signs include: increased thirst and frequent urination; fatigue; blurred vision; unexplained weight loss (especially Type 1); and slow healing of cuts and infections. Many symptoms develop slowly, especially in Type 2, so regular screening is important.",
        ],
      },
      {
        heading: "Risk Factors for Diabetes",
        paragraphs: [
          "Factors that increase the chance of Type 2 diabetes include: being overweight (especially around the abdomen); physical inactivity; age (risk increases after 45); family history; high blood pressure or high cholesterol; and gestational diabetes (diabetes during pregnancy) increases later risk.",
        ],
      },
      {
        heading: "How to Manage and Prevent Diabetes",
        paragraphs: [
          "Eat a healthy diet: Focus on healthy fats (nuts, seeds, avocado, olive oil), lean proteins (chicken, fish, beans, lentils), fresh fruits and vegetables, and whole grains. Limit sugary drinks, candy, and baked goods.",
          "Get active: Aim for at least 150 minutes of moderate exercise per week (walking, swimming, cycling).",
          "Maintain a healthy weight: Losing 5–10% of body weight can improve blood sugar control.",
          "Monitor your blood sugar: Your doctor will recommend how often to check based on your treatment plan.",
          "Take medication as prescribed: Follow your doctor's advice; some people need medications or insulin in addition to lifestyle changes.",
          "Manage stress: Chronic stress can raise blood sugar. Try yoga, deep breathing, or walking.",
          "Quit smoking: Smoking increases the risk of complications from diabetes.",
        ],
      },
      {
        heading: "Conclusion: Taking Control of Your Health",
        paragraphs: [
          "Diabetes doesn't have to control your life. With the right lifestyle changes and treatment, you can live a healthy, active life. Regular checkups, eating well, staying active, and managing stress are key. If you're concerned about your risk for diabetes, talk to your doctor. Early detection and treatment can make a big difference. Small changes can lead to big improvements in your health!",
          "Need an appointment? Feel free to schedule here.",
        ],
      },
    ],
  },
] as const;

export type ArticleSlug = (typeof WELLNESS_ARTICLES)[number]["slug"];

export function getArticleBySlug(slug: string) {
  return WELLNESS_ARTICLES.find((a) => a.slug === slug) ?? null;
}

export function getAllArticleSlugs(): ArticleSlug[] {
  return WELLNESS_ARTICLES.map((a) => a.slug);
}
