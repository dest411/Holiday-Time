function togglemenu(changelanguage) {
        const value = window.getComputedStyle(changelanguage).display;
        if (value === 'none'){
            changelanguage.style.display = 'flex';
        }
        if (value === 'flex'){
            changelanguage.style.display = 'none';
        }
    }