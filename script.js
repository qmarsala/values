var mainEl = document.getElementById("main")
var veryImportantToMe = []
var importantToMe = []
var notImportantToMe = []
var currentValueIndex = 0

var values = [
    {
        "id": 1,
        "title": "ACCEPTANCE",
        "description": "to be accepted as I am"
    },
    {
        "id": 2,
        "title": "ACCURACY",
        "description": "to be accurate in my opinions and beliefs"
    },
    {
        "id": 3,
        "title": "ACHIEVEMENT",
        "description": "to have important accomplishments"
    },
    {
        "id": 4,
        "title": "ADVENTURE",
        "description": "to have new and exciting experiences"
    },
    {
        "id": 5,
        "title": "ATTRACTIVENESS",
        "description": "to be physically attractive"
    },
    {
        "id": 6,
        "title": "AUTHORITY",
        "description": "to be in charge of and responsible for others"
    },
    {
        "id": 7,
        "title": "AUTONOMY",
        "description": "to be self-determined and independent"
    },
    {
        "id": 8,
        "title": "BEAUTY",
        "description": "to appreciate beauty around me"
    },
    {
        "id": 9,
        "title": "CARING",
        "description": "to take care of others"
    },
    {
        "id": 10,
        "title": "CHALLENGE",
        "description": "to take on difficult tasks and problems"
    },
    {
        "id": 11,
        "title": "CHANGE",
        "description": "to have a life full of change and variety"
    },
    {
        "id": 12,
        "title": "COMFORT",
        "description": "to have a pleasant and comfortable life"
    },
    {
        "id": 13,
        "title": "COMMITMENT",
        "description": "to make enduring, meaningful commitments"
    },
    {
        "id": 14,
        "title": "COMPASSION",
        "description": "to feel and act on concern for others"
    },
    {
        "id": 15,
        "title": "CONTRIBUTION",
        "description": "to make a lasting contribution in the world"
    },
    {
        "id": 16,
        "title": "COOPERATION",
        "description": "to work collaboratively with others"
    },
    {
        "id": 17,
        "title": "COURTESY",
        "description": "to be considerate and polite toward others"
    },
    {
        "id": 18,
        "title": "CREATIVITY",
        "description": "to have new and original ideas"
    },
    {
        "id": 19,
        "title": "DEPENDABILITY",
        "description": "to be reliable and trustworthy"
    },
    {
        "id": 20,
        "title": "DUTY",
        "description": "to carry out my duties and obligations"
    },
    {
        "id": 21,
        "title": "ECOLOGY",
        "description": "to live in harmony with the environment"
    },
    {
        "id": 22,
        "title": "EXCITEMENT",
        "description": "to have a life full of thrills and stimulation"
    },
    {
        "id": 23,
        "title": "FAITHFULNESS",
        "description": "to be loyal and true in relationships"
    },
    {
        "id": 24,
        "title": "FAME",
        "description": "to be known and recognized"
    },
    {
        "id": 25,
        "title": "FAMILY",
        "description": "to have a happy, loving family"
    },
    {
        "id": 26,
        "title": "FITNESS",
        "description": "to be physically fit and strong"
    },
    {
        "id": 27,
        "title": "FLEXIBILITY",
        "description": "to adjust to new circumstances easily"
    },
    {
        "id": 28,
        "title": "FORGIVENESS",
        "description": "to be forgiving of others"
    },
    {
        "id": 29,
        "title": "FRIENDSHIP",
        "description": "to have close, supportive friends"
    },
    {
        "id": 30,
        "title": "FUN",
        "description": "to play and have fun"
    },
    {
        "id": 31,
        "title": "GENEROSITY",
        "description": "to give what I have to others"
    },
    {
        "id": 32,
        "title": "GENUINENESS",
        "description": "to act in a manner that is true to who I am"
    },
    {
        "id": 33,
        "title": "GOD’S WILL",
        "description": "to seek and obey the will of God"
    },
    {
        "id": 34,
        "title": "GROWTH",
        "description": "to keep changing and growing"
    },
    {
        "id": 35,
        "title": "HEALTH",
        "description": "to be physically well and healthy"
    },
    {
        "id": 36,
        "title": "HELPFULNESS",
        "description": "to be helpful to others"
    },
    {
        "id": 37,
        "title": "HONESTY",
        "description": "to be honest and truthful"
    },
    {
        "id": 38,
        "title": "HOPE",
        "description": "to maintain a positive and optimistic outlook"
    },
    {
        "id": 39,
        "title": "HUMILITY",
        "description": "to be modest and unassuming"
    },
    {
        "id": 40,
        "title": "HUMOR",
        "description": "to see the humorous side of myself and the world"
    },
    {
        "id": 41,
        "title": "INDEPENDENCE",
        "description": "to be free from dependence on others"
    },
    {
        "id": 42,
        "title": "INDUSTRY",
        "description": "to work hard and well at my life tasks"
    },
    {
        "id": 43,
        "title": "INNER PEACE",
        "description": "to experience personal peace"
    },
    {
        "id": 44,
        "title": "INTIMACY",
        "description": "to share my innermost experiences with others"
    },
    {
        "id": 45,
        "title": "JUSTICE",
        "description": "to promote fair and equal treatment for all"
    },
    {
        "id": 46,
        "title": "KNOWLEDGE",
        "description": "to learn and contribute valuable knowledge"
    },
    {
        "id": 47,
        "title": "LEISURE",
        "description": "to take time to relax and enjoy"
    },
    {
        "id": 48,
        "title": "LOVED",
        "description": "to be loved by those close to me"
    },
    {
        "id": 49,
        "title": "LOVING",
        "description": "to give love to others"
    },
    {
        "id": 50,
        "title": "MASTERY",
        "description": "to be competent in my everyday activities"
    },
    {
        "id": 51,
        "title": "MINDFULNESS",
        "description": "to live conscious and mindful of the present moment"
    },
    {
        "id": 52,
        "title": "MODERATION",
        "description": "to avoid excesses and find a middle ground"
    },
    {
        "id": 53,
        "title": "MONOGAMY",
        "description": "to have one close, loving relationship"
    },
    {
        "id": 54,
        "title": "NON-CONFORMITY",
        "description": "to question and challenge authority and norms"
    },
    {
        "id": 55,
        "title": "NURTURANCE",
        "description": "to take care of and nurture others"
    },
    {
        "id": 56,
        "title": "OPENNESS",
        "description": "to be open to new experiences, ideas, and options"
    },
    {
        "id": 57,
        "title": "ORDER",
        "description": "to have a life that is well-ordered and organized"
    },
    {
        "id": 58,
        "title": "PASSION",
        "description": "to have deep feelings about ideas, activities, or people"
    },
    {
        "id": 59,
        "title": "PLEASURE",
        "description": "to feel good"
    },
    {
        "id": 60,
        "title": "POPULARITY",
        "description": "to be well-liked by many people"
    },
    {
        "id": 61,
        "title": "POWER",
        "description": "to have control over others"
    },
    {
        "id": 62,
        "title": "PURPOSE",
        "description": "to have meaning and direction in my life"
    },
    {
        "id": 63,
        "title": "RATIONALITY",
        "description": "to be guided by reason and logic"
    },
    {
        "id": 64,
        "title": "REALISM",
        "description": "to see and act realistically and practically"
    },
    {
        "id": 65,
        "title": "RESPONSIBILITY",
        "description": "to make and carry out responsible decisions"
    },
    {
        "id": 66,
        "title": "RISK",
        "description": "to take risks and chances"
    },
    {
        "id": 67,
        "title": "ROMANCE",
        "description": "to have intense, exciting love in my life"
    },
    {
        "id": 69,
        "title": "SAFETY",
        "description": "to be safe and secure"
    },
    {
        "id": 68,
        "title": "SELF-ACCEPTANCE",
        "description": "to accept myself as I am"
    },
    {
        "id": 70,
        "title": "SELF-CONTROL",
        "description": "to be disciplined in my own actions"
    },
    {
        "id": 71,
        "title": "SELF-ESTEEM",
        "description": "to feel good about myself"
    },
    {
        "id": 72,
        "title": "SELF-KNOWLEDGE",
        "description": "to have a deep and honest understanding of myself"
    },
    {
        "id": 73,
        "title": "SERVICE",
        "description": "to be of service to others"
    },
    {
        "id": 74,
        "title": "SEXUALITY",
        "description": "to have an active and satisfying sex life"
    },
    {
        "id": 75,
        "title": "SIMPLICITY",
        "description": "to live life simply, with minimal needs"
    },
    {
        "id": 76,
        "title": "SOLITUDE",
        "description": "to have time and space where I can be apart from others"
    },
    {
        "id": 77,
        "title": "SPIRITUALITY",
        "description": "to grow and mature spiritually"
    },
    {
        "id": 78,
        "title": "STABILITY",
        "description": "to have a life that stays fairly consistent"
    },
    {
        "id": 79,
        "title": "TOLERANCE",
        "description": "to accept and respect those who differ from me"
    },
    {
        "id": 80,
        "title": "TRADITION",
        "description": "to follow respected patterns of the past"
    },
    {
        "id": 81,
        "title": "VIRTUE",
        "description": "to live a morally pure and excellent life"
    },
    {
        "id": 82,
        "title": "WEALTH",
        "description": "to have plenty of money"
    },
    {
        "id": 83,
        "title": "WORLD PEACE",
        "description": "to work to promote peace in the world"
    }
]

const selectClassification = (classification, id) => {
    classification.push(id)
    next()
}

const next = () => {
    currentValueIndex++
    renderCurrentValue()
    renderResults(veryImportantToMe, 'very-important')
    renderResults(importantToMe, 'important')
    renderResults(notImportantToMe, 'not-important')
}

const renderCurrentValue = () => {
    var valueCard = document.getElementById("current-value");
    if (currentValueIndex >= values.length) {
        valueCard.innerHTML = ''
    } else {
        valueCard.innerHTML = `<div class="value-card">
            <div class="value-title">${values[currentValueIndex].title}</div>
            <div class="value-description">${values[currentValueIndex].description}</div>
            <div class="value-classification">
                <button class="value-most-important" 
                    onclick='selectClassification(veryImportantToMe, ${values[currentValueIndex].id})'>Very Important</button>
                <button class="value-important" 
                    onclick='selectClassification(importantToMe, ${values[currentValueIndex].id})'>Important</button>
                <button class="value-not-important"
                    onclick='selectClassification(notImportantToMe, ${values[currentValueIndex].id})'>Not Important</button>
            </div>
        </div>`
    }
}

const renderResults = (classification, id) => {
    var results = document.getElementById(id);
    results.innerHTML = ''
    classification.forEach(i => {
        var el = document.createElement("div")
        var title = values.find(x => x.id == i).title;
        el.className = 'result-entry';
        el.innerHTML = `${title}`
        results.appendChild(el)
    });
}

const reset = () => {
    currentValueIndex = 0
    veryImportantToMe = []
    importantToMe = []
    notImportantToMe = []
    renderCurrentValue()
    renderResults(veryImportantToMe, 'very-important')
    renderResults(importantToMe, 'important')
    renderResults(notImportantToMe, 'not-important')
}
reset()