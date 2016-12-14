({
    block : 'page',
    title : "Tatiana Shatilova's Portfolio",
    head : [
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts : [
        { elem : 'js', url : 'index.min.js' }
    ],
    content : [
        {
            block : 'nav',
            content : [
                {
                    elem : 'nav-item',
                    content : 'Home'
                },
                {
                    elem : 'nav-item',
                    content : 'Projects'
                },
                {
                    elem : 'nav-item',
                    content : 'Skills'
                },
                {
                    elem : 'nav-item',
                    content : 'Contacts'
                }
            ]
        },
        {
            block : 'section-home',
            content : [
                {
                    elem : 'about',
                    content : '...'
                }
            ]
        },
        {
            block : 'section-projects',
            content : [
                {
                    elem : 'project',
                    content : '...'
                }
            ]
        },
        {
            block : 'section-skills',
            content : [
                {
                    elem : 'skill',
                    content : '...'
                }
            ]
        },
        {
            block : 'section-contacts',
            content : [
                {
                    elem : 'contact',
                    content : '...'
                }
            ]
        }
    ]
})