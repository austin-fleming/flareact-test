export default {
    name: 'articlePortableText',
    type: 'array',
    title: 'Article Portable Text',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                {
                    title: 'Normal',
                    value: 'normal'
                }
            ],
            lists: [],
            marks: {
                decorators: [
                    {
                        title: 'Strong', 
                        value: 'strong'
                    },
                    {
                        title: 'Emphasized', 
                        value: 'em'
                    }
                ] 
            },
            annotations: [
                {type: 'internalLink'},
                {type: 'externalLink'}
            ]
        }
    ]
}