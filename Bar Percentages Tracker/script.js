const languages = [
    { name: 'HTML', percentage: 68.2 },
    { name: 'CSS', percentage: 27.3 },
    { name: 'JavaScript', percentage: 4.5 },
    { name: 'Python', percentage: 10 },
    { name: 'BootStrap', percentage: 5 },
    { name: 'SQL', percentage: 8 },
    { name: 'Node.js', percentage: 6 },
    // Add more languages as needed
];

// Update language progress bars
const languagesList = document.querySelector('.languages-list');

languages.forEach(language => {
    const languageItem = document.createElement('li');
    languageItem.className = 'language';
    languageItem.innerHTML = `
        <span class="language-name">${language.name}</span>
        <div class="language-bar">
            <div class="language-progress" style="width: ${language.percentage}%;"></div>
        </div>
        <span class="language-percentage">${language.percentage}%</span>
    `;
    languagesList.appendChild(languageItem);
});
